

import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Err401 from '../errors/err401'

const Home=()=>{
    const acc = useSelector(state => state.account);

    if(acc!=="3")
        return(
            <Err401 />
        )


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