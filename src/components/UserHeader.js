import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {

    componentDidMount=()=> {
        //this.props.fetchUser(this.props.userId);
    }

    getUser = (userId)=> {
        const user =  this.props.users.find(user => user.id === userId);
        if(user){ 
            //console.log(userId);
            return user.name; 
        }
        else return 'loading';
    }
    render(){
        if(this.props.user){
            return <div className='header'>{this.props.user.name}</div>;
        } else {
            return <div className='header'> loading ...</div>
        }
    }
}

const mapStateToProps = (state,ownProps)=> {
    return {user: state.users.find(user=>user.id === ownProps.userId)}; 
}
export default connect(mapStateToProps, {fetchUser})(UserHeader); 