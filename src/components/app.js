import React from 'react';
import { Component } from 'react';
import {Row, Col, Grid, Section} from 'react-bootstrap'

import ExerciseList from '../containers/exercise-list'
import ExerciseDetail from '../containers/exercise-detail'

export default class App extends Component {
  render() {
    return (
      <section>
        <Grid>
          <Row>
            <Col mdOffset={2}>
              <img src="https://s-media-cache-ak0.pinimg.com/originals/39/24/c5/3924c5d5ec9d42c727abff3a7b79161f.gif" />
            </Col>
          </Row>

          <Row>
            <Col mdOffset={2}>
              <ExerciseList />
              <ExerciseDetail />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
