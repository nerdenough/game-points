import React from 'react'
import { shallow } from 'enzyme'
import GameItem from './GameItem'

const item = {
  name: 'item-name',
}

it('renders the name', () => {
  const wrapper = shallow(<GameItem item={item} />)
  expect(wrapper.text()).toEqual('item-name')
})

it('calls the addScore prop when button is clicked', () => {
  const addScore = jest.fn()
  const wrapper = shallow(<GameItem item={item} addScore={addScore} />)
  expect(addScore).toHaveBeenCalledTimes(0)
  wrapper.simulate('click')
  expect(addScore).toHaveBeenCalledTimes(1)
})
