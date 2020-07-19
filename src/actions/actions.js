import {
  TITLE_LIST_REQUEST,
  TITLE_LIST_SUCCESS,
  TITLE_LIST_FAIL,
  SENTENCE_DETAILS_REQUEST,
  SENTENCE_DETAILS_SUCCESS,
  SENTENCE_DETAILS_FAIL,
  SENTENCE_DELETE_SUCCESS,
  SENTENCE_DELETE_FAIL,
  SENTENCE_DELETE_REQUEST,
} from '../constants/actionTypesConstants'

export const listTitles = () => async (dispatch) => {
  try {
    dispatch({ type: TITLE_LIST_REQUEST })
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        dispatch({ type: TITLE_LIST_SUCCESS, payload: result }) //check on api
      })
  } catch (error) {
    dispatch({ type: TITLE_LIST_FAIL, payload: error.message })
  }
}

export const detailsSentence = (sentenceId) => async (dispatch) => {
  try {
    dispatch({ type: SENTENCE_DETAILS_REQUEST })
    fetch(`https://jsonplaceholder.typicode.com/posts/${sentenceId}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: SENTENCE_DETAILS_SUCCESS, payload: result })
      })
  } catch (error) {
    dispatch({ type: SENTENCE_DETAILS_FAIL, payload: error.message })
  }
}

export const deleteSentence = (sentenceId) => async (dispatch) => {
  try {
    dispatch({ type: SENTENCE_DELETE_REQUEST })
    fetch(`https://jsonplaceholder.typicode.com/posts/${sentenceId}`, {
      method: 'delete',
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: SENTENCE_DELETE_SUCCESS, payload: result.id })
      })
  } catch (error) {
    dispatch({ type: SENTENCE_DELETE_FAIL, payload: error.message })
  }
}
