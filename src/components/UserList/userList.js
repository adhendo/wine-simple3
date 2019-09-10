class UserList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        users: [],
      };
    }
    componentDidMount() {
      this.setState({ loading: true });
      this.unsubscribe = this.props.firebase
        .users()
        .onSnapshot(snapshot => {
          let users = [];
          snapshot.forEach(doc =>
            users.push({ ...doc.data(), uid: doc.id }),
          );
          this.setState({
            users,
            loading: false,
          });
        });
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render () {

    }
}    