import React from 'react';
import { connect } from 'react-redux';
import { redirectTo, doLogout } from '../actions/larkinActionCreators';
import { Link } from 'react-router'

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
      <div className="ui container">
        <nav className="ui stackable menu">
          <div className="header item">
            <h4>Larkin LLC Delivery (React edition)</h4>
          </div>

          <Link to="/app/delivery/orders" className="blue item nav-orders"><h4>Orders</h4></Link>
          <Link to="/app/delivery/loads" className="blue item nav-loads"><h4>Loads</h4></Link>
          <Link to="/app/delivery/routelists" className="brown item nav-routelists"><h4>Route Lists</h4></Link>

          <div className="right stacked menu">
            <div className="item">
              <i className="user icon"></i>
              {this.props.currentUserName} &nbsp; (<a href="#" className="nav-logout" onClick={(e) => logout(this.props)}>Logout</a>)
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ larkinStore }) => {
  return {
    token: larkinStore.auth.token,
    currentUserName: larkinStore.users["me"] ? larkinStore.users["me"].name : "Unknown"
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
