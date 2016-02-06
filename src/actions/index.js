export function selectExercise(exercise) {
  return {
    type: 'EXERCISE_SELECTED',
    payload: exercise
  }
}
