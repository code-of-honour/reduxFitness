import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectExercise } from '../actions/index'
import { bindActionCreators } from 'redux'

class ExerciseList extends Component {

  renderList() {
    return this.props.exercises.map((exercise) => {
      return (
        <li key={exercise.name}
          onClick={() => this.props.selectExercise(exercise)}
          className="list-group-item">
          {exercise.name}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul className="list-group col-md-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    exercises: state.exercises
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectExercise: selectExercise }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList)
