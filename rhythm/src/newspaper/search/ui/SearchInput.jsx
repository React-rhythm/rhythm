import React from 'react'
import { useState } from 'react'
import {InputWrap} from './styledSearch'



export default function SearchInput(props) {
  const [value,setValue] =useState('')
  const handleInput=(e)=>{
    let value=e.target.value
    setValue(value)
  }
  const handleKeyup=(e)=>{
    if(e.keyCode===13){
      props.onLoadData(value)
      setValue('')
    }
  }
  return (
    <InputWrap>
      <div>
        <input type="text" value={value} onChange={handleInput} onKeyUp={handleKeyup} 
        placeholder='请输入查询案号/姓名'/>
        <svg t="1603089251391" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3729" width="20" height="20"><path d="M950.162286 732.891429l204.544 148.955428a36.571429 36.571429 0 0 1 8.118857 51.017143l-17.554286 24.283429a36.571429 36.571429 0 0 1-51.2 8.118857l-199.899428-145.590857A489.691429 489.691429 0 0 1 512 1002.605714C241.042286 1002.605714 21.394286 782.957714 21.394286 512 21.394286 241.042286 241.042286 21.394286 512 21.394286 782.957714 21.394286 1002.605714 241.042286 1002.605714 512c0 79.469714-18.907429 154.514286-52.443428 220.891429zM512 899.108571c213.796571 0 387.108571-173.348571 387.108571-387.108571 0-213.796571-173.348571-387.108571-387.108571-387.108571C298.203429 124.891429 124.891429 298.24 124.891429 512c0 213.796571 173.348571 387.108571 387.108571 387.108571z" p-id="3730"></path></svg>
      </div>
    </InputWrap>
  )
}
