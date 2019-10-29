<div className={styles.moduleItem}>
                    <div className={styles.partySizeLabel} id="party-size-label">
                        Party Size
                    </div>
                    <div className={styles.anySelectorArea}>
                        <div className={styles.for2Label}>For 2</div>
                        <FontAwesomeIcon icon={faChevronCircleDown}  
                        className={styles.iconStyle}
                        /> 
                    <select className={`${styles.formItem} ${styles.selector}`} type="party-size" id="party-size-select">
                        <option value="1">For 1</option>
                        <option value="2">For 2</option>
                        <option value="3">For 3</option>
                        <option value="4">For 4</option>
                        <option value="5">For 5</option>
                        <option value="6">For 6</option>
                        <option value="7">For 7</option>
                        <option value="8">For 8</option>
                    </select>
                    </div>
                </div>
                    <div className={styles.dateTimeRow}>
                    <div className={styles.moduleItem}>
                        <div className={styles.dateLabel} id="date-label">
                            Date    
                        </div> 
                        <button className={`${styles.formItem} ${styles.selector}`} label="date">
                            <div className={styles.todayLabel}>Today</div>
                            <FontAwesomeIcon icon={faChevronCircleDown}  
                            className={styles.iconStyle}
                            /> 
                        </button>  
                    </div>

                    <div className={styles.moduleItem}>
                        <div className={styles.timeLabel} id="time-label">
                            Time
                        </div>
                        <div className={styles.anySelectorArea}>
                        <FontAwesomeIcon icon={faChevronCircleDown}  
                        className={styles.iconStyle}
                        /> 
                        <select className={`${styles.formItem} ${styles.selector}`} type="time" value="time-select">
                            <option value="11AM">11:00 AM</option>
                            <option value="1130AM">11:30 AM</option>
                            <option value="12PM">12:00 PM</option>
                            <option value="1230PM">12:30 PM</option>
                            <option value="1PM">1:00 PM</option>
                            <option value="130PM">1:30 PM</option>
                            <option value="2PM">2:00 PM</option>
                            <option value="230PM">2:30 PM</option>
                            <option value="3PM">3:00 PM</option>
                            <option value="330PM">3:30 PM</option>
                            <option value="4PM">4:00 PM</option>
                            <option value="430PM">4:30 PM</option>
                            <option value="5PM">5:00 PM</option>
                            <option value="530PM">5:30 PM</option>
                            <option value="6PM">6:00 PM</option>
                            <option value="630PM">6:30 PM</option>
                            <option value="7PM">7:00 PM</option>
                        </select> 
                        </div>
                    </div>
                </div>