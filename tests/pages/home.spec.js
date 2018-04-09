import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../src/views/Home/index';

configure({ adapter: new Adapter() });

describe('<Home /> page', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });

  it('should have one <h1>', () => {
    expect(component.find('p')).toHaveLength(4);
  });
});
