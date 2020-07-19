import React from 'react'
import Button from '../components/Button'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<Button />)
})

describe('Button should renders correctly if', () => {
  it('accepts text  props', () => {
    const wrapper = mount(<Button text='Shuffle' />)
    expect(wrapper.props().text).toEqual('Shuffle')
  })
  it('contains the text given', () => {
    const wrapper = mount(<Button text='Shuffle' />)
    const value = wrapper.find('button').text()
    expect(value).toEqual('Shuffle')
  })
  it('changes their className depending on a prop', () => {
    const wrapper = mount(<Button type='primary' />)
    const value = wrapper.find('button').hasClass('primary')
    expect(value).toEqual(true)
  })
})

describe('Button calls the function correctly if', () => {
  it('responds on click event', () => {
    const mockCallBack = jest.fn()
    const button = shallow(<Button onClick={mockCallBack} />)
    button.find('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})

describe('Shuffle function respond correctly if', () => {
  const myArr = ['a', 'b', 'c', 'd']
  const shuffle = (arr, inPlace = true) => {
    // shallow copy if not inPlace, modifying the input array otherwise
    const base = inPlace ? arr : [].concat(arr)
    for (let i = arr.length, j; i; ) {
      j = Math.floor(Math.random() * i)
      ;[base[i], base[j]] = [base[j], base[--i]]
    }
    return base
  }
  it('returns an array of the same length', () => {
    expect(shuffle(myArr).length).toBe(myArr.length)
  })
  it('has the all the values in initial array', () => {
    const secondArr = shuffle(myArr)
    expect(myArr.every((el) => secondArr.includes(el))).toBe(true)
  })
})
