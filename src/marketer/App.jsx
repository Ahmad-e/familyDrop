

import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';


const Home=()=>{


    return(
        <>
        <div >
                <Outlet />
            
        </div>
        </>
    )
}
export default Home