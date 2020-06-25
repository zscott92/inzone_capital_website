import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import UserCard from '../layout/UserCard';

class TeamScreen extends Component {
  render() {
    return (
      <div>
        <h1>Team</h1>
        <Jumbotron>
          <Row xs="2">
            <Col xs="6" id="about">
              <UserCard />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
export default TeamScreen;
