import React from 'react';
import {Link} from 'react-router-dom';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import Search from '../Search';
import {AuthUserContext} from '../Session';
import SignOutButton from '../SignOut';


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
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {authUser.roles && !!authUser.roles[ROLES.ADMIN] && (
    <li>  
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const headStyle= {
  marginLeft: '3em',
  marginRight: '3em',
  marginTop: '1em'
}

const titleStyle= {
  color: '#3D9636'
}


const NavigationNonAuth = () => (
  <React.Fragment>
    <div className="row justify-content-center justify-content-between" style={headStyle}>
      <Link to={ROUTES.LANDING}><h2 style={titleStyle}>winehop</h2></Link>
      <Search />
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
  </React.Fragment>
);

export default Navigation;