

import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';


const Home=()=>{


    return(
        <>
        <div >
            <div >

            </div>
            <div className='admin_content'>
                <Outlet />
            </div>
            
        </div>
        </>
    )
}
export default Home