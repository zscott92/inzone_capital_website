import React, { Fragment } from 'react';
import { Container, Footer } from 'reactstrap';
import AboutJumbo from '../layout/AboutJumbo';
import AboutTable from '../layout/AboutTable';
import Navbar from '../layout/Navbar';
import Lessons from '../layout/Lessons';
import MissionJumbo from '../layout/MissionJumbo';

function HomeScreen() {
    return (
        <>
            <Navbar />
            <AboutJumbo />
            <AboutTable />
            <MissionJumbo />
            <Container className="Footer" fluid={true}>All Copyrights Reserved</Container>
            </>
    )
}
export default HomeScreen;