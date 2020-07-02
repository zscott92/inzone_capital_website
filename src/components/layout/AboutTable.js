import React from 'react';
import { Row, Col } from 'reactstrap';

function AboutTable() {
    return (
        <Row>
            <Col className="AboutTable"><h3>Revenues less than $50 million</h3></Col>
            <Col className="AboutTable"><h3>Operating Income:  $2 million - $7 million</h3></Col>
            <Col className="AboutTable"><h3>No minimum for add-ons</h3></Col>
            <hr/>
        </Row>
        
    )
}
export default AboutTable;