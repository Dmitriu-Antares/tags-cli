import { combineReducers } from 'redux';
import tags from './containers/Tags/redux/reducer'
import global from './containers/Header/redux/reducer'

const rootReducer =
    combineReducers({
        tags,
        global,
    })

export default rootReducer