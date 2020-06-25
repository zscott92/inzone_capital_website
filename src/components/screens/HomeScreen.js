import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Navbar from '../layout/Navbar';
import Jumbo from '../layout/Jumbo';
import AboutTable from '../layout/AboutTable'

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Jumbo />
                <AboutTable />
            </Container>
        )
    }
}
export default HomeScreen;