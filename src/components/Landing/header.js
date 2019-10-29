import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './landing.module.scss';


const textStyle = {
    textDecoration: 'underline',
    color: 'rgb(61, 150, 54)',
    marginLeft: '0.2rem'
};

const iconStyle = {
    color: 'rgb(0,0,0, 0.85)',
    marginLeft: '0.5rem'
}

const Header = () => (
    <div className={styles.locationHeader}>
        <h5>Popular wineries in  
            <span style={textStyle}>Healdsburg.</span>
            <FontAwesomeIcon  icon={faMapMarkedAlt} style = {iconStyle} />
        </h5>
    
    </div>
);

export default Header;

