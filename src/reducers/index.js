import {combineReducers} from 'redux';
import categories from './categoryReduder';
import movies from './movieReducer'

var rootReducer = combineReducers({
    categories,
    movies
})

export default rootReducer;