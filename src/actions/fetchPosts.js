import JSONPlaceholder from '../apis/JSONPlaceholder';

const fetchPosts = () => async (dispatch) => {
        const res = await JSONPlaceholder.get('/posts');
        //console.log(res.data);
        dispatch({type: 'FETCH_POSTS', payload: res.data});
};

export default fetchPosts;