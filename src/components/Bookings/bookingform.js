import {Formik} from "formik";
import moment from "moment";
import React,{PureComponent} from "react";
import DisplayBookingForm from "./components/displayBookingForm";
import {dateFormat,timeFormat} from "./components/fieldFormats";

const initialValues = {
  bookingDate: moment(Date.now()),
  bookingTime: moment(Date.now()),
  bookingSize: "2",
  selectOptions: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","20+"]

};

export default class BookingForm extends PureComponent {
  handleSubmit = formProps => {
    const { bookingDate, bookingTime, email } = formProps;
    const selectedDate = moment(bookingDate).format(dateFormat);
    const selectedTime = moment(bookingTime).format(timeFormat);
    alert(
      `Email: ${email} \nSelected Date: ${selectedDate} \nSelected Time: ${selectedTime}`
    );
  };

  render = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      render={DisplayBookingForm}
    />
  );
}
