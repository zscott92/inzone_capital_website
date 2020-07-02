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
          <br/>
          <Row>
              <UserCard />
          </Row>
        </Jumbotron>
      </Fragment>
    )
}
export default TeamScreen;
