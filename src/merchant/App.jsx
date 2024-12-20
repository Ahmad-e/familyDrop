

import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';


const Home=()=>{


    return(
        <>
        <div >
            <div >

            </div>
            <div >
                <Outlet />
            </div>
            
        </div>
        </>
    )
}
export default Home