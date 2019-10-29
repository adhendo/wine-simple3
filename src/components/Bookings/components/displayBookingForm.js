import {Field,Form} from "formik";
import React from "react";
import styles from "../bookings.module.scss";
import {AntDatePicker,AntInput,AntSelect,AntTimePicker} from "./createAntFields";
import {dateFormat,timeFormat} from "./fieldFormats";
import {isRequired,validateDate,validateEmail,validatePhone} from "./validateFields";

export default ({ handleSubmit, values, submitCount }) => (
    
  
  <Form className="form-container" onSubmit={handleSubmit}>
    <div className={styles.pickerFonts}>
    <div className={`${styles.maxHeightEase1}`}>
    <div className={styles.pickersContainer}>
        <div className={styles.pickersItem}>
            <div className={styles.dateTimeItem}>
                <div className={styles.moduleItem}>
                    <Field
                    component={AntInput}
                    name="email"
                    type="email"
                    label="Email"
                    validate={validateEmail}
                    submitCount={submitCount}
                    hasFeedback
                    />
                </div>
                <div className={styles.moduleItem}>
                    <Field
                    component={AntInput}
                    name="phone"
                    type="phone"
                    label="Phone Number"
                    validate={validatePhone}
                    submitCount={submitCount}
                    hasFeedback
                    />
                </div>
            </div>
        </div> 
        <div className={styles.pickersItem}>  
    
        <div className={styles.dateTimeItem}>
            <div className={styles.moduleItem}>
    <Field
      component={AntSelect}
      name="bookingSize"
      label="Party Size"
      defaultValue={values.bookingClient}
      selectOptions={values.selectOptions}
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
    />
    </div>
    <div className={styles.moduleItem}>
    <Field
      component={AntDatePicker}
      name="bookingDate"
      label="Booking Date"
      defaultValue={values.bookingDate}
      format={dateFormat}
      validate={validateDate}
      submitCount={submitCount}
      hasFeedback
    />
    </div>
    <div className={styles.moduleItem}>
    <Field
      component={AntTimePicker}
      name="bookingTime"
      label="Booking Time"
      defaultValue={values.bookingTime}
      format={timeFormat}
      hourStep={1}
      minuteStep={5}
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
      use12Hours
    />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className={styles.submitContainer}>
      <button className={`${styles.bookingButton} ${styles.buttonFont} ${styles.buttonFontStyler}`} type="submit">
        Submit
      </button>
    </div>
  </Form>
);
