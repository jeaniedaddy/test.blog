import JSONPlaceholder from '../apis/JSONPlaceholder';

const fetchUser = (id) =>  async (dispatch) => {
        const res = await JSONPlaceholder.get(`/users/${id}`);
        //console.log(res.data);
        dispatch({type: 'FETCH_USER', payload: res.data});
    
};

export default fetchUser;