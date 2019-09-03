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

test('displayLast starts at 5', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.displayLast).toEqual(5);
})

test('displayFirst starts at 1', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.displayFirst).toEqual(1);
})

test('Carousel has props', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.props).toBeDefined();
})

xtest('MoveUp adds values to the display counter', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  instance.moveUp();
  expect(instance.displayFirst).toBe(2);
  expect(instance.displayLast).toBe(6);
})

xtest('MoveDown subtracts values from the display counter', () => {
  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  instance.moveUp();
  instance.moveUp();
  instance.moveDown();
  expect(instance.displayFirst).toBe(2);
  expect(instance.displayLast).toBe(6);
})

xtest('MoveUp updates the state', () => {
  const prevArrow = { className: "caro-prev"}
  const nextArrow = { className: "caro-next"}

  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.state.idNext).toBe('#5');
  instance.moveUp();
  expect(instance.state.idNext).toBe('#6');
})

xtest('MoveDown updates the state', () => {
  const prevArrow = { className: "caro-prev"}
  const nextArrow = { className: "caro-next"}

  const wrapper = create(<Carousel />);
  const instance = wrapper.getInstance();
  expect(instance.state.idPrev).toBe('#1');
  instance.moveUp();
  instance.moveUp();
  instance.moveDown();
  expect(instance.state.idNext).toBe('#7');
})