import React ,{Component} from "react"
import {Carousel} from "antd-mobile"

import img1 from "@a/images/banner1@2x.png"
import img2 from "@a/images/banner2@2x.png"
import img3 from "@a/images/banner3@2x.png"


export default class Swiper extends Component{
    render(){
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                </Carousel>
            </div>
        )
    }
}