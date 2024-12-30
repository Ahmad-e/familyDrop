import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function JustifiedExample() {
    const { t } = useTranslation();
    const nav = useNavigate();
    useEffect(()=>{
        nav("countries");
    },[]);
    return (
    <div className='locations'>
        <Nav justify className='m-5' variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link onClick={()=> nav("countries")} eventKey="link-0">Countries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=> nav("cities")} eventKey="link-1">Cities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=> nav("addresses")} eventKey="link-2">Addresses</Nav.Link>
            </Nav.Item>
        </Nav>
        <div>
            <Outlet/>
        </div>
    </div>
    );
}
export default JustifiedExample;