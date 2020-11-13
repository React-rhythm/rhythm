import React from 'react';
import { Content1 } from './SytledDetails';
import WillPay from './WillPay'
const Content=(props)=> {
   
        return (
            <Content1>
                <p><span>公告类别:</span></p>
                <p><span>法院名称:</span></p>
                <p><span>案&ensp;件&ensp;号:</span></p>
                <p><span>当&ensp;事&ensp;人:</span></p>
                <p><span>公告进展:</span></p>
                {
                    props.list.state===1?<WillPay></WillPay>:(props.list.state===0?<div>公告进展</div>+'已支付':<div>公告进展</div>+'未支付')
                    
                }
                
            </Content1>


        );
    
}

export default Content;