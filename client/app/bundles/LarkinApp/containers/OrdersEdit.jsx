import React from 'react';
import { connect } from 'react-redux';

class OrdersEdit extends React.Component {
  render() {
    return (<div>{this.props.children}</div>);
  }
}

const mapStateToProps = ({ larkinStore }) => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersEdit);
