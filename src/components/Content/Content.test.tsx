import * as React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

describe('<Content />', () => {
  test('renders', () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  });
});
  