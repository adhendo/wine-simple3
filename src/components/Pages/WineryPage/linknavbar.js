import React from 'react';
import styles from './winerypage.module.scss';

const LinkNavBar = () => (
    <div className={`${styles.widthInherit} ${styles.linksPositionFixed}`}>
                                    <ul className={styles.unorderedListHead}>
                                
                                        <li id="overview-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont} ${styles.startingActiveLink}`}>
                                                <span>Overview</span>
                                            </a>
                                        </li>
                                        <li id="wines-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Wines</span>
                                            </a>
                                        </li>
                                        <li id="photos-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Photos</span>
                                            </a>
                                        </li>
                                        <li id="reviews-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Reviews</span>
                                            </a>
                                        </li>
                                        <li id="social-link">

                                            <a href="/winery/:wineryId" className={`${styles.listLinkStyler} ${styles.listLinkFont}`}>
                                                <span>Social</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
)

export default LinkNavBar;