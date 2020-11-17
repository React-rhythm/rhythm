import React, { Component } from 'react';
import NavBar from '../ui/NavBar'

import { Container } from '../ui/SytledDetails'
import Img from '../ui/Img'
import Content from '../ui/Content'
import http from '@u/http'
class Detail extends Component {
    state={
        list:{}
    }

    componentDidMount(){
        
            http.get('http://tn4aim.natappfree.cc/searchInfo/showDetail/368715').then(res=>{
                console.log(res);
                this.setState({
                    list:res.SearchDetai
                })
            })
            
        
       
       
    }
    render() {
        return (
           
                <>
                    <NavBar></NavBar>
                    <Container >
                        <Img address={this.state.list.address}></Img>  
                    </Container>
                    <Content list={this.state.list}></Content>
                </>
           
        );
    }
}

export default Detail;