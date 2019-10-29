import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import HomePage from '../Home';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import Discover from '../Pages/Discover';
import PageNotFound from '../Pages/PageNotFound';
import TastingRooms from '../Pages/TastingRooms';
import Wineries from '../Pages/Wineries';
import WineryPage from '../Pages/WineryPage';
import PasswordForgetPage from '../PasswordForget';
import {withAuthentication} from '../Session';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';




const App = () => (
      <Router>
        <div>
          <Navigation />
      
    
          
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path="/404" component={PageNotFound} />
          <Route path="/winery/:wineryId" component={WineryPage} />
          <Route path={ROUTES.WINERIESFILT} component={Wineries} />
          <Route path={ROUTES.TASTINGROOMFILT} component={TastingRooms} />
          <Route path={ROUTES.DISCOVER} component={Discover} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    );

export default withAuthentication(App);