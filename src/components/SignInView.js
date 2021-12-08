// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


import React, { useState } from 'react'


export default function SignInView() {

    const [isRequestRegister, setIsRequestRegister] = useState(false)

    return (
        <div>
            {
                isRequestRegister ?
                <h1>Register</h1>
                : <h1>Sign in</h1>
            }
            <div>
                <label>Email:</label>
                <input/>
            </div>
            <div>
                <label>Password:</label>
                <input/>
            </div>
            {
                isRequestRegister ?
                <button>Register</button>
                : <button>Sign in</button>
            }
            
        </div>
    )
}
