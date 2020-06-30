import React, { Fragment } from 'react';
import { Jumbotron } from 'reactstrap';
import Navbar from '../layout/Navbar';

function PortfolioScreen() {
    return (
        <Fragment>
            <Navbar />
            <Jumbotron>
                Our portfolio contains
            </Jumbotron>
        </Fragment>
    )
}
export default PortfolioScreen;