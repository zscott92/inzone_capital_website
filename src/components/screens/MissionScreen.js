import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Jumbotron } from 'reactstrap';

function MissionScreen() {
    return(
        <Fragment>
            <Navbar />
            <Jumbotron>
                Our mission is to provide our clients with the best possible service every time no matter what.
            </Jumbotron>
        </Fragment>
    )
}
export default MissionScreen;