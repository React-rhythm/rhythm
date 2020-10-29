import React, { Component } from "react";
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

import { ButtonPay } from '../ui/pay'

class Pay extends Component {
  render() {
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
          onLeftClick={() => this.props.history.goBack()}
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
          <Court></Court>
          <Region></Region>
          <Party></Party>
          <State></State>
          <News></News>
          <Layout></Layout>
          <Count></Count>
          <Invoice></Invoice>
          <Address></Address>
          <ButtonPay><div>支付</div></ButtonPay>
        </div>
      </>
    );
  }
}

export default Pay;
