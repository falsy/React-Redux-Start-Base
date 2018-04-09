import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Styles from '../../scss/views/header';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

class Navigation extends Component {

  render() {
    return (
      <div className={cx('navigation')}>
        <nav>
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/temp">temp</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation;