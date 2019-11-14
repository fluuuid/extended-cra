import * as React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  test('renders', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
