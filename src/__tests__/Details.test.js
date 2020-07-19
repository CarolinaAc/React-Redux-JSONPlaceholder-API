import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Details from '../components/Details'
configure({ adapter: new Adapter() })

describe('Details ', () => {
  const somePost = {
    id: 1,
    title: 'blabla',
    body: 'nanana',
    userId: 1,
  }
  const wrapper = shallow(<Details sentence={somePost} />)

  it('should render without crashing with a given prop', () => {
    shallow(<Details sentence={somePost} />)
  })
  it('should render an ul with the sentence properties', () => {
    const ul = (
      <ul className='square'>
        <li>Id: {somePost.id}</li>
        <li>Title: {somePost.title}</li>
        <li>Body: {somePost.body}</li>
        <li>userId: {somePost.userId}</li>
      </ul>
    )
    expect(wrapper.contains(ul)).toEqual(true)
  })
  it('should render correct information', () => {
    const ul = (
      <ul className='square'>
        <li>Id: 1</li>
        <li>Title: blabla</li>
        <li>Body: nanana</li>
        <li>userId: 1</li>
      </ul>
    )
    expect(wrapper.contains(ul)).toEqual(true)
  })
  it('should not render incorrect information', () => {
    const newPost = Object.assign({}, somePost)
    newPost.title = 'tomato'
    const wrapper = shallow(<Details sentence={newPost} />)
    const ul = (
      <ul className='square'>
        <li>Id: {somePost.id}</li>
        <li>Title: {somePost.title}</li>
        <li>Body: {somePost.body}</li>
        <li>userId: {somePost.userId}</li>
      </ul>
    )
    expect(wrapper.contains(ul)).toEqual(false)
  })
})
