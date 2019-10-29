import React from 'react';
import styles from './home.module.css';

const WineryDashboardNavBar = () => (
    <div className={`${styles.widthInherit} ${styles.linksPositionFixed}`}>
                                    <ul className={styles.unorderedListHead}>
                                        <li id="reservations-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont} ${styles.startingActiveLink}`}>
                                                <span>Reservations</span>
                                            </a>
                                        </li>
                                        
                                        <li id="settings-link">

                                            <a href="/settings" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Settings</span>
                                            </a>
                                        </li>
                                        <li id="more-link">

                                            <a href="/more" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>More</span>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
)

export default WineryDashboardNavBar;