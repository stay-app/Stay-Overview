import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CarouselEntry from '../client/components/CarouselEntry.jsx'
import { create } from 'react-test-renderer'


xtest('Carousel Entry has all the data fields', () => {
  const wrapper = mount(<CarouselEntry />);
  const field1 = wrapper.find("caro-img")
  const field2 = wrapper.find("caro-cat")
  const field3 = wrapper.find("caro-name")
  const field4 = wrapper.find("caro-star")
  const field5 = wrapper.find("caro-price")
  console.log(field1, field2, field3, field4, field5)
  expect(field1).toBeTruthy();
})