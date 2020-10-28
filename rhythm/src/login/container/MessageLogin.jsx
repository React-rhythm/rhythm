import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Message from '../ui/Message'

@withRouter
class MessageLogin extends Component {
    render() {
        return (
           <Message {...this.props}></Message>
        );
    }
}

export default MessageLogin;