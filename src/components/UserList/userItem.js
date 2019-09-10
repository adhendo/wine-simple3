class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: null,
      ...props.location.state,
    };
  }
  componentDidMount() {
    if (this.state.user) {
      return;
    }
    this.setState({ loading: true });
    this.unsubscribe = this.props.firebase
      .user(this.props.match.params.id)
      .onSnapshot(snapshot => {
        this.setState({
          user: snapshot.data(),
          loading: false,
        });
      });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  render () {

  }
}   