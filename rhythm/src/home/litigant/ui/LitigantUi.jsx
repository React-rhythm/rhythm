import React from 'react'

import {Container} from "./StyledLitigant"

import Swiper from "./Swiper"
import TabNotice from "./TabNotice"

const LitigantUi = (props) => {
   
    return (
        <Container>
            <Swiper></Swiper>
            <TabNotice {...props}></TabNotice>
        </Container>
    )
    
}

export default LitigantUi