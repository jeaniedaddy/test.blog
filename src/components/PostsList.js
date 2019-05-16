import React from 'react';
import {connect} from 'react-redux';

import { fetchPosts, fetchUser} from '../actions'
import UserHeader from './UserHeader';



class PostsList extends React.Component {

    componentDidMount= () => {
        this.props.fetchPosts();
    }

    renderList = () => {
        console.log(this.props.posts);

        return this.props.posts.map(post => 
            <div className='item' key={post.id}>
                <i className="large middle aligned icon user"></i>
                <div className='content'>
                    <div className='description'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
               
            </div>
            );
        // this.props.posts.map(post=>{
        //     return (
        //     <div key={post.id}>
        //         {post.title} <br/>
        //         {post.body} <br/>
        //         {post.userId}
        //     </div>);
        // })
    }
    render(){
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts, fetchUser})(PostsList); 