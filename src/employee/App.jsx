

import {Outlet } from 'react-router-dom';
import Navbar from './components/navbar'
import { useSelector } from 'react-redux';
import  './style.css';

const Home=()=>{
    const language = useSelector((state) => state.language);

    
    return(
        <>
        <div className='flex'>
            <Navbar  />
            <div className={(language==='Ar' ? ("admin_content_ar") : ("admin_content_en") )+' admin_content '}>
                <Outlet />
            </div>
            
        </div>

        <div className='space'>

        </div>
        </>
    )
}
export default Home