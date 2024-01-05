import React, { useState } from 'react';
import * as Yup from "yup";
import { Form } from "antd";
import LoginBox from 'components/loginBox';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from "formik";
import { StyledHeading, PrimaryButton } from 'components/globaStyle';
import { StyledTextField, FieldErrorMessage, StyledPara } from './style';

const Index = () => {
    const navigate = useNavigate()

    const initialValues = {
        newPassword: "",
        confirmPassword: ""
    }

    const PasswordInput = ({ label, name }) => {
        const [showPassword, setShowPassword] = useState(false)
        return (
            <Field name={name}>
                {({ field, form }) => (
                    <React.Fragment>
                        <StyledTextField
                            fullWidth
                            {...field}
                            reset={true}
                            label={label}
                            variant="outlined"
                            autoComplete="new-password"
                            type={showPassword ? 'text' : 'password'}
                            error={form.errors[name] && form.touched[name]}
                        />
                        {field.value && (
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
                        <ErrorMessage name={name} component={FieldErrorMessage} />
                    </React.Fragment>
                )}
            </Field>
        )
    }

    const handleSubmit = async (data, { resetForm }) => {
        resetForm()
        navigate("/password-changed")
    }

    return (
        <LoginBox>
            <div className='text'>
                <StyledHeading>Reset password</StyledHeading>
                <StyledPara color="#616161">Create a new password for your account</StyledPara>
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
                                    {/* <Field name="newPassword">
                                        {({ field }) => (
                                            <React.Fragment>
                                                <StyledTextField
                                                    fullWidth
                                                    {...field}
                                                    reset={true}
                                                    // type='password'
                                                    variant="outlined"
                                                    label="New password"
                                                    autoComplete="new-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    error={formik.errors.newPassword && formik.touched.newPassword}
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
                                                <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                            </React.Fragment>
                                        )}
                                    </Field> */}
                                    <PasswordInput label='New password' name='newPassword' />
                                </div>

                                <div className='field-control'>
                                    <PasswordInput label='Confirm password' name='confirmPassword' />
                                </div>

                                <div className="btn-container" style={{ marginBottom: '33px' }}>
                                    <PrimaryButton type='submit'>Reset password</PrimaryButton>
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
    newPassword: Yup.string()
        .required('This field is required')
        .min(8, 'Password must contain min 8 characters')
        .max(20, 'Password can have max 20 characters'),
    confirmPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});