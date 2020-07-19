import {
  TITLE_LIST_REQUEST,
  TITLE_LIST_SUCCESS,
  TITLE_LIST_FAIL,
  SENTENCE_DELETE_FAIL,
  SENTENCE_DELETE_SUCCESS,
  SENTENCE_DELETE_REQUEST,
  SENTENCE_DETAILS_FAIL,
  SENTENCE_DETAILS_SUCCESS,
  SENTENCE_DETAILS_REQUEST,
} from '../constants/actionTypesConstants'
import { initialState } from '../store'

export const titleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TITLE_LIST_REQUEST:
      return { loading: true }
    case TITLE_LIST_SUCCESS:
      return { loading: false, titles: action.payload }
    case TITLE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const sentenceDetailsReducer = (state = { sentence: {} }, action) => {
  switch (action.type) {
    case SENTENCE_DETAILS_REQUEST:
      return { loading: true }
    case SENTENCE_DETAILS_SUCCESS:
      return { loading: false, sentence: action.payload }
    case SENTENCE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const sentenceDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SENTENCE_DELETE_REQUEST:
      return { loading: true }
    case SENTENCE_DELETE_SUCCESS:
      return { loading: false, titles: action.payload }
    case SENTENCE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
