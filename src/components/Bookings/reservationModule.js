import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from '../Pages/WineryPage/reservationmodal';
import styles from './reservation.module.css';



class ReservationModule  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick(){
        this.setState({
            showComponent: true,
        });
    }

    render(){
        return(
        <div className={styles.reservationModuleContainer}>
            <div className={styles.paper}>

{/* Reservation Form Header ----------------------------**/}

                <div className={styles.formTitle}>
                    <h3 className={`${styles.titleFont} ${styles.titleStyle}`}>
                        <span>Make a Reservation</span>
                    </h3>
                </div>

{/* Reservation Form Body ----------------------------**/}  
              
                <div className={styles.formItemSetter}>

{/* Reservation Option Selectors ----------------------------**/}  

                    <div className={styles.pickerFonts}>
                    <div className={`${styles.maxHeight150} ${styles.maxHeightEase1}`}>
                        <div className={styles.pickersContainer}>
                            <div className={styles.moduleItem}>
                                <div className={styles.moduleLabel} id="party-size-label">
                                    Party Size     
                                </div>
                                <div className={styles.anySelectorArea}>
                                    <div className={`${styles.selectAndItemLabel} ${styles.selectAndItemLabelTwo} ${styles.pointerOne}`}>
                                        For 2
                                    </div>
                                    <FontAwesomeIcon icon={faChevronDown} className={styles.dropDownIcon} />
                                    <select className={styles.selectAndItemLabel}>
                                        <option>For 1</option>
                                        <option>For 2</option>
                                        <option>For 3</option>
                                        <option>For 4</option>
                                        <option>For 5</option>
                                        <option>For 6</option>
                                        <option>For 7</option>
                                        <option>For 8</option>
                                        <option>For 9</option>
                                        <option>For 10</option>
                                        <option>For 11</option>
                                        <option>For 12</option>
                                        <option>For 13</option>
                                        <option>For 14</option>
                                        <option>For 15</option>
                                        <option>For 16</option>
                                        <option>For 17</option>
                                        <option>For 18</option>
                                        <option>For 19</option>
                                        <option>For 20</option>
                                        <option>For 20+</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.dateTimeItem}>
                                <div className={styles.moduleItem}>
                                    <div className={styles.moduleLabel} id="date-label">
                                        Date
                                    </div>
                                    <button className={`${styles.anySelectorArea} ${styles.dateSelectorButton}`}>
                                        <div className={styles.dateTodayLabel}>Today</div>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.dropDownIcon} />
                                    </button>
                                </div>
                                <div className={styles.moduleItem}>
                                    <div className={styles.moduleLabel} id="time-label">
                                        Time
                                    </div>
                                    <div className={styles.anySelectorArea}>
                                       <div data-auto="timeSlotsSelectMenu" className={`${styles.selectAndItemLabel} ${styles.selectAndItemLabelTwo} ${styles.pointerOne}`}>
                                           11:00 AM
                                       </div>
                                       <FontAwesomeIcon icon={faChevronDown} className={styles.dropDownIcon}></FontAwesomeIcon>
                                       <select data-auto="timeSlotsSelectMenu" aria-labelledby="time-label" className={styles.selectAndItemLabel}>
                                           <option> 11:00 AM</option>
                                           <option> 11:30 AM</option>
                                           <option> 12:00 PM</option>
                                           <option> 12:30 PM</option>
                                           <option> 1:00 PM</option>
                                           <option> 1:30 PM</option>
                                           <option> 2:00 PM</option>
                                           <option> 2:30 PM</option>
                                           <option> 3:00 PM</option>
                                           <option> 3:30 PM</option>
                                           <option> 4:00 PM</option>
                                           <option> 4:30 PM</option>
                                           <option> 5:00 PM</option>
                                           <option> 5:30 PM</option>
                                        
                                        </select> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

{/* Booking Button ----------------------------**/}

                    <div className={`${styles.formButtonContainer} ${styles.pickerFonts}`}>
                        <button onClick={this._onButtonClick} className={`${styles.bookingButton} ${styles.buttonFont} ${styles.buttonFontStyler}`} type="submit">
                            Book a Tasting
                        </button> 
                        {this.state.showComponent ?
                        <Modal /> : 
                        null}
                    </div>

                    <div className={`${styles.maxHeight} ${styles.blankBottom}`}></div>
                </div>
            </div>
        </div>

        )
    }    
};

export default ReservationModule;   