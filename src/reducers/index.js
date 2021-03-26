import { combineReducers } from 'redux'
import authReducer from './auth'
import entriesReducer from './entries'


export default combineReducers({
    auth: authReducer,
    entries: entriesReducer
})