import React from 'react';
import { connect } from 'react-redux';
import { setLogin, setPassword, doLogin, redirectTo } from '../actions/larkinActionCreators';

function presetCredentials(props, login, password) {
  props.setLogin(login);
  props.setPassword(password);
}

function formSubmit(e, props) {
  e.preventDefault();
  props.doLogin();
}

class Login extends React.Component {
  componentWillMount() {
    if (this.props.token) {
      this.props.redirectTo("/app");
    }
  }

  render() {
    return (
      <div className="login">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form className="ui large form" onSubmit={(e) => formSubmit(e, this.props)}>
              <div className="ui segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="login" placeholder="Login" value={this.props.login} onChange={(e) => this.props.setLogin(e.target.value)}/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password" value={this.props.password} onChange={(e) => this.props.setPassword(e.target.value)}/>
                  </div>
                </div>
                <button type="submit" className="ui fluid large teal submit button">Login</button>
              </div>

              {
                (() => {
                  if (this.props.errorMessage) {
                    <div className="ui negative message">{this.props.errorMessage}</div>
                  }
                })()
              }
            </form>

            <div className="ui segment">
              <div className="demo-users">
                <h4>Demo users:</h4>
                <div className="ui list">
                  <a className="item" onClick={(e) => presetCredentials(this.props, 'dispatcher', 'dispatcher')}>dispatcher / dispatcher</a>
                  <a className="item" onClick={(e) => presetCredentials(this.props, 'driver1', 'driver1')}>driver1 / driver1</a>
                  <a className="item" onClick={(e) => presetCredentials(this.props, 'driver2', 'driver2')}>driver2 / driver2</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ larkinStore }) => {
  return {
    login: larkinStore.auth.login,
    password: larkinStore.auth.password,
    token: larkinStore.auth.token,
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
    },

    doLogin: () => {
      dispatch(doLogin())
    },

    redirectTo: (route) => {
      dispatch(redirectTo(route))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
