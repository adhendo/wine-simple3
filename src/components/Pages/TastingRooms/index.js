
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

const TastingRoomsFilt = () => (
    <div>
        <div>
            <div>
                
            </div>
            <br />
            <Wineries />
        </div>
        
    </div>
);

export default TastingRoomsFilt;