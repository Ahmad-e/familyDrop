
import Err401 from '../errors/err401'
import {Outlet } from 'react-router-dom';
import Navbar from './components/navbar'
import { useSelector } from 'react-redux';
import  './style.css';

const Home=()=>{
    const language = useSelector((state) => state.language);

    const acc = useSelector(state => state.account);

    if(acc!=="2")
        return(
            <Err401 />
        )

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