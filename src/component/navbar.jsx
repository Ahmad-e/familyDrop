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
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import Badge from '@mui/material/Badge';

import { useTranslation } from 'react-i18next';


export default function NavBar (){



    const { t } = useTranslation();

    var lg="lg"
    var mode=useSelector((state) => state.mode);
    var account=useSelector((state) => state.account);
    var basket=(useSelector((state) => state.basket)).length;

    const darkStyle={
      backgroundColor:"rgb(51, 51, 51)"
    }


    const Auth_item=()=>{
      return(
        <>
          <Nav.Link style={{ padding:"8px" }} className='nav_link login_link' href="login">{ t("header.login") }</Nav.Link>
          <button onClick={()=> window.location.href = "register" } className='btn app_button_2'>{ t("header.regaster") }</button>
        </>
      )
    }


    const New_gust=()=>{
      return(
        <>
          <Nav.Link className='nav_link' href="/">{ t("header.main") }</Nav.Link>
          <Nav.Link className='nav_link' href="/products">{ t("header.products") }</Nav.Link>
          <Nav.Link className='nav_link' href="/about_us">{ t("header.abouteAs") }</Nav.Link>
        </>
      )
    }

    const Marketer=()=>{
      return(
        <>
          <Nav.Link className='nav_link' href="/marketer">{ t("header.profile") }</Nav.Link>
          <Nav.Link className='nav_link' href="/marketer/products">{ t("header.products") }</Nav.Link>
          <Nav.Link className='nav_link' href="/marketer/orders">{ t("header.orders") }</Nav.Link>
        </>
      )
    }

    const Merchant=()=>{
      return(
        <>
          <Nav.Link className='nav_link' href="/merchant">{ t("header.profile") }</Nav.Link>
          <Nav.Link className='nav_link' href="/merchant/products">{ t("header.products") }</Nav.Link>
          <Nav.Link className='nav_link' href="/merchant/orders">{ t("header.add_product") }</Nav.Link>
          <Nav.Link className='nav_link' href="/merchant/withdrawOrder">{ t("header.WithdrawalProduct") }</Nav.Link>
        </>
      )
    }

    return(
          <Navbar 
            variant={mode} 
            key={lg} 
            expand={lg} 
            style={ mode==="dark" ?  darkStyle : null } 
            className={"navbar-fixed-top m-0 navbar- navbar" + mode  }
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
                        {
                          account==="4" ? ( <Marketer /> ) : 
                          account==="3" ? ( <Merchant /> ) :
                          (<New_gust />) 
                        }
                    </Nav>

                    <Nav>
                      { account ==='1'  || account==="2" || account ==='3'  || account==="4" ? "" : <Auth_item />  }
                      <Nav.Link hidden={account!=="4"} style={{ padding:"8px" }} className='nav_link order_link '  href="/marketer/basket"> 
                        <Badge badgeContent={basket} overlap="circular"  color="error">
                          <LocalGroceryStoreRoundedIcon style={{ fontSize:"30px" }} />
                        </Badge>
                      </Nav.Link>
                      <Setting />
                    </Nav>
                    
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        
    )
}