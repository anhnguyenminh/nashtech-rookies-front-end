import React from 'react';
import {Formik} from 'formik';
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";

const initialValues = {email: '', password: ''};
const validateValues = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (values.password.length < 8) {
        errors.password = 'At lease 8 chars'
    }
    return errors;
}
const onSubmit = (values, {setSubmitting}) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 400);
}

const RegisterPage = () => {
    return (
        <div className="register-form">
            <h1>Create New Account</h1>
            <Formik
                initialValues={initialValues}
                validate={validateValues}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            {/*<Form.Group controlId="validationFormik01">*/}
                            {/*    <Form.Label>Email</Form.Label>*/}
                            {/*    <Form.Control*/}
                            {/*        type="text"*/}
                            {/*        name="email"*/}
                            {/*        value={values.email}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        isValid={touched.email && !errors.email}*/}
                            {/*    />*/}
                            {/*    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
                            {/*</Form.Group>*/}
                            {/*<Form.Group controlId="validationFormik01">*/}
                            {/*    <Form.Label>Email</Form.Label>*/}
                            {/*    <Form.Control*/}
                            {/*        type="text"*/}
                            {/*        name="email"*/}
                            {/*        value={values.email}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        isValid={touched.email && !errors.email}*/}
                            {/*    />*/}
                            {/*    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
                            {/*</Form.Group>*/}
                            {/*<Form.Group controlId="validationFormik01">*/}
                            {/*    <Form.Label>Email</Form.Label>*/}
                            {/*    <Form.Control*/}
                            {/*        type="text"*/}
                            {/*        name="email"*/}
                            {/*        value={values.email}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        isValid={touched.email && !errors.email}*/}
                            {/*    />*/}
                            {/*    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
                            {/*</Form.Group>*/}
                            <Form.Group controlId="validationFormik01">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationFormik02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                />

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Button type="submit">Register</Button>
                    </Form>
                )}
            </Formik>
        </div>

    );
};

export default RegisterPage;