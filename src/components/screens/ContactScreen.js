import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Jumbo from '../layout/Jumbo';
import { Jumbotron } from 'reactstrap';

function ContactScreen() {
    return (
        <Fragment>
            <Navbar />
            <Jumbo />
        </Fragment>
    )
}
export default ContactScreen;