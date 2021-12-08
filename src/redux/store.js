// Copyright (c) 2021 Teerasej Jiraphatchandej
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createStore } from 'redux'
import reducer from './reducer'

export default () => {
    return createStore(reducer)
}