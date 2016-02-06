import { combineReducers } from 'redux';
import ExercisesReducer from './exercises';
import ActiveExercise from './active_exercise'

const rootReducer = combineReducers({
  exercises: ExercisesReducer,
  active_exercise: ActiveExercise
    // State <- Reducer creates
});

export default rootReducer;
