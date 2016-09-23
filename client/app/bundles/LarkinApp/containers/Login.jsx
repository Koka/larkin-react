import React from 'react';
import { connect } from 'react-redux';
import { setLogin, setPassword } from '../actions/larkinActionCreators';

const Login = (props) => {
  return (
    <div className="login">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form className="ui large form">
            <div className="ui segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="login" placeholder="Login" value={props.login} onChange={(e) => props.setLogin(e.target.value)}/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" value={props.password} onChange={(e) => props.setPassword(e.target.value)}/>
                </div>
              </div>
              <button type="submit" className="ui fluid large teal submit button">Login</button>
            </div>

            {
              (() => {
                if (props.errorMessage) {
                  <div className="ui negative message">{props.errorMessage}</div>
                }
              })()
            }
          </form>

          <div className="ui segment">
            <div className="demo-users">
              <h4>Demo users:</h4>
              <div className="ui list">
                <a className="item">dispatcher / dispatcher</a>
                <a className="item">driver1 / driver1</a>
                <a className="item">driver2 / driver2</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ larkinStore }) => {
  return {
    login: larkinStore.auth.login,
    password: larkinStore.auth.password,
    errorMessage: larkinStore.auth.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (value) => {
      dispatch(setLogin(value))
    },

    setPassword: (value) => {
      dispatch(setPassword(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
