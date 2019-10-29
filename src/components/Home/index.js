import React from 'react';
import {withAuthorization} from '../Session';
import WineryAccountHomePage from './homepage';

const HomePage = () => (
  
  <React.Fragment>
    <WineryAccountHomePage />
  </React.Fragment>

);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);