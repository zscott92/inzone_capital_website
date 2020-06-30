import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import UserCard from '../layout/UserCard';
import Navbar from '../layout/Navbar';

class TeamScreen extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
