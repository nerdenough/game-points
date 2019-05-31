import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

it('renders', () => {
  const wrapper = shallow(<Header>Hello, world!</Header>)
  const header = <h1>Hello, world!</h1>
  expect(wrapper.contains(header)).toEqual(true)
})
