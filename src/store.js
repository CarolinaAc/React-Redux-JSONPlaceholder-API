import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {
  titleListReducer,
  sentenceDeleteReducer,
  sentenceDetailsReducer,
} from './reducers/reducers'

export const initialState = {
  titles: [],
  sentences: [],
}

const reducer = combineReducers({
  titleList: titleListReducer,
  sentenceDetails: sentenceDetailsReducer,
  sentenceDelete: sentenceDeleteReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

store.subscribe(() => {
  console.log('state updated')
  console.log(store.getState())
})
export default store
