import React, { Fragment } from 'react';
import AboutJumbo from '../layout/AboutJumbo';
import AboutTable from '../layout/AboutTable';
import Navbar from '../layout/Navbar';
import Lessons from '../layout/Lessons';

function HomeScreen() {
    return (
        <Fragment>
            <Navbar />
            <AboutJumbo />
            <AboutTable />
            <Lessons />
        </Fragment>
    )
}
export default HomeScreen;