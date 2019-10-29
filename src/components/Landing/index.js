import React,{Component} from "react";
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from "../Buttons/index";
import {Wineries} from '../Firebase/wineriescollection';
import SearchableMap from "../Map/searchableMap";
import Header from './header';
import styles from './landing.module.scss';

const btnPad = {
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  paddingBottom: '0.5em',
  paddingTop: '1.4em',
  marginRight: '4vw',
  marginLeft: '4vw'
}


//Classless Landing page function...
class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
          
          <Header />

          <div>

            <div className={styles.masterPad}>
              <Wineries />
            </div>
          

            <div className={styles.btnCollapser}>
            
            
              
              <div className="row justify-content-around space" style={btnPad}>
                <Link to={ROUTES.WINERIESFILT}>
                  <Button title="Wineries" />
                </Link>
                <Link to={ROUTES.TASTINGROOMFILT}>
                  <Button title="Tasting Rooms" />
                </Link>
                <Link to={ROUTES.DISCOVER}>
                  <Button title="Discover" />
                </Link>
              </div>
             
           

            </div>
            <br />

            <div className="container justify-content-around margin1" >
              <SearchableMap />
            </div>
            
          </div>

      </React.Fragment>
    );
  }
}

export default LandingPage;
