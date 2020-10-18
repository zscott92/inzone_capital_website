import React, {  Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import UserCard from '../layout/UserCard';
import Navbar from '../layout/Navbar';

function TeamScreen() {
    return (
      <>
        <Navbar />
          <Col>
              <UserCard />
          </Col>
          <Container className="Footer" fluid={true}>All Copyrights Reserved</Container>
      </>
    )
}
export default TeamScreen;
