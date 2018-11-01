import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import reducers from '../Reducers'
import rootEpic from '../Epics'

const epicMiddleware = createEpicMiddleware()

export default function configureStore () {
  const store = createStore(
    reducers,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic)

  return store
}
