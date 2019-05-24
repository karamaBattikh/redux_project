
const initailState = {
  count: 10,
}

export default (state = initailState, action) => {
  switch (action.type) {
    case "inc": return { ...state, count: state.count + action.payload }
    case "dec": return { ...state, count: state.count - action.payload }
    default: return state
  }
}