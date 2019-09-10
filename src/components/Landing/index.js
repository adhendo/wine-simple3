import React from 'react';
import {withFirebase} from '../Firebase';

/*
class LandingPage extends Component {
/*
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wineries: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.wineries().on('value', snapshot => {
      const wineriesObject = snapshot.val();

      const wineriesList = Object.keys(wineriesObject).map(key => ({
        ...wineriesObject[key],
        uid: key,
      }));
      this.setState({
        wineries: wineriesList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.wineries().off();
  }

  render() {
    const {wineries,loading} = this.state;

    return (
      <div>
        <h1>WineHop</h1>

        {loading && <div>Loading ...</div>}

        <WineryList wineries={wineries} />
      </div>
    );
  }
}

const WineryList = ({ wineries }) => (
  <ul>
    {wineries.map(winery => (
      <li key={winery.uid}>
        <span>
          <strong></strong> {winery.uid}
        </span>
        <span>
          <strong>-</strong> {winery.name}
        </span>
        <span>
          <strong>Address:</strong> {winery.address}
        </span>
      </li>
    ))}
  </ul>
);



render() {
  return (
    <div>
      Landing Page

      <wineries />
    </div>
   
  )
}
};
**/

const LandingPage = () => (
  <div>
    
    <wineries />

  </div>
);
  



export default withFirebase(LandingPage);