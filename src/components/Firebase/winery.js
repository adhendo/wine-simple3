import React,{Component} from "react";
import {withFirebase} from "../Firebase";

//MODAL*************************?
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
      <div className="container-fluid">
        {loading && <div>Loading ...</div>}

        <WineryItem wineries={wineries} />
      </div>
    );
  }
}

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
   
          </div>
        </div>
    </div>
    </div>
);
const Wineries = withFirebase(WineryBase);
export default Wineries;