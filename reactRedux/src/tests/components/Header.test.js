import React from 'react'
import { shallow } from 'enzyme'

//import Header from '../../components/Header/index'
import Header from '../../components/Header';

// test('Should render Header correctly', () => {
//   const wrapper = shallow(<Header />)
//   expect(wrapper).toMatchSnapshot()
// })

test('should test Header component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
 });