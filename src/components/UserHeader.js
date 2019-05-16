import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {

    componentDidMount=()=> {
        this.props.fetchUser(this.props.userId);
    }

    getUser = (userId)=> {
        const user =  this.props.users.find(user => user.id === userId);
        if(user){ return user.name; }
        else return 'loading';
    }
    render(){
        return (
            <div>{this.getUser(this.props.userId)}</div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {users: state.users}; 
}
export default connect(mapStateToProps, {fetchUser})(UserHeader); 