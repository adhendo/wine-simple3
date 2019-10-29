import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {withFirebase} from "../Firebase";

//WineryBase Class to handle state & firebase logic
class WineryBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wineries: []
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
      <>
        {loading && <div>Loading ...</div>}

        <WineriesList wineries={wineries} />
      </>
    );
  }
}


const WineriesList = ({wineries}) => (
  <div className="overflow-auto-x-no-y">
    {wineries.map(winery => (
      <WineryItem key={winery.uid} winery={winery} />
    ))}
  </div>
);

const imgStyle = {

  height: '6rem'
}

const subStyle ={
  paddingTop: '.3rem'
}

const cardHWStyle = {
  minWidth: '10em',
  height: '10em',
}



const iconStyle = {
  color: 'rgb(61, 150, 54)'
}

const WineryItem = ({winery}) => (
  <div className="col-3">
    <div style={cardHWStyle}>
    <div className="card">

      <div className="card-body">
          <div  style={subStyle} className="row justify-content-between">
            <h6 className="card-title">{winery.name}</h6>
            <p className="card-text">{winery.phone}</p>
          </div>
          <div  style={subStyle} className="row justify-content-between">
          
            <div className="row1">

           
              <h6 className="card-subtitle text-muted mt-1">
                 Walk-ins: {winery.walkins}
              </h6>
             
              <h6 className="card-subtitle text-muted mt-1" style={{display: winery.price ? 'block' : 'none' }}>
                {winery.price}
              </h6>
            
            </div>
            <div className="row1">
      
              <h6 class="card-subtitle text-muted mt-1" style={{display: winery.knownfortag ? 'block' : 'none' }}>
              {winery.knownfortag}
              </h6>
      
            </div>  

          </div>
        </div>

      <img src={winery.image} alt={""} className="card-img-top" style={imgStyle} />
        
    </div>
    </div>
    <Link to="/winery/:wineryId" params={{wineryId: `${winery.uid}`}}>
              <a href="/" className="stretched-link">
              
              </a>
            </Link>
    </div>
);
const Wineries = withFirebase(WineryBase);

export {Wineries,WineryItem};

