import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    .searchContent{
        background-color:#fff;
        padding: 0 8px;
        height:100%;
        .title{
            color:#7f7f7f;
            font-size:0.17rem;
            height:0.52rem;
            line-height:0.52rem;
            border-bottom:1px solid #ccc;
        }
        ul{
            flex:1;
            li{
                display:flex;
                align-items:center;
                padding:0.15rem 0;
                height:100%;
                .avatar{
                    margin-right:0.28rem;
                    img{
                        width:0.55rem;
                        height:0.55rem;
                    }
                }
                .chatMain{
                    flex:1;
                    height:100%;
                    border-bottom:1px solid #ccc;
                    .content{
                        height:100%;
                        .username{
                            height:100%;
                            font-size:0.22rem;
                            line-height:0.22rem;
                            color:#04c05f;//关键字颜色
                            padding-bottom:0.22rem;
                        }
                    }
                }
            }
        }
    }
`
export {
    Container
}