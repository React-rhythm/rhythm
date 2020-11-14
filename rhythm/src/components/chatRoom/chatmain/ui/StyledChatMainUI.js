import styled from "styled-components"

const Container  = styled.div`
    .message--list {
        max-height: 470px;
        overflow-y: scroll;
        scroll-behavior: smooth;
        transition: all cubic-bezier(0.4, 0, 1, 1) .15s;
        padding:0.2rem;
        }
        .message-item{
        display: flex;
        /* align-items: center; */
        color: #303133;
        margin-bottom: 18px;
        }
        .message-item--body{
        margin: 0 14px;
        }
        .message-item .message-item--content {
        padding: 8px 10px;
        border-radius: 4px;
        max-width: 318px;
        }
        .item-user {
            justify-content: flex-start;
        }
        .item-user .message-item--content {
        background: #DCF1FF;
        }
        .item-visitor{
        flex-direction: row-reverse;
        }
        .item-visitor .message-item--name {
        text-align: right;
        }
        .item-visitor .message-item--content {
        background:  #F3F3F3;
        }
        .message-item--avatar{
        width: 24px;
        height: 24px;

        }
        .message-item--avatar img{
        width: 100%;
        }
        .message-item--info{
        text-align: center;
        color: #666;
        font-size: 12px;
        }
        .message-item--name{
        color: #999;
        font-size: 12px;
        line-height: 1;
        margin-bottom: 5px;
        }
    .input--box{
        width: 100%;
        position: absolute;
        bottom: 0.02rem;
        display: flex;
        left:0.04rem;
        justify-content: space-between;
        }
        .input--box input {
        flex: 1;
        padding: 5px 10px;
        border: 1px solid #D7DBE6;
        border-radius: 3px;
        margin-right: 20px;
        }
        .btn--primary{
        background: rgba(82, 187, 255, 1);
        color: #fff;
        border-radius: 4px;
        padding: 8px 20px;
        cursor: pointer;
        font-size: 14px;
        transition: all linear .3s;
        border:0;
        }
        .btn--primary:hover{
        background: rgba(82, 187, 255, .8);
        }
        .btn--large{
        border-radius: 4px;
        padding: 10px 50px;
        font-size: 18px;
        }
`

export {
    Container
}