import { ADD } from '../actions/Types';

const initialState = {
  friends: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {...state, friend: state.friends.push(action.payload)}
    }
    default: return state
  }
}