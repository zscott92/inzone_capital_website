import React, {  Fragment } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import UserCard from '../layout/UserCard';
import Navbar from '../layout/Navbar';

function TeamScreen() {
    return (
      <Fragment>
        <Navbar />
        <Jumbotron>
          <h1>Team</h1>
          <Row xs="2">
            <Col xs="3" id="about">
              <UserCard />
            </Col>
          </Row>
        </Jumbotron>
      </Fragment>
    )
}
export default TeamScreen;
