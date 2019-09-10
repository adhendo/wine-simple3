import {Component} from 'react';
import {withFirebase} from '../Firebase';

class Wineries extends Component {
    constructor(props) {
        super(props);

        this.state={
            loading: false,
            wineries: [],

        };
    }

    componentDidMount(){
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
            <h1>Wineries</h1>
    
            {loading && <div>Loading ...</div>}
    
            <WineriesList wineries={wineries} />
          </div>
        );
      }
    }
    
    const WineriesList = ({ wineries }) => (
      <ul>
        {wineries.map(winery => (
          <li key={winery.uid}>
            <span>
              <strong>ID:</strong> {winery.uid}
            </span>
            <span>
              <strong>Name:</strong> {winery.name}
            </span>
            <span>
              <strong>Address:</strong> {winery.address}
            </span>
          </li>
        ))}
      </ul>
    );


export default withFirebase(Wineries); 