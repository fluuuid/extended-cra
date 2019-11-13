import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  test('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
  