import React from 'react';
import { connect } from 'react-redux';
import { redirectTo, doLogout } from '../actions/larkinActionCreators';

function logout(props) {
  props.doLogout();
  props.redirectTo('/app/login');
}

class Delivery extends React.Component {
  componentWillMount() {
    if (!this.props.token) {
      this.props.redirectTo("/app/login");
    }
  }

  render() {
    return (
      <div>
        <p>NOT IMPLEMENTED: DELIVERY</p>
        <a onClick={(e) => logout(this.props)}>Logout</a>
      </div>
    );
  }
}

const mapStateToProps = ({ larkinStore }) => {
  return {
    token: larkinStore.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    redirectTo: (route) => {
      dispatch(redirectTo(route))
    },

    doLogout: () => {
      dispatch(doLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
