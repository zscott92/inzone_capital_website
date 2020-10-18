import React, {  useState } from 'react';
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText
} from 'reactstrap';


function NavigationBar () {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Inzone Capital</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/team/">Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/portfolio/">Portfolio</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
}
export default NavigationBar;