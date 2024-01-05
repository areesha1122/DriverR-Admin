import React, { useState } from 'react';
import * as Yup from "yup";
import ApiClient from 'api';
import { Form } from "antd";
import LoginBox from 'components/loginBox';
import SweetAlert from 'components/sweetAlert';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from "formik";
import CircularProgress from '@mui/material/CircularProgress';
import { StyledTextField, FieldErrorMessage, StyledPara } from './style';
import { StyledHeading, StyledAntInput, PrimaryButton } from 'components/globaStyle';

const Index = () => {
    const api = new ApiClient()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const initialValues = {
        email: "",
        password: ""
    }

    const suffix = (name, formik) => {
        return (
            <button
                type='button'
                onClick={() => formik.setFieldValue(name, "")}
                style={{
                    top: '16px',
                    padding: '0',
                    right: '16px',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    background: 'transparent'
                }}
            >
                <img src='images/cross-icon.svg' alt='cross-icon' />
            </button>
        )
    }

    const handleSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await api.post('super-admin/login', data)
            if (response.data.status) {
                const authToken = response.data.result.data.accessToken
                if (authToken) {
                    localStorage.setItem('authToken', authToken)
                    navigate("/admin/dashboard")
                }
            }
            else {
                SweetAlert('warning', 'Warning!', 'Invalid credentials')
            }
            setLoading(false)
        }
        catch (error) {
            setLoading(true)
            SweetAlert('error', 'Error!', `${error.message}`)
            setLoading(false)
        }
    }

    return (
        <LoginBox>
            <div className='text'>
                <StyledHeading>Admin Login</StyledHeading>
                <StyledPara color="#6B7280">Welcome back. Enter your credentials to access your account</StyledPara>
            </div>
            <div className='form-container'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(formik) => {
                        return (
                            <Form
                                noValidate
                                name='basic'
                                autoComplete='off'
                                onFinish={formik.handleSubmit}
                            >
                                <div className='field-control'>
                                    <Field name="email">
                                        {({ field }) => (
                                            <React.Fragment>
                                                <StyledAntInput
                                                    {...field}
                                                    type="email"
                                                    placeholder="Email"
                                                    autoComplete="current-username"
                                                />
                                                {field.value && suffix(field.name, formik)}
                                                <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                            </React.Fragment>
                                        )}
                                    </Field>
                                </div>

                                <div className='field-control'>
                                    <Field name="password">
                                        {({ field }) => (
                                            <React.Fragment>
                                                <StyledTextField
                                                    fullWidth
                                                    {...field}
                                                    label="Password"
                                                    variant="outlined"
                                                    autoComplete="current-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    error={formik.errors.password && formik.touched.password}
                                                />
                                                {field.value && !formik.errors.password && (
                                                    <button
                                                        type='button'
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        style={{
                                                            top: '16px',
                                                            padding: '0',
                                                            right: '16px',
                                                            border: 'none',
                                                            outline: 'none',
                                                            cursor: 'pointer',
                                                            position: 'absolute',
                                                            background: 'transparent'
                                                        }}
                                                    >
                                                        <img src='images/eye-icon.svg' alt='eye-icon' />
                                                    </button>
                                                )}
                                                {formik.errors.password && formik.touched.password && (
                                                    <img src='images/warning.svg' alt='warning' className='warn-icon' />
                                                )}
                                                <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                            </React.Fragment>
                                        )}
                                    </Field>
                                </div>

                                <div className="btn-container">
                                    <PrimaryButton
                                        type='submit'
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <React.Fragment>
                                                <CircularProgress size={22} color='inherit' style={{ marginRight: '10px' }} />
                                                <span>Login</span>
                                            </React.Fragment>
                                        ) : (
                                            <span>Login</span>
                                        )}
                                    </PrimaryButton>
                                </div>

                                <div className='forgot-password'>
                                    <span>Forgot password?</span>
                                    <Link to="forgot-password">Click Here</Link>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </LoginBox>
    )
}

export default Index
const validationSchema = Yup.object({
    email: Yup.string()
        .required('This field is required')
        .email('Invalid email address'),
    password: Yup.string()
        // .min(8, 'Invalid password')
        .max(20, 'Invalid password')
        .required('This field is required')
});