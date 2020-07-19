import React, { useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import * as actionCreators from '../actions/actions'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Details from '../components/Details'

const SentenceDetails = (props) => {
  const sentenceDetails = useSelector((state) => state.sentenceDetails)
  const { sentence, loading, error } = sentenceDetails
  const dispatch = useDispatch()

  //params from router
  useEffect(() => {
    dispatch(actionCreators.detailsSentence(props.match.params.id))
    return () => {
      //
    }
  }, [])
  const handleDelete = () => {
    dispatch(actionCreators.deleteSentence(props.match.params.id))
  }
  return (
    <div>
      {loading ? (
        <div>Loading </div>
      ) : error ? (
        <div> {error}</div>
      ) : (
        <div>
          <Link to='/'> Back to home</Link>
          <Details sentence={sentence} />
          <Button onClick={handleDelete} type='secondary' text='Delete' />
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return state
}

export default connect(mapStateToProps, actionCreators)(SentenceDetails)
