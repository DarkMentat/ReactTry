import { combineReducers } from 'redux'
import comunities from './comunitiesReducer'
import profiles from './profilesReducer'

export default combineReducers({
    comunities,
    profiles
})
