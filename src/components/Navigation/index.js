import React from 'react';
import {Link} from 'react-router-dom';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import Search from '../Search';
import {AuthUserContext} from '../Session';
import SignOutButton from '../SignOut';
import styles from './navigation.module.scss';


const Navigation = () => (
      <AuthUserContext.Consumer>
        {authUser => 
          authUser ? ( 
          <NavigationAuth authUser={authUser} /> 
          ) : ( <NavigationNonAuth /> )
        }
      </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <React.Fragment>
  <div className={styles.navContainer}>
    <div className={styles.logoSearch}>
      <Link to={ROUTES.LANDING}><h2 style={titleStyle}>winehop</h2></Link>
      <Search />
    </div>  

    <div className={styles.navButtons}>
 
      <Link to={ROUTES.HOME}><button className={styles.btnSecondary}>Dashboard</button></Link>
   
   
      <Link to={ROUTES.ACCOUNT}><button className={styles.btnSecondary}>Account</button></Link>

    {authUser.roles && !!authUser.roles[ROLES.ADMIN] && (
    
      <Link to={ROUTES.ADMIN}><button className={styles.btnSecondary}>Admin</button></Link>
    
    )}
  
    
      <SignOutButton className={styles.btnSecondary} />
      </div>
      
 
  </div>
  </React.Fragment>
);


const titleStyle= {
  color: '#3D9636',
  fontFamily: 'Rubik',
  marginBottom: '0.2rem'
}


const NavigationNonAuth = () => (
  <React.Fragment>
    <div className={styles.navContainer}>

    <div className={styles.logoSearch}>
        <Link to={ROUTES.LANDING}><h2 style={titleStyle}>winehop</h2></Link>
        <Search />
    </div>    
   
      
      <div className={styles.navButtons}>
        <Link to={ROUTES.SIGN_UP}><button className={styles.btnSecondary}>Sign Up</button></Link>
        <Link to={ROUTES.SIGN_IN}><button className={styles.btnPrimary}>Sign In</button></Link>
        <Link to={ROUTES.DISCOVER}><button className={styles.btnSecondaryCollapser}>Discover</button></Link>
      </div>
   
      
      
    </div>
  </React.Fragment>
);

export default Navigation;