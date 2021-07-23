import React, { useState } from 'react';
import './Login.css';
import { Formik, Field, Form } from 'formik';
import Input from "../../shared/components/Input/Input";
import * as Yup from 'yup';
import axios from 'axios';

const initialValues = {
    email: '',
    password: ''
};

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Required').email('Must be valid email'),
    password: Yup.string().required('Required').min(8, 'At least 8 characters')
});

const Login = ({ loginSuccess, title }) => {
    const [showLoginSuccess, setShowLoginSuccess] = useState(false);
    const handleSubmit = (values, { setSubmitting }) => {
        axios({
            method: 'GET',
            url: 'https://60dff0ba6b689e001788c858.mockapi.io/token',
            data: values
        }).then(response => {
            setSubmitting(false);
            setShowLoginSuccess(true);
            loginSuccess({ userId: response.data.userId, token: response.data.token });
            axios.defaults.headers.common['Authorization'] = response.data.token;
        }).catch(() => {
            setSubmitting(false);
        })
    };

    return (
        <div>
            { title && <h5>{ title }</h5> }
            <Formik
                initialValues={ initialValues }
                onSubmit={ handleSubmit }
                validationSchema={ LoginSchema }
            >
                { ({ isSubmitting }) => (
                    <Form>
                        <Field
                            className="form--input"
                            type="text"
                            placeholder="Email"
                            name="email"
                            component={ Input }
                        />
                        <Field
                            className="form--input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            component={ Input }
                        />
                        <button
                            className="form--button-submit"
                            type="submit"
                            disabled={ isSubmitting }
                        >
                            Submit
                        </button>
                        { showLoginSuccess &&
                        <div className="form--login-success">
                            Login success
                        </div> }
                    </Form>) }
            </Formik>
        </div>
    );
};

export default Login;