// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


import React, { useState } from 'react'
import { useFormik } from 'formik';

export default function SignInView() {

    const [isRequestRegister, setIsRequestRegister] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                {
                    isRequestRegister ?
                        <h1>Register</h1>
                        : <h1>Sign in</h1>
                }
                <div>
                    <label>Email:</label>
                    <input id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                </div>
                <div>
                    <label>Password:</label>
                    <input id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                </div>
                {
                    isRequestRegister ?
                        <button type="submit">Register</button>
                        : <button type="submit">Sign in</button>
                }

            </div>
        </form>
    )
}
