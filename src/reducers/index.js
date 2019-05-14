import { combineReducers } from "redux";

const postsReducer= (posts=[], action) => {
    return posts; 
}

const usersReducer = (users=[], action)=> {
    return users; 
}

export default combineReducers({ 
    posts: postsReducer, 
    users: usersReducer
});