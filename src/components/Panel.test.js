import React from 'react'
import { shallow } from 'enzyme'
import Panel from './Panel'

it('renders', () => {
  const wrapper = shallow(
    <Panel>
      <h1>Hello, world!</h1>
    </Panel>
  )
  const content = <h1>Hello, world!</h1>
  expect(wrapper.contains(content)).toEqual(true)
})
