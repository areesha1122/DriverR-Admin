import React from 'react';
import * as Yup from "yup";
import { Form } from "antd";
import LoginBox from 'components/loginBox';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from "formik";
import { FieldErrorMessage, StyledPara } from './style';
import { StyledHeading, StyledAntInput, PrimaryButton } from 'components/globaStyle';

const Index = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: "",
  }

  const suffix = (name, formik) => {
    return (
      <button
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

  const handleSubmit = async (data, { resetForm }) => {
    resetForm()
    navigate("/check-inbox")
  }

  return (
    <LoginBox>
      <div className='text'>
        <StyledHeading>Forgot password</StyledHeading>
        <StyledPara color="#616161">Enter the email of your account and we will send the email to reset your password.</StyledPara>
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
                        />
                        {field.value && suffix(field.name, formik)}
                        <ErrorMessage name="email" component={FieldErrorMessage} />
                      </React.Fragment>
                    )}
                  </Field>
                </div>

                <div className="btn-container">
                  <PrimaryButton type='submit'>Send reset password link</PrimaryButton>
                </div>

                <div className='back-btn'>
                  <PrimaryButton type='button' onClick={() => navigate("/")}>Back to login</PrimaryButton>
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
});