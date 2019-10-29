import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import Bookings from './components/bookingslist';
import styles from './home.module.scss';


const Dashboard = () => (
    <div id="reservations" className={styles.reservationsViewContainer}>
        
        <div className={styles.reservationsContainer}>
            <div className={styles.buttonGrid}>
                <div className={styles.gridItem}>
                    Today
                </div>
                <div className={styles.gridItem}>
                    Week
                </div>
                <div className={styles.gridItem}>
                    Completed    
                </div>
                <div className={styles.gridItem}>
                    All
                </div>
                <div className={`${styles.gridItem} ${styles.createButton}`}>
                    Create 
                    <FontAwesomeIcon icon={faPlusCircle} style={{marginLeft: '2px'}} />
                </div>
            </div>

            <div className={styles.listSortsGrid}>
            <div className={`${styles.sortsContainer}`}>
                 <div className={styles.sortButtonGrid}>
                    <div className={styles.sortItem}>
                        Name
                    </div>
                    <div className={styles.sortItem}>
                        Time
                    </div>
                    <div className={styles.sortItem}>
                        Date
                    </div>
                 </div>
                </div>
                
            <div className={styles.reservationsList}>    
                <div>
                <Bookings />
                </div>
            </div>
            </div>
            
            
        </div>
    </div>
)

export default Dashboard;