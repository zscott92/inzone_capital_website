import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Jumbotron } from 'reactstrap';

function ContactScreen() {
    return (
        <Fragment>
            <Navbar />
            <Jumbotron>
                <h1>Contact us</h1><br/>
                <a href="mailto:jscott@inzonecapital.com">jscott@inzonecapital.com</a><br/><br/>
                <a href="mailto:ksapp@inzonecapital.com"> ksapp@inzonecapital.com</a>
            </Jumbotron>
        </Fragment>
    )
}
export default ContactScreen;