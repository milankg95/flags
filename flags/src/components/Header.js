import react from 'react'
import styled from 'styled-components'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { rgba, darken } from 'polished'

import colors from '../styles/colors'

const NavbarStyled = styled(Navbar)`
    background-color: ${rgba(darken(.25, colors.primaryColor), .8)};

    a {
        color: ${colors.lightPrimary};
    }
`

const Header = () => {
    return <NavbarStyled collapseOnSelect expand="md" fixed="top">
        <Container>
            <Navbar.Brand><Link to="/">Flags</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link exact to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/flags">Flags</Link>
                </Nav>
                
                <Nav>
                    <Nav.Link href="#">Languages</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </NavbarStyled>
}

export default Header