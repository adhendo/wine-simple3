import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../Firebase';
import {PasswordForgetLink} from '../PasswordForget';
import {SignUpLink} from '../SignUp';
import styles from './signin.module.scss';

const SignInPage = () => (
  <div className={`${styles.primaryWidthContainer} ${styles.calcMargin}`}>
    <main className={styles.mainContainer}>
        <div className={styles.mainInherit}>
          <div className={styles.pageBody}>
            <div className={styles.paper}>
              <h1>SignIn</h1>
              <SignInForm />
              <PasswordForgetLink />
              <SignUpLink />
            </div>
          </div>
        </div>
    </main>   
  </div> 
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

        {error && <p>{error.message}</p>}
      </form>
      </>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export {SignInForm};

