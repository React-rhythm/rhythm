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
            const result = await http.get("http://114.67.247.63:8010/searchInfo/show")
            // console.log(result.SearchDto)
            setList(result.SearchDto)
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
            <TabNotice {...props} litigantList={litigantList}></TabNotice>
        </Container>
    )
    
}

export default LitigantUi