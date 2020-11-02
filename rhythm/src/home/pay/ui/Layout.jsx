import React from 'react'
import { 
    PayWrap
} from './pay'
const Layout = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>版 &ensp;&ensp;&ensp; 面 :</label>
            <input type="text" id='pay'/>
        </PayWrap>
    )
}

export default Layout