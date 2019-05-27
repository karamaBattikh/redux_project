import { applyMiddleware, createStore, combineReducers } from 'redux'
import counter from './reducers/counter';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const rootReducer = combineReducers({
  counter: counter,
});

const store = createStore(rootReducer, {}, applyMiddleware(logger));

export default store;