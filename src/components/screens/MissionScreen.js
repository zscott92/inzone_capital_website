import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Jumbotron } from 'reactstrap';

function MissionScreen() {
    return(
        <Fragment>
            <Navbar />
            <Jumbotron>
            <h2>Mission</h2>
            <br/>
                <h3>To use our decades of experience in consumer products' to add unique value and perspective to our portfolio companies.</h3>
            </Jumbotron>
        </Fragment>
    )
}
export default MissionScreen;