import React from 'react'
import List from '../components/List'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Link } from 'react-router-dom'
configure({ adapter: new Adapter() })

describe('List ', () => {
  const somePost = {
    id: 1,
    title: 'blabla',
  }
  const wrapper = shallow(<List post={somePost} />)

  it('should render without crashing with a given prop', () => {
    shallow(<List post={somePost} />)
  })
  it('should render a Link to details page of the element', () => {
    const li = (
      <Link to={`/details/${somePost.id}`}>
        <li>blabla</li>
      </Link>
    )
    expect(wrapper.contains(li)).toEqual(true)
  })
  it('should have an li inside the Link that renders the title of the post', () => {
    const li = <li>{somePost.title}</li>
    expect(wrapper.contains(li)).toEqual(true)
  })
  it('should show the right title ', () => {
    const newPost = Object.assign({}, somePost)
    newPost.title = 'papa'
    const wrapper = shallow(<List post={newPost} />)
    const li = <li>{newPost.title}</li>
    expect(wrapper.contains(li)).toEqual(true)
  })
  it('not to show the wrong title ', () => {
    const newPost = Object.assign({}, somePost)
    newPost.title = 'papa'
    const wrapper = shallow(<List post={newPost} />)
    const li = <li>{somePost.title}</li>
    expect(wrapper.contains(li)).toEqual(false)
  })
})
