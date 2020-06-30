import React, { Fragment } from 'react';
import AboutJumbo from '../layout/AboutJumbo';
import AboutTable from '../layout/AboutTable';
import Navbar from '../layout/Navbar';

function HomeScreen() {
    return (
        <Fragment>
            <Navbar />
            <AboutJumbo />
            <AboutTable />
        </Fragment>
    )
}
export default HomeScreen;