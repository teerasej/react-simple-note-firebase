// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ActionType from './actions'

const initialState = {
    userSignedIn: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionType.USER_SIGNED_IN:
        return { ...state, userSignedIn: payload }

    default:
        return state
    }
}
