import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../client/components/Carousel.jsx'
import { create } from 'react-test-renderer'

test('State has showing property', () => {
  const wrapper = shallow(<Carousel />);
  expect(wrapper.state()).toHaveProperty('showing')
})

test('Showing state iniliatizes as an empty array', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.state.showing).toStrictEqual([]);
})

xtest('Showing state updates when handInfo is called', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.state.showing).toStrictEqual([]);
  instance.handleInfo();
  expect(instance.state.showing).not.toStrictEqual([]);
})

test('displayCounter starts at 6', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.displayCounter).toEqual(6);
})

test('Carousel has props', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.props).toBeDefined();
})