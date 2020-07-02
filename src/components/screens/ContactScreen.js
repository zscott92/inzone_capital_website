import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Jumbotron, Col } from 'reactstrap';

function ContactScreen() {
    return (
        <Fragment>
            <Navbar />
            <Jumbotron>
                <h2>Contact us</h2><br />
                    <h3>Jim Scott</h3>
                    <a href="mailto:jscott@inzonecapital.com">jscott@inzonecapital.com</a><br /><br/>
                    <h3>Kristine Sapp</h3>
                    <a href="mailto:ksapp@inzonecapital.com"> ksapp@inzonecapital.com</a>
            </Jumbotron>
        </Fragment>
    )
}
export default ContactScreen;