import React from 'react'

const Details = ({ sentence }) => {
  return (
    <ul className='square'>
      <li>Id: {sentence.id}</li>
      <li>Title: {sentence.title}</li>
      <li>Body: {sentence.body}</li>
      <li>userId: {sentence.userId}</li>
    </ul>
  )
}

export default Details
