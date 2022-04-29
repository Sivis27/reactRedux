import React from 'react';
import { shallow } from 'enzyme';
import AddSurvey from '../../components/Survey/AddSurvey';

test('should test AddSurvey component', () => {
  const wrapper = shallow(<AddSurvey />);
  expect(wrapper).toMatchSnapshot();
});

//TO change original test this one duplicate