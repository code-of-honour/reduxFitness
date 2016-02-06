export default function(state = null, action) {
  switch(action.type) {
    case 'EXERCISE_SELECTED':
      return action.payload
  }

  return state
}
