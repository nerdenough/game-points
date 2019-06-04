import React from 'react'
import { shallow } from 'enzyme'
import ScoreTotal from './ScoreTotal'

it('renders the score', () => {
  const wrapper = shallow(<ScoreTotal total={123} />)
  expect(wrapper.find('.ScoreTotal--score').text()).toEqual('123')
})

it('calls the newGame prop when button is clicked', () => {
  const newGame = jest.fn()
  const wrapper = shallow(<ScoreTotal total={123} newGame={newGame} />)
  expect(newGame).toHaveBeenCalledTimes(0)
  wrapper.find('button').simulate('click')
  expect(newGame).toHaveBeenCalledTimes(1)
})
