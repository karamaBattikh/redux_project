import { DEC, INC } from '../actions/Types';

const initailState = {
  count: 10,
}

export default (state = initailState, action) => {
  switch (action.type) {
    case INC: return { ...state, count: state.count + action.payload }
    case DEC: return { ...state, count: state.count - action.payload }
    default: return state
  }
}