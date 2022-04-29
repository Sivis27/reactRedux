import React from 'react';
import { shallow } from 'enzyme';
import ToDoAction from '../../components/Survey/ToDoAction';

   test('should test Survey component with default state of empty array', () => {
    const wrapper = shallow(<ToDoAction items="JEST testing" />);
    expect(wrapper).toMatchSnapshot();
   }); 
   