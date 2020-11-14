import React from 'react';
import { SuccessWrap } from './styledSuccess'
import { NavLink } from 'react-router-dom'
const success = (props) => {
    let roles=props.history.location.state.roles
    return (
        <NavLink to={{
            pathname: `/login`,
            state:{roles:roles}
        }}
      >
            <SuccessWrap>
                直接登录
            </SuccessWrap>
        </NavLink>

    );
}

export default success;