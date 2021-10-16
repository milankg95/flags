import react from 'react'
import styled from 'styled-components'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";

import colors from '../styles/colors'

const NavbarStyled = styled(Navbar)`
    background-color: #060606;

    a {
        color: ${colors.lightPrimary};
    }
`

const Header = () => {
    return <NavbarStyled collapseOnSelect expand="lg" fixed="top">
        <Container>
            <Navbar.Brand><Link to="/">Flags</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </Nav>
                
                <Nav>
                    <Nav.Link href="#">Languages</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>
}

export default Header