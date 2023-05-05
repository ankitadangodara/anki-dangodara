import React from 'react';
import { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Header = () => {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'><h1>LOGO</h1></MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <Link className='nav-link' to='/'>Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/about'>About</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/contact'>contact</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to='/example'>Example</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default Header;