import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTemp } from '../../actions/temp.action';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temp : 0
    };
    this.reduxTempPlusOne = this.reduxTempPlusOne.bind(this);
    this.stateTempPlusOne = this.stateTempPlusOne.bind(this);
  }

  reduxTempPlusOne() {
    const { dispatch } = this.props;
    dispatch(setTemp(1));
  }

  stateTempPlusOne() {
    this.setState({
      temp : this.state.temp + 1
    });
  }

  render() {
    return (
      <div className="container">
        <h1>home</h1>
        <br />
        <div>
          <p>(redux)props temp data = {this.props.tempData.temp}</p>
          <p><button onClick={this.reduxTempPlusOne}>reduxTempData +1</button></p>
        </div>
        <br />
        <div>
          <p>state temp data = {this.state.temp}</p>
          <p><button onClick={this.stateTempPlusOne}>stateTempData +1</button></p>
        </div>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    tempData : state.temp
  };
}

export default connect(mstp)(Home);