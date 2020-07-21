import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

function AboutTable() {
    return (
        <Fragment>
            <h2>What We Look For</h2>
            <Row>
                <Col className="aboutTable"><h3><b>Revenues</b> &lt; $50,000,000</h3></Col>
                <Col className="aboutTable"><h3><b>Operating Income:</b> $2,000,000 - $7,000,000</h3></Col>
                <Col className="aboutTable"><h3><b>No minimum for add-ons!</b></h3></Col>
                <hr />
            </Row>
        </Fragment>
    )
}
export default AboutTable;