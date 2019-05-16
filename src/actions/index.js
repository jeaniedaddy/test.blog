import JSONPlaceholder from "../apis/JSONPlaceholder";

export const fetchPosts = () => { 
    return async function(dispatch){
        const res = await JSONPlaceholder.get('/posts');
        //console.log(res.data);
        dispatch({type: 'FETCH_POSTS', payload: res.data})
    }
}

export const fetchUser = (id) => {
    return async function(dispatch){
        const res = await JSONPlaceholder.get(`/users/${id}`);
        console.log(res.data);
        dispatch({type: 'FETCH_USER', payload: res.data});
    }
}


// export default { fetchPosts };