import React, { Fragment } from 'react';
import { Col } from 'reactstrap';

function Lessons() {
    return (
        <Fragment>
            <br />
            <br />
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <ol>
                    <li><b>Lesson #1</b> – Cash is king</li>
                    <li><b>Lesson #2</b> – You only fail if you quit</li>
                    <li><b>Lesson #3</b> – Beind an entrepreneur is a migration not a destination</li>
                    <li><b>Lesson #4</b> – You are only as good as the people around you</li>
                    <li><b>Lesson #5</b> – Less is more. Be focused</li>
                    <li><b>Lesson #6</b> – A good idea is not necessarily a good business</li>

                </ol>
            </Col>
        </Fragment>
    )
}
export default Lessons;