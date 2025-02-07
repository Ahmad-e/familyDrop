

import {Outlet } from 'react-router-dom';
import Navbar from './components/navbar'
import { useSelector } from 'react-redux';


const Home=()=>{

    const language = useSelector((state) => state.language);

    return(
        <>
        <div className='flex justify-between'>
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