

import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Err401 from '../errors/err401'

const Home=()=>{
    const acc = useSelector(state => state.account);

    if(acc!=="4")
        return(
            <Err401 />
        )

    return(
        <>
        <div >
            <Outlet />
            
        </div>
        </>
    )
}
export default Home