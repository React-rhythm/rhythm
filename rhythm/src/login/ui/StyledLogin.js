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
                width:40%;
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
    margin-top:0.05rem;
    padding:0  0.35rem;
    background-color:#fff;
    .count-setting{
        width:100%;
    }
    .am-list-line{

        position:relative;
        .am-input-label-5{
            width:40%;
            font-size:0.14rem;
            position:absolute;
            right:20%;
            .has{
               text-align:right;
                color:red;
            
            }
        }
        
        .am-input-error-extra{
            position: absolute;
            right:13%;
        
        }
        
       
        
    }
    .am-input-item:nth-child(6){
        position: relative;
        .am-input-label-5{
           
            position:absolute;
            right:0;
        }
        .am-input-control{
            position: absolute;
            
            input{
                width:60%;
            }
        }
        /* .am-list-line{
        position: relative;
        .am-input-error-extra{
            position:absolute;
            right:43%;
    }
    } */
    
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
            margin:0.15rem 0 0 0;
            border:none;
            height:0.27rem;
            
        }
        span{
            text-align:right;
            color:#94c4f2;
        }
    }
    .loginshow{
        color:red;
        width:100%;
        display: inline;
        height:0.14rem;
        line-height:0.14rem;
        font-size:0.14rem

    }
    .codeshow{
        color:red;
        width:100%;
        display: inline;
        height:0.14rem;
        line-height:0.14rem;
        font-size:0.14rem

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
    .am-input-item:last-child{
        position: relative;
        .am-input-label-5{
            position:absolute;
            right:0;
        }
        .am-input-control{
            position: absolute;
            input{
                width:60%;
            }
        }
    }
      
    
    
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