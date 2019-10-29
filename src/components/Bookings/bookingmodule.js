import "antd/dist/antd.css";
import React from "react";
import BookingForm from "./bookingform";
import "./bookings.module.css";
import styles from "./bookings.module.scss";


const BookingModule = () => (
  <div className={styles.reservationModuleContainer}>
    <div className={styles.paper}>
      <div className={styles.formTitle}>
        
      <h3 className={`${styles.titleFont} ${styles.titleStyle}`}>
        Book a tasting!
      </h3>

      </div>
      <div className={styles.formItemSetter}>
      <BookingForm />
      </div>
    </div>
  </div>
);

export default BookingModule;