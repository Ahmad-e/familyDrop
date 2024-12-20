

import {Outlet } from 'react-router-dom';
import Navbar from './components/navbar'
import { useSelector } from 'react-redux';


const Home=()=>{


    return(
        <>
        <div className='flex justify-between'>
            <div className='Admin_nav' >
                <Navbar  />
            </div>
            <div className='admin_content'>
                <Outlet />
            </div>
            
        </div>

        <div className='space'>

        </div>
        </>
    )
}
export default Home