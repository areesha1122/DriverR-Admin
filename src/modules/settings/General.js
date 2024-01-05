import React, { useState } from 'react';
import * as Yup from "yup";
import { Form } from "antd";
import { Formik, Field, ErrorMessage } from "formik";
import { primaryBlue, grey300 } from 'components/globaStyle';
import { StyledTextField, FieldErrorMessage, StyledGeneral } from './style';


const Index = () => {
    const [file, setFile] = useState(null)

    const initialValues = {
        name: "",
        email: "",
    }

    const handleChnage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => setFile(reader.result)
        reader.readAsDataURL(file)
    }

    const handleSubmit = async (data, { resetForm }) => {
        resetForm()
        setFile(null)
        alert('updated')
        data.file = file
    }

    return (
        <StyledGeneral>
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
                                <div className='content'>
                                    <div className='img-shown'>
                                        {file ? <img src={file} alt='file' /> : <span>Logo</span>}
                                    </div>
                                    <div className='file-upload'>
                                        <label htmlFor='file'>
                                            <input
                                                id='file'
                                                type='file'
                                                accept='image/*'
                                                style={{ display: "none" }}
                                                // inputProps={{ multiple: true }}
                                                onChange={(e) => handleChnage(e)}
                                            />
                                            {file ? 'Change photo' : 'Upload logo'}
                                        </label>
                                        {file && <button type='button' className='remove-btn' onClick={() => setFile(null)}>Remove photo</button>}
                                    </div>
                                </div>
                            </div>

                            <div className='field-control'>
                                <Field name="name">
                                    {({ field }) => (
                                        <React.Fragment>
                                            <StyledTextField
                                                fullWidth
                                                {...field}
                                                name='name'
                                                type="text"
                                                variant="outlined"
                                                label="Company name"
                                            />
                                            <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                        </React.Fragment>
                                    )}
                                </Field>
                            </div>

                            <div className='field-control'>
                                <Field name="email">
                                    {({ field }) => (
                                        <React.Fragment>
                                            <StyledTextField
                                                fullWidth
                                                {...field}
                                                type="email"
                                                name='email'
                                                label="Email"
                                                variant="outlined"
                                            />
                                            <ErrorMessage name={field.name} component={FieldErrorMessage} />
                                        </React.Fragment>
                                    )}
                                </Field>
                            </div>

                            <div className='btn-container'>
                                <button type='button' className='cancel-btn'>Cancel</button>
                                <button
                                    type='submit'
                                    disabled={!file}
                                    className='save-btn'
                                    style={{
                                        width: '119px',
                                        color: file ? '#F9FAFB' : '#FFFFFF',
                                        background: file ? primaryBlue : grey300
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