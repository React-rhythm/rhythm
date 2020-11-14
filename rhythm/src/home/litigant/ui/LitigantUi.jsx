import React,{useState,useEffect} from 'react'

import {Container} from "./StyledLitigant"

import Swiper from "./Swiper"
import TabNotice from "./TabNotice"
import Search from "@c/search/Search"
import Bell from "@c/bell/Bell"

import http from "@u/https"
const LitigantUi = (props) => {

    const [litigantList,setList] = useState(undefined)
    
    useEffect(() => {
        async function fetchData() {
            const result = await http.get("http://10.9.27.166:8080/searchInfo/show")
            console.log(result)
            setList(result.info)
          }
          fetchData();
    },[])
   
    return (
        <Container>
            <Search
                innerbg=" #e6e6e6"
                hasborder={false}
                radius={0.06}
            ></Search>
            {
                true ? <Bell {...props}></Bell> : null
            }
            
            <Swiper></Swiper>
            <TabNotice {...props} {...litigantList}></TabNotice>
        </Container>
    )
    
}

export default LitigantUi