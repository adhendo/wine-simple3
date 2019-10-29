import React,{Component} from 'react';
import {withFirebase} from "../../Firebase";
import styles from './bookings.module.scss';


class BookingsBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      bookings: []
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    this.unsubscribe = this.props.firebase.bookings().onSnapshot(snapshot => {
      let bookings = [];

      snapshot.forEach(doc => bookings.push({...doc.data(), uid: doc.id}));
    
      this.setState({
        bookings,
        loading: false
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {bookings, loading} = this.state;
    return (
      <>
        {loading && <div>Loading ...</div>}

        <BookingsList bookings={bookings} />
      </>
    );
  }
}

const BookingsList = ({bookings}) => (
    <div>
    {bookings.map(booking => (
      <BookingItem key={booking.uid} booking={booking} />
    ))}
    </div>

);

const BookingItem = ({booking}) => (
            <div className={styles.reservationItem}>
                    <div className={styles.resField}>
                    <p>{booking.email.toString()}</p>
                    </div>
                    <div className={styles.resField}>
                    <p>{booking.phone.toString()}</p>
                    </div>
                    <div className={styles.resField}>
                    <p>{booking.date.toString()}</p>
                    </div>
            </div> 

);

const Bookings = withFirebase(BookingsBase);

export default Bookings;

