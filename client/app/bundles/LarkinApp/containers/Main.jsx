import React from 'react';
import { connect } from 'react-redux';
import { loadAuthToken } from '../actions/larkinActionCreators';

class Main extends React.Component {
  componentWillMount() {
    if (!this.props.token) {
      this.props.loadAuthToken();
    }
  }

  render() {
    return (<div>{this.props.children}</div>);
  }

}

const mapStateToProps = ({ larkinStore }) => {
  return {
    token: larkinStore.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAuthToken: () => {
      dispatch(loadAuthToken())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
