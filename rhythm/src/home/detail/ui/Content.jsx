import React from 'react';
import { Content1 } from './SytledDetails';
import WillPay from './WillPay'
const Content=()=> {
   
        return (
            <Content1>
                <p><span>公告类别:</span><input type="text"/></p>
                <p><span>法院名称:</span><input type="text"/></p>
                <p><span>案件号:</span><input type="text"/></p>
                <p><span>当事人:</span><input type="text"/></p>
                <p><span>公告进展:</span><input type="text"/></p>
                <WillPay></WillPay>
            </Content1>


        );
    
}

export default Content;