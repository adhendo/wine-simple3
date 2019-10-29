import React from 'react';
import {Wineries} from '../../Firebase/wineriescollection';

const dovStyle = {
    alignItems: 'center'
}

const innerStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const WineriesFilt = () => (
    <div>
        <div style={dovStyle}>
        <iframe src="https://player.vimeo.com/video/23626899?autoplay=1&color=6dcfc3&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen align="middle" style={innerStyle}></iframe>
        </div>
        <div>
            <br />
            <Wineries />
        </div>
        
    </div>
);

export default WineriesFilt;