import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/images/logo.png';
import {  useSelector } from 'react-redux';
import Setting from './setting';
//import i18next from 'i18next';

import { useTranslation } from 'react-i18next';


export default function NavBar (){

    const { t } = useTranslation();

    var lg="lg"
    var mode=useSelector((state) => state.mode);

    const darkStyle={
      backgroundColor:"rgb(51, 51, 51)"
    }

    return(
          <Navbar 
            variant={mode} 
            key={lg} 
            expand={lg} 
            style={ mode==="dark" ?  darkStyle : null } 
            className={"navbar-fixed-top m-0 navbar-" + mode  }
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <img className='logo' src={Logo} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${lg}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${lg}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${lg}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                        <Nav.Link className='nav_link' href="#action1">{ t("header.profile") }</Nav.Link>
                        <Nav.Link className='nav_link' href="#action2">Link</Nav.Link>
                        <Nav.Link className='nav_link' href="#action1">Home</Nav.Link>
                        <Nav.Link className='nav_link' href="marketer">marketer</Nav.Link>
                        
                    </Nav>

                    <Nav>
                      <Nav.Link style={{ padding:"8px" }} className='nav_link login_link' href="login">{ t("header.login") }</Nav.Link>
                      <button onClick={()=> window.location.href = "register" } className='btn app_button_2'>{ t("header.regaster") }</button>
                      <Setting />
                    </Nav>
                    
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        
    )
}