import {combineReducers } from 'redux';
import addArticle from './addArticle';


const rootReducer = combineReducers({
   article: addArticle
})

export default rootReducer;