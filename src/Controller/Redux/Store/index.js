import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
// import logger from 'redux-logger'

import rootReducer from '../Reducers'
import rootEpic from '../Epics'

const epicMiddleware = createEpicMiddleware()
epicMiddleware.run(rootEpic)
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
)
export default store
