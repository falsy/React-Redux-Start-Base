import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../../src/partials/navigation/index';
import {NavLink} from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<Navigation /> partial', () => {
  let component;
  
  beforeEach(() => {
    component = shallow(<Navigation />);
  });
  
  it('should exist', () => {
    expect(component).toBeTruthy();
  });
  
  it('contains 3 <NavLink /> components', () => {
    expect(component.find(NavLink)).toHaveLength(2)
  });
})
