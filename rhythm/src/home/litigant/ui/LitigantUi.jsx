import React from 'react'

import {Container} from "./StyledLitigant"

import Swiper from "./Swiper"
import TabNotice from "./TabNotice"
import Search from "@c/search/Search"
import Bell from "@c/bell/Bell"

const LitigantUi = (props) => {
   
    return (
        <Container>
            <Search
                innerbg=" #e6e6e6"
                hasborder={false}
                radius={0.06}
            ></Search>
            {
                true ? <Bell></Bell> : null
            }
            
            <Swiper></Swiper>
            <TabNotice {...props}></TabNotice>
        </Container>
    )
    
}

export default LitigantUi