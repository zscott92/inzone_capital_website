import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

function AboutTable() {
    return (
        <div>
            <hr />
            <h2>What We Look For</h2>
            <Col className="AboutCol">
                <div><p>Revenues &lt; $50,000,000</p></div>
               <div><p>Operating Income: $2,000,000 - $7,000,000</p></div>
               <div><p>No minimum for add-ons!</p></div>
                <hr />
            </Col>
        </div>
    )
}
export default AboutTable;