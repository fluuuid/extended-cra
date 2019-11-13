import * as React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  test('renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
