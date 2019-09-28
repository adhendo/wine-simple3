import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React,{Component} from "react";
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from "../Buttons/index";
import {withFirebase} from "../Firebase";
import SearchableMap from "../Map/searchableMap";
import Header from './header';

const btnPad = {
  padding: '0.5em',
  marginRight: '4vw',
  marginLeft: '4vw'
}

const masterPad = {
  margin: '1em'
}

//Classless Landing page function...
class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
            <Header />
          <div style= {masterPad}>
            <Wineries />
          </div>

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
          <br />
          <div className="container justify-content-around margin1" >
            <SearchableMap />
          </div>
      </React.Fragment>
    );
  }
}
//MODAL*************************?
//WineryBase Class to handle state & firebase logic
class WineryBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wineries: [1,10]
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    this.unsubscribe = this.props.firebase.wineries().onSnapshot(snapshot => {
      let wineries = [];

      snapshot.forEach(doc => wineries.push({...doc.data(), uid: doc.id}));
      // convert wineries list from snapshot
      this.setState({
        wineries,
        loading: false
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {wineries, loading} = this.state;
    return (
      <div className="container-fluid">
        {loading && <div>Loading ...</div>}

        <WineriesList wineries={wineries} />
      </div>
    );
  }
}
const WineriesList = ({wineries}) => (
  <div className="row flex-row flex-nowrap overflow-auto">
    {wineries.map(winery => (
      <WineryItem key={winery.uid} winery={winery} />
    ))}
  </div>
);

const imgStyle = {

  maxHeight: '15vh'
}

const subStyle ={
  paddingRight: '1.25rem',
  paddingLeft: '1rem',
  paddingTop: '.5rem'
}

const cardHWStyle = {
  minWidth: '10em',
  maxHeight: '20em'
}

const colHWStyle = {
  minWidth: '10em',
  maxHeight: '20em',

}

const iconStyle = {
  color: 'rgb(61, 150, 54)'
}

const WineryItem = ({winery}) => (
  <div className="col-3" style={colHWStyle}>
    <div className="card"  style={cardHWStyle}>
        <img src={winery.image} alt={""} className="card-img-top" style={imgStyle} />
        <div className="card-body">
          <div  style={subStyle} className="row justify-content-between">
            <h5 className="card-title">{winery.name}</h5>
            <p className="card-text">{winery.phone}</p>
          </div>
          <div  style={subStyle} className="row justify-content-between">
          
            <div className="row1">

           
              <h6 class="card-subtitle text-muted mt-1">
                 Walk-ins: {winery.walkins}
              </h6>
             
              <h6 class="card-subtitle text-muted mt-1" style={{display: winery.price ? 'block' : 'none' }}>
                {winery.price}
              </h6>
            
            </div>
            <div className="row1">
      
              <h6 class="card-subtitle text-muted mt-1" style={{display: winery.knownfortag ? 'block' : 'none' }}>
              {winery.knownfortag}
              </h6>
      
            </div>  
   
            <Link to={ROUTES.WINERYPAGE}>
              <a href="/" className="stretched-link">
                <FontAwesomeIcon icon={faChevronCircleRight} style = {iconStyle}/>
              </a>
            </Link>
          </div>
        </div>
    </div>
    </div>
);
const Wineries = withFirebase(WineryBase);
export default LandingPage;
