import React from 'react';
import { shallow } from 'enzyme';
import Survey from '../../components/Survey/SurveyForm';
test('should test Survey component with default state of empty array', () => {
 const wrapper = shallow(<Survey items={[]} />);
 expect(wrapper).toMatchSnapshot();
}); 

test('should test SurveyForm component with list of objects', () => {
    const wrapper = shallow(<Survey items={['Apple','Mango']} />);
    expect(wrapper).toMatchSnapshot();
   });

