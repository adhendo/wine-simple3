import React from 'react';
import {withFirebase} from '../Firebase';
import styles from './signout.module.scss';

const SignOutButton = ({ firebase }) => (
  <button className={styles.btnSecondary} onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);