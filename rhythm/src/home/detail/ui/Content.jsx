import React from 'react';
import { Content1 } from './SytledDetails';
import WillPay from './WillPay'
const Content=()=> {
   
        return (
            <Content1>
                <p><span>公告类别:</span><input type="text"/></p>
                <p><span>法院名称:</span><input type="text"/></p>
                <p><span>案&ensp;件&ensp;号:</span><input type="text"/></p>
                <p><span>当&ensp;事&ensp;人:</span><input type="text"/></p>
                <p><span>公告进展:</span><input type="text"/></p>
                {
                    // flag===1?<WillPay></WillPay>:(flag===0?'已支付':'未支付')
                }
                
            </Content1>


        );
    
}

export default Content;