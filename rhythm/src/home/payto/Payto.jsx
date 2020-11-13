import React, { useCallback,useRef,useEffect,useState } from "react";
import { useHistory,useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'


const Payto = (props) => {
  

//   const {  } = useHistory()
    const l = useLocation()
    useEffect(() => {
        console.log(l)
    })
  

    return (
      <>
          <div>1</div>
      </>
    );
  }


export default Payto;
