import { combineReducers } from "redux";

const postsReducer= (posts=[], action) => {
   if(action.type === 'FETCH_BLOGS'){
       return action.payload;
   }
    return posts; 
}

const usersReducer = (users=[], action)=> {
    return users; 
}

export default combineReducers({ 
    posts: postsReducer, 
    users: usersReducer
});