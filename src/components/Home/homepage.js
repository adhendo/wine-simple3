import React from 'react';
import Dashboard from './dashboard';
import styles from './home.module.scss';
import WineryDashboardNavBar from './linknavbar';

const WineryAccountHomePage = () => (

<div>
    <div className={styles.siteHeader}>
      <WineryDashboardNavBar />
    </div>

    <div className={styles.calcMargin}>
      
        <Dashboard />
   
    </div>  
</div>

)

export default WineryAccountHomePage;

