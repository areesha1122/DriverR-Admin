import React, { useState } from 'react';
import * as Yup from "yup";
import { Form } from "antd";
import { Formik, Field, ErrorMessage } from "formik";
import { primaryBlue, grey300 } from 'components/globaStyle';
import { StyledTextField, FieldErrorMessage, StyledGeneral } from './style';


const Index = () => {

    const initialValues = {
        new_password: "",
        current_password: "",
        confirm_password: "",
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
                            reset="true"
                            label={label}
                            variant="outlined"
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
                                <img src='/images/eye-icon.svg' alt='eye-icon' />
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
        alert('updated')
    }

    return (
        <StyledGeneral>
            <h2>Change password</h2>
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
                                <PasswordInput label='Current password' name='current_password' />
                                {/* <Field name="current_password">
                                    {({ field }) => (
                                        <React.Fragment>
                                            <StyledTextField
                                                fullWidth
                                                {...field}
                                                type="password"
                                                variant="outlined"
                                                name='current_password'
                                                label="Current password"
                                            />
                                            <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                        </React.Fragment>
                                    )}
                                </Field> */}
                            </div>

                            <div className='new_confirm-password'>
                                <div className='match-password'>
                                    <PasswordInput label='New password' name='new_password' />
                                </div>
                                <div className='match-password'>
                                    <PasswordInput label='Confirm password' name='confirm_password' />
                                </div>
                                {/* <Field name="new_password">
                                    {({ field }) => (
                                        <React.Fragment>
                                            <StyledTextField
                                                fullWidth
                                                {...field}
                                                type="password"
                                                variant="outlined"
                                                name='new_password'
                                                label="New password"
                                            />
                                            <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                        </React.Fragment>
                                    )}
                                </Field> */}
                            </div>

                            {/* <div className='field-control'>
                                <Field name="confirm_password">
                                    {({ field }) => (
                                        <React.Fragment>
                                            <StyledTextField
                                                fullWidth
                                                {...field}
                                                type="password"
                                                variant="outlined"
                                                name='confirm_password'
                                                label="Confirm password"
                                            />
                                            <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                        </React.Fragment>
                                    )}
                                </Field>
                            </div> */}

                            <div className='btn-container'>
                                <button type='button' className='cancel-btn'>Cancel</button>
                                <button
                                    type='submit'
                                    className='save-btn'
                                    style={{
                                        width: '119px',
                                        color: '#FFFFFF',
                                        background: primaryBlue
                                    }}
                                >
                                    Save changes
                                </button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </StyledGeneral>
    )
}

export default Index
const validationSchema = Yup.object({
    name: Yup.string()
        .required('This field is required')
        .max(50, 'Company name can have max 50 characters'),
    email: Yup.string()
        .required('This field is required')
        .email('Invalid email address'),
});