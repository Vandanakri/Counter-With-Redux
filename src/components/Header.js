import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  return (
    <center>
      <h2>{props.count}</h2>
    </center>
  );
}

function getCount(state) {
  return {
    count: state.value,
  };
}
export default connect(getCount)(Header);