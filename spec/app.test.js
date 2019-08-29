import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/components/App.jsx'
import { create } from "react-test-renderer"

test('Header appears properly', () => {
  const wrapper = mount(<div><p>Things to do nearby</p></div>);
  expect(wrapper.text()).toEqual('Things to do nearby');
})

test('State has nearby property', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state()).toHaveProperty('nearby')
})

test('Nearby state iniliatizes as an empty array', () => {
  const wrapper = create(<App />);
  const instance = wrapper.getInstance();
  expect(instance.state.nearby).toStrictEqual([]);
})