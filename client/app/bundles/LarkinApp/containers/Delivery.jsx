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

  ifRole(role, jsx) {
    if (this.props.role === role) {
      return jsx;
    } else {
      return null;
    }
  }

  render() {
    /*TODO: dynamic redirect
        console.log(this.props.location);
        console.log(this.props.role);
        if (this.props.location.pathname === '/app/delivery') {
          if (this.props.role === 'dispatcher') {
            this.props.redirectTo("/app/delivery/orders");
          } else if (this.props.role === 'driver') {
            this.props.redirectTo("/app/delivery/routelists");
          }
        }*/

    return (
      <div className="ui container">
        <nav className="ui stackable menu">
          <div className="header item">
            <h4>Larkin LLC Delivery (React edition)</h4>
          </div>

          {this.ifRole('dispatcher', <Link to="/app/delivery/orders" activeClassName="active" className="blue item nav-orders"><h4>Orders</h4></Link>)}
          {this.ifRole('dispatcher', <Link to="/app/delivery/loads" activeClassName="active" className="green item nav-loads"><h4>Loads</h4></Link>)}
          <Link to="/app/delivery/routelists" activeClassName="active" className="brown item nav-routelists"><h4>Route Lists</h4></Link>

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
    currentUserName: larkinStore.users["me"] ? larkinStore.users["me"].name : "Unknown",
    role: larkinStore.users["me"] ? larkinStore.users["me"].role : null
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
