import React,{ useEffect,useState } from 'react'
import SearchUi from '../ui/SearchUi'
import {get} from '@u/http'


export default function Search() {
const [list,setList]= useState([])
const [value,setValue] = useState('')
  useEffect(() => {
    async function loadData(){
      // console.log(value)
      let result=await get({
        url:'/api/name'
      })
      setList(result.data)
    }
    loadData()
  }, [value])
  let searchArr=list.reduce((arr,item)=>{
    return arr.concat(item.list)
  },[])

  return (
   <SearchUi list={searchArr} onLoadData={setValue} ></SearchUi>
  )
}