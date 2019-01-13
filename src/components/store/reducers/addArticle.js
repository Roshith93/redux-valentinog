import { ADD_ARTICLE } from '../actions/action-types';


const initialState = {
    articles: [1]
}


const addArticle = (state = initialState, action) => {
    switch(action.type){
        case ADD_ARTICLE:
            return {
                ...state,
                articles: action.payload
            }
            default: return state
    }
}
export default addArticle;