import React,{ useEffect,useState } from 'react'
import SearchUi from '../ui/SearchUi'
import http from '@u/http'


export default function Search() {
const [list,setList]= useState([])
const [value,setValue] = useState()
const [isInit, setInit] = useState(true)
  useEffect(() => {
    if (isInit) {
      setInit(false);
      } else {
          async function loadData(){
            console.log(value)
            let result=await http.gett(
              `http://10.9.27.166:8080/searchInfo/byCaseIdAndName/${value}`
            )
            console.log(result);
            if(result.data.flag===0){
              setList(['没有搜索到该案号'])
            }else{
              console.log(result);
              let resArr=[]
              resArr.push(result.data.SearchDto)
              console.log(resArr);
              setList(resArr)
            }
          }
          loadData()
        }
        }, [value])
      
    // let searchArr=list.length>0 && list.reduce((arr,item)=>{
    //   return arr.concat(item.list)
    // },[])
  
    return (
     <SearchUi list={list} onLoadData={setValue} ></SearchUi>
    )
    
}
