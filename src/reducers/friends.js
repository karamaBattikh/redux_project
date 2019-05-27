import { ADD, DELETE } from '../actions/Types';

const initialState = {
  friends: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return { ...state, friends: [...state.friends, action.payload] }
    }
    case DELETE: {
      const newList = [...state.friends];
      newList.splice(action.payload, 1)
      return { ...state, friends: newList }
    }
    default: return state
  }
}