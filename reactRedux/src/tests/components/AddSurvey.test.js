import React from 'react';
import { shallow } from 'enzyme';
import AddSurvey from '../../components/Survey/AddSurvey';

test('should test AddSurvey component', () => {
  const wrapper = shallow(<AddSurvey />);
  expect(wrapper).toMatchSnapshot();
});
test('should handle onSubmit handler', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AddSurvey handleAddTodo={onSubmitSpy} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('Form').simulate('submit');
    expect(onSubmitSpy).toHaveBeenCalled();
  });