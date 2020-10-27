import React, { Component } from 'react';
import NavBar from '../ui/NavBar'

import { Container } from '../ui/SytledDetails'
import Img from '../ui/Img'
import Content from '../ui/Content'
class Detail extends Component {
    render() {
        return (
           
                <>
                    <NavBar></NavBar>
                    <Container>
                        <Img></Img>  
                    </Container>
                    <Content></Content>
                </>
           
        );
    }
}

export default Detail;