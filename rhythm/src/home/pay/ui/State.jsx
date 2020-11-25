import React,{useRef,useEffect} from 'react'
import usePayFomr from '../ui/usePayForm'
import { 
    PayWrap
} from './pay'
const State = (props) => {
    const {changeCaseId} = usePayFomr()
    const values = useRef()
    useEffect(() => {
        
    values.current.value = props.values
    changeCaseId(props.values)
    },[])
    return (
        <PayWrap>
            <label htmlFor='type'>案 &ensp;&ensp;&ensp; 号 :</label>
            <input ref={values} type="text" id='pay' placeholder='请输入案号' />
        </PayWrap>
    )
}

export default State