import React, {  useState } from 'react';
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';


function NavigationBar () {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Inzone Capital</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/mission/">Mission</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/team/">Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/portfolio/">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact/">Contact</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                    </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                      </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                      </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                      </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Private Equity Firm</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
}
export default NavigationBar;