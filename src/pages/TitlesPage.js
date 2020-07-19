import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import * as actionCreators from '../actions/actions'
import List from '../components/List'
import Button from '../components/Button'

const TitleList = (props) => {
  const titleList = useSelector((state) => state.titleList)
  const { titles, loading, error } = titleList
  const [shuffledState, setShuffledState] = useState(titles)
  const [isShuffled, setIsShuffled] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreators.listTitles())
    return () => {}
  }, [])

  const shuffle = (arr, inPlace = true) => {
    // shallow copy if not inPlace, modifying the input array otherwise
    const base = inPlace ? arr : [].concat(arr)
    for (let i = arr.length, j; i; ) {
      j = Math.floor(Math.random() * i)
      ;[base[i], base[j]] = [base[j], base[--i]]
    }
    return base
  }
  console.log(shuffledState)
  const handleClick = () => {
    setShuffledState(shuffle(titles, false))
    setIsShuffled(true)
  }

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ol className='left'>
          <Button onClick={handleClick} type='primary' text='Shuffle' />
          {isShuffled
            ? shuffledState.map((post) => <List post={post} key={post.id} />)
            : titles.map((post) => <List post={post} key={post.id} />)}
        </ol>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { titles: state.titles }
}

export default connect(mapStateToProps, actionCreators)(TitleList)
