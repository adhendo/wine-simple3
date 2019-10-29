import React from 'react';
import styles from './discover.module.css';

const LinkNavBar = () => (
    <div className={`${styles.widthInherit} ${styles.linksPositionFixed}`}>
                                    <ul className={styles.unorderedListHead}>
                                
                                        <li id="general-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont} ${styles.startingActiveLink}`}>
                                                <span>General</span>
                                            </a>
                                        </li>
                                        <li id="events-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Events</span>
                                            </a>
                                        </li>
                                        <li id="wines-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Wines</span>
                                            </a>
                                        </li>
                                        <li id="places-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Places</span>
                                            </a>
                                        </li>
                                        <li id="experiences-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Experiences</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
)

export default LinkNavBar;