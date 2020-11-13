import React from 'react';

import { Img} from '../ui/SytledDetails'
const Img1 =(props)=> {
    
        return (
            <Img>
                <h1>版面照片：</h1>
                <div>
                    <img src={props.address} alt="" />
                    <img src={props.address} alt="" />
                    <img src={props.address} alt="" />
                </div>
                
            </Img>


        );
   
}

export default Img1;