import React from 'react';
import styles from './home.modules.css';

const Header = () => (
    <div id="header" className={styles.siteHeader}>
      <ul className={styles.navBar}>
        <li id="reservations-tab">
            <a href="/">
                Reservations
            </a>
        </li>
        
        <li id="history-tab">
            <a href="/">
                History
            </a>
        </li>
        <li id="settings-tab">
            <a href="/">
              Settings
            </a>
        </li>
      </ul>
    </div>
)


export default Header;