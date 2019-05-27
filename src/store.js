import { applyMiddleware, createStore, combineReducers } from 'redux'
import counter from './reducers/counter';
import friends from './reducers/friends';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const rootReducer = combineReducers({
  counter: counter,
  friendsList: friends,
});

const store = createStore(rootReducer, {}, applyMiddleware(logger));

export default store;