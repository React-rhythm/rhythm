import React, { useCallback } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { NavBar, Icon } from "antd-mobile";
import Court from '../ui/Court'
import Region from '../ui/Region'
import Party from '../ui/Party'
import State from '../ui/State'
import News from '../ui/News'
import Layout from '../ui/Layout'
import Count from '../ui/Count'
import Invoice from '../ui/Invoice'
import Address from '../ui/Address'

import usePayFomr from '../ui/usePayForm'

import { ButtonPay } from '../ui/pay'

const Pay = (props) => {

  const { goBack } = useHistory()
  
  const { payForm,
          changeCourt, 
          changeRegion, 
          changeParty,  
          changePayState,
          changeNews,
          changeLayout,
          changeCount,
          changeInvoice,
          changeAddress} = usePayFomr()

          const changeState = useCallback((index)=>{
            // console.log(index);
            return (e) => {
              console.log(e.target.value);
              index==='court' && changeCourt(e.target.value);
              index==='region' && changeRegion(e.target.value);
              index==='party' && changeParty(e.target.value);
              index==='payState' && changePayState(e.target.value);
              index==='news' && changeNews(e.target.value);
              index==='layout' && changeLayout(e.target.value);
              index==='count' && changeCount(e.target.value);
              index==='invoice' && changeInvoice(e.target.value);
              index==='address' && changeAddress(e.target.value);
            }
          },[])
          
          const toPay = useCallback(() => {
              console.log(payForm)
          })

    return (
      <>
        <NavBar
          mode="dark"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            fontSize: "0.17rem",
          }}
          icon={<Icon type="left" />}
          onLeftClick={() => goBack()}
        >
          公告费用支付
        </NavBar>
        <div
          style={{
            backgroundColor: "#fff",
            height: "5.5rem",
            margin: "0.14rem",
            padding: "0.15rem",
          }}
        >
          <div onBlur={changeState('court')}><Court></Court></div>
          <div onBlur={changeState('region')}><Region></Region></div>
          <div onBlur={changeState('party')}><Party></Party></div>
          <div onBlur={changeState('payState')}><State></State></div>
          <div onBlur={changeState('news')}><News></News></div>
          <div onBlur={changeState('layout')}><Layout></Layout></div>
          <div onBlur={changeState('count')}><Count></Count></div>
          <div onBlur={changeState('invoice')}><Invoice></Invoice></div>
          <div onBlur={changeState('address')}><Address></Address></div>
          <div><ButtonPay><div onClick={toPay}>支付</div></ButtonPay></div>
        </div>
      </>
    );
  }


export default Pay;
