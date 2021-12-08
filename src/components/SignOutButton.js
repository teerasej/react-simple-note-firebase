// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getAuth, signOut } from '@firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import actions from '../redux/actions'

export default function SignOutButton() {

    const dispatch = useDispatch()

    const userSigningOut = async () => {
        await signOut(getAuth())
        dispatch({
            type: actions.USER_SIGNED_IN,
            payload: false
        })
    }

    return (
        <div>
           <button onClick={userSigningOut}>Sign out</button> 
        </div>
    )
}
