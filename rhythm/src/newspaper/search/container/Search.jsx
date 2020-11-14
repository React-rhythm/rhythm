import React,{ useEffect,useState } from 'react'
import SearchUi from '../ui/SearchUi'
import https from '@u/https'


export default function Search() {
const [list,setList]= useState([])
const [value,setValue] = useState('')
  useEffect(() => {
    async function loadData(){
      console.log(value)
      let result=await https.get(
        'http://10.9.27.166:8080/searchInfo/byCaseIdAndName/',
        {caseId:value}
      )
      setList(result.data)
    }
    loadData()
  }, [value])
  let searchArr=list && list.reduce((arr,item)=>{
    return arr.concat(item.list)
  },[])

  return (
   <SearchUi list={searchArr} onLoadData={setValue} ></SearchUi>
  )
}
