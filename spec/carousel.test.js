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

test('Showing state updates when handInfo is called', () => {
  const mockInfo = [ { nearId: 1}, { nearId: 2}, { nearId: 3}, { nearId: 4}, { nearId: 5}, { nearId: 6}]
  const wrapper = create(<Carousel info={mockInfo} />);
  const instance = wrapper.getInstance();
  instance.handleInfo();
  expect(instance.state.showing).not.toStrictEqual([]);
})

test('displayLast starts at 6', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.displayLast).toEqual(6);
})

test('displayFirst starts at 0', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.displayFirst).toEqual(0);
})

test('Carousel has props', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.props).toBeDefined();
})