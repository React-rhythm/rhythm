import React from 'react'
import { 
    PayWrap
} from './pay'
const News = (props) => {
    return (
        <PayWrap>
            <label htmlFor='type'>报 &ensp;&ensp;&ensp; 社 :</label>
            <input type="text" id='pay'/>
        </PayWrap>
    )
}

export default News