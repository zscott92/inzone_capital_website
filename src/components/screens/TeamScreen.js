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
      </>
    )
}
export default TeamScreen;
