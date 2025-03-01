import {Outlet } from 'react-router-dom';
import Navbar from './components/navbar'
import { useSelector } from 'react-redux';
import Err401 from '../errors/err401'


const Home=()=>{

    const language = useSelector((state) => state.language);
    const acc = useSelector(state => state.account);

    if(acc!=="1")
        return(
            <Err401 />
        )

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