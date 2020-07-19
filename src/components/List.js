import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ post }) => {
  return (
    <Link to={'/details/' + post.id}>
      <li>{post.title}</li>
    </Link>
  )
}

export default List
