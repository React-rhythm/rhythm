import React from 'react'

import {Container} from "./StyledLitigant"

import Swiper from "./Swiper"
import TabNotice from "./TabNotice"


const LitigantUi = () => {
   
    return (
        <Container>
            <Swiper></Swiper>
            <TabNotice></TabNotice>
        </Container>
    )
    
}

export default LitigantUi