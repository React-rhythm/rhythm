import styled from 'styled-components';


const ContentWrap= styled.div`
    padding:0  0.35rem;
    background-color:#fff;
    .am-list{  
        height:0.4rem;
        border:none;
        .am-list-body{
            height:0.4rem;
            line-height:0.4rem;
            display:flex;
            justify-content:space-around;
            border:none;
            >input{
                width:100%;
                height:100%;
                border:none;
                
            }
        }
    }
    .am-list:nth-child(5){
        .am-list-body{
            span{
                text-align:right;
                color:#2493ED;
                font-size:0.14rem;
            }
        }
    }
    .am-list:nth-child(7){
        .am-list-body{
            input{
                border-bottom:none;
            }
        }
    }
`

const ContentWrap2= styled.div`
    padding:0  0.35rem;
    background-color:#fff;
    .am-list{  
        height:0.5rem;
        border:none;
        .am-list-body{
            height:0.5rem;
            line-height:0.5rem;
            display:flex;
            justify-content:space-around;
            border:none;
            >input{
                width:100%;
                height:100%;
                border:none;
               
            
            }
        }
    }
    .am-list:nth-child(5){
        .am-list-body{
            span{
                text-align:right;
                color:#2493ED;
                font-size:0.14rem;
            }
        }
    }
    .am-list:nth-child(7){
        .am-list-body{
            input{
                border-bottom:none;
            }
        }
    }
`


const LoginIconWrap=styled.div`
    height:1.9rem;
    background-color:#fff;
    display: flex; 
    justify-content: center;
     align-items: center;
     align-content:center;
    
    img{
        
        height:0.75rem;
        width:0.75rem;
        margin:0 auto;
         
    }

`

const LoginInput1Wrap=styled.div`
    display: flex;
    flex-direction:column;
    height:2.4rem;
    padding:0 0.5rem;
    justify-content: center;
    align-items: center;
    background:#fff;
    .inp{
        width:100%;
        border-bottom:1px solid #d8d8d8;
        >input{
            color:999999;
            font-size:0.14rem;
            width:75%;
            margin:0.30rem 0 0 0;
            border:none;
            height:0.27rem;
           
            
        }
        span{
            text-align:right;
            color:#94c4f2;
        }
    }
        
    >div:last-child{
        width:100%;
        height:0.13rem;
        display:flex;
        margin-top:0.1rem;
        >span{
            flex:1;
            height:0.13rem;
            font-size:0.14rem;
            color:999999;
        }
        >span:last-child{
            text-align:right;
        }
    }
`

const LoginInput2Wrap=styled.div`
    display: flex;
    flex-direction:column;
    height:2.4rem;
    padding:0 0.5rem;
    justify-content: center;
    align-items: center;
    
    .inp{
        width:100%;
        border-bottom:1px solid #d8d8d8;
        >input{
            color:999999;
            font-size:0.14rem;
            width:75%;
            margin:0.30rem 0 0 0;
            border:none;
            height:0.27rem;
            background:#f5f5f5;
            
        }
        span{
            text-align:right;
            color:#94c4f2;
        }
    }
        
    >div:last-child{
        width:100%;
        height:0.13rem;
        display:flex;
        margin-top:0.1rem;
        >span{
            flex:1;
            height:0.13rem;
            font-size:0.14rem;
            color:999999;
        }
        >span:last-child{
            text-align:right;
        }
    }
`

const MessageLoginWrap=styled.div`
    background:#fff;
    flex:1;
    padding:0 0.5rem;
    justify-content: center;
    align-items: center;
    
    
    .inp{
        
        width:100%;
        margin-bottom:0.1rem;
        border:1px solid #d8d8d8;
        >input{
           
  
            color:999999;
            font-size:0.14rem;
            width:75%;
            margin:0.1rem 0 ;
            border:none;
            height:0.27rem;
        } 
    }
`
export {
    ContentWrap,
    ContentWrap2,
    LoginIconWrap,
    LoginInput1Wrap,
    LoginInput2Wrap,
    MessageLoginWrap
}