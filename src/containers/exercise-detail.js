import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col, Label, Well} from 'react-bootstrap'

class ExerciseDetail extends Component {
  render() {
    if (!this.props.exercise) {
      return (
        <Row>
          <Col md={6}>
            <h3>Choose a workout: </h3>
          </Col>
        </Row>
      )
    }

    return (
      <div>
        <Label bsStyle="primary">Beginner Friendly</Label>
        <h3>{this.props.exercise.name} Workout </h3>

        <h4>Exercise:</h4>
        <div>A: {this.props.exercise.c1}</div>
        <div>B: {this.props.exercise.c2}</div>
        <div>C: {this.props.exercise.c3}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exercise: state.active_exercise
  }
}

export default connect(mapStateToProps)(ExerciseDetail)
