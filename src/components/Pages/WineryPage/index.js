import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faComments,faMapMarkerAlt,faMoneyBillWave,faPhoneAlt,faStar,faWineGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import BookingModule from '../../Bookings/bookingmodule';
import LinkNavBar from './linknavbar';
import styles from './winerypage.module.css';

const WineryPage = () => (
    <div className={styles.wholePage}>
            <div className={styles.headImageContainer}>
                <div className={`${styles.headerNoImage} ${styles.headerImage}`}>    
                </div>
                <div className={styles.bookmarkerContainer}>
                    <div id="button-save-winery" className={styles.bookmarkerTextAlign}>
                        <button className={`${styles.buttonWidth} ${styles.buttonFocusHover} ${styles.buttonFont} ${styles.buttonStyler}`}>
                            <span>
                                <div className={`${styles.withinButtonCenter} ${styles.withinButtonFlex}`}>
                                    <div className={styles.iconBox}>
                                    <FontAwesomeIcon icon={faBookmark}  
                                    /> 
                                    </div>
                                    <div className={styles.bookmarkLabeler}>
                                        <div className={styles.bookmarkFont}>
                                            <span>
                                                Save this winery
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
            <div className={`${styles.primaryWidthContainer} ${styles.calcMargin}`}>
            <main className={styles.mainContainer}>
                <div className={styles.mainInherit}>
                    <div className={styles.zeroHeight}>
                    </div>
                    <div className={styles.widthInherit}>
                        <div className={styles.widthInherit}>
                            <div className={styles.mainInherit}>
                                <div className={styles.zeroHeight}></div>
                                <LinkNavBar />

                            </div>
                            
                            <div id="overview-section" className={styles.overviewContainer}>
                              <div className={styles.wineryMainInfoContainer}>
        
        {/** <----- Winery Main Info Container ----------------> */}

                                  <div className={styles.wineryTitleContainer}>
                                      <h1 className={`${styles.wineryTitleFont} ${styles.wineryTitleStyle}`}> 
                                        La Sickest Winery
                                      </h1>
                                      <div className={`${styles.withinButtonFlex} ${styles.infoItemAligner}`}>

                                        <div className={styles.infoItem}>
                                            <div className={styles.iconBoxTwo}>
                                                <h5>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} 
                                                    className={styles.address} />
                                            
                                                    4321 North St. Healdsburg, CA 95448
                                                </h5>
                                            </div>
                                        </div>  
                                      </div>  
                                            
                                      <div className={`${styles.withinButtonFlex} ${styles.infoItemAligner}`}>
                                        <div className={styles.infoItem}>
                                            <div className={`${styles.iconBoxTwo} ${styles.address}`}>
                                                <h5>
                                                    <FontAwesomeIcon icon={faPhoneAlt} 
                                                    className={styles.address} />
                                                    (707) 433 5555
                                                </h5>
                                            </div>
                                            
                                        </div>
                                       </div> 
                                        
                                      
                                  </div>
                                  
        {/** <---- Ratings, Reviews, Price and Other Mini Info  ---> */}

                                  <div className={styles.secondaryInfoContainer}>
                                      <div className={styles.ratingsReviewsMini}>
                                          <div id="star-rating" className={styles.ratingsContainer}>
                                              <div className={styles.miniSection}>
                                                  <div className={styles.miniIcon}>
                                                      <FontAwesomeIcon icon={faStar} />
                                                  </div>
                                                  <div className={styles.attribute}>
                                                        <div className={styles.attributeFont}>
                                                            4.7
                                                        </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div id="total-reviews" className={styles.reviewsContainer}>
                                              <div className={styles.miniSection}>
                                                  <div className={styles.miniIcon}>
                                                      <FontAwesomeIcon icon={faComments} />
                                                  </div>
                                                  <div className={styles.attribute}>
                                                        <div className={styles.attributeFont}>
                                                            <span>493 Reviews</span>
                                                        </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className={styles.miniInfo}>
                                          <div className={styles.miniSection}>
                                                <div className={styles.miniIcon}>
                                                    <FontAwesomeIcon icon={faMoneyBillWave} />
                                                </div>
                                                <div className={styles.attribute}>
                                                        <div className={styles.attributeFont}>
                                                            <span>$20 to $50</span>
                                                        </div>
                                                </div>
                                          </div>
                                      </div>
                                      <div className={styles.miniInfo}>
                                          <div className={styles.miniSection}>
                                                <div className={styles.miniIcon}>
                                                    <FontAwesomeIcon icon={faWineGlass} />
                                                </div>
                                                <div className={styles.attribute}>
                                                        <div className={styles.attributeFont}>
                                                            <span>Tasting Room</span>
                                                        </div>
                                                </div>
                                          </div>
                                      </div>
                                  </div>
                                  
        {/** <----- Tags Container -----------------> */}

                                  <div className={styles.tagContainer}>
                                    <p className={styles.tagLabel}>
                                        <span>Top Tags</span>
                                    :  
                                    </p>
                                    <div className={styles.tag}><a href="/winery/:wineryId" className={styles.anchorStyle}>Pinot Noir</a></div>
                                    <div className={styles.tag}><a href="/winery/:wineryId" className={styles.anchorStyle}>Casual</a></div>
                                    <div className={styles.tag}><a href="/winery/:wineryId" className={styles.anchorStyle}>Downtown</a></div>
                                  </div>
                              </div>

                            </div>

                                
                        </div>
                    </div>
                   
                    <hr />
                    <BookingModule />
                </div>
            </main>
            </div>
    </div>
);

export default WineryPage;