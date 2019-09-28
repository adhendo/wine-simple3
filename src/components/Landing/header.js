import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const headStyle = {
    margin: '1em'
}

const textStyle = {
    textDecoration: 'underline',
    color: 'rgb(61, 150, 54)',
};

const iconStyle = {
    color: 'rgb(0,0,0, 0.85)'
}

const Header = () => (
    <div style={headStyle}>
        <h5>Popular wineries in <span style={textStyle}>Healdsburg.</span><FontAwesomeIcon  icon={faMapMarkerAlt} style = {iconStyle} /></h5>
        <bl></bl>
    </div>
);

export default Header;

