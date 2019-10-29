import React from 'react';
import ReactDOM from 'react-dom';
import styles from './winerypage.module.scss';

const ReservationModal = (
    <div className={styles.reservationModalContainer}>
        stuff boi
    </div>
)

function Modal(props) {
    return ReactDOM.createPortal(ReservationModal, document.querySelector("#modal"))
}

export default Modal;
