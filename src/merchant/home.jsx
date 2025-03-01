import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Progress from '../component/progressBar'

import Test from '../images/images/test.jpg';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import EditProfile from '../admin/components/editProfile';
import Loading from '../component/loading';
import Img from '../component/uploadImg'


import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import GradingIcon from '@mui/icons-material/Grading';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import AddToPhotosRoundedIcon from '@mui/icons-material/AddToPhotosRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
export default function Home(){

    const { t } = useTranslation();
    const token = useSelector(state => state.token);
    const url = useSelector(state => state.apiURL);
    const [userInfo,setUserInfo] = useState("");
    const [data,setData] = useState([]);
    const [show,setShow] = useState(false);
    const [load,setLoad] = useState(true);

    useEffect(()=>{
        axios.get(url+"profile",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            console.log(res.data);
            setUserInfo(res.data.user_info[0]);
            setData(res.data);
            setLoad(false);
        }).catch(err => {
            console.log(err);
            setLoad(false);
        })
    },[show])

    return(
        <>
         {load ? <Loading loading={load}/> :
        <Container>
            <Row>
                <h1 className='text-3xl m-3'>
                    { t("merchant.Marketer_Profile") }
                </h1>
            </Row>
            <Row  className='d-flex flex-column-reverse flex-md-row'>
                <Col lg={8} md={6} sm={12}  >
                    {/* orders and mony section */}
                    <div className='profile_content flex justify-around items-center'>
                        <div className='text-3xl '>
                            <p className='fs-3 pb-3 fw-bold'>{ t("marketer.badget") }</p>
                            {userInfo.badget} JOD
                        </div>
                        <div className='text-3xl '>
                            <p className='fs-3 pb-3 fw-bold'> { t("marketer.Ubadget") }</p>
                            {data.total_pull_requests} JOD

                        </div>
                        <div>
                            <Link  to={"receiveMoney"} style={{ height:"100%" }}  className='btn app_button_1 text-lg'>{ t("marketer.withdraw_money") }</Link>
                        </div>
                    </div>
                    <Row className='justify-center'>
                        <Col lg={4} md={6} sm={6} xs={12} >
                            <div className="profile_content">
                                <div>
                                    <p className='pb-2 text-4xl'>
                                        {data.total_products}
                                    </p>
                                </div>
                                <div>
                                    <LocalGroceryStoreRoundedIcon style={{ fontSize:"40px" }} />
                                </div>
                                { t("merchant.all_products") }
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={12} >
                            <div className="profile_content">
                                <div>
                                    <p className='pb-2 text-4xl'>
                                        {data.total_products_quantity ? data.total_products_quantity  : 0}
                                    </p>
                                </div>
                                <div>
                                    <Inventory2RoundedIcon style={{ fontSize:"40px" }} />
                                </div>
                                { t("merchant.t_q") }
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={12} >
                            <div className="profile_content">
                                <div>
                                    <p className='pb-2 text-4xl'>
                                        {data.total_products_sales ? data.total_products_sales  : 0}
                                    </p>
                                </div>
                                <div>
                                    <MonetizationOnRoundedIcon style={{ fontSize:"40px" }} />
                                </div>
                                { t("merchant.t_p") }
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <div className="profile_content">
                                <div>
                                    <p className='pb-2 text-4xl'>
                                        {data.total_add_requests}
                                    </p>
                                </div>
                                <div>
                                    <AddToPhotosRoundedIcon style={{ fontSize:"40px" }} />
                                </div>
                                { t("merchant.t_r_1") }
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <div className="profile_content">
                                <div>
                                    <p className='pb-2 text-4xl'>
                                        {data.total_pull_products_requests}
                                    </p>
                                </div>
                                <div>
                                    <DeleteSweepRoundedIcon style={{ fontSize:"40px" }} />
                                </div>
                                { t("merchant.t_r_p") }
                            </div>
                        </Col>
                    </Row>
                    
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className='profile_content'>
                            <div className='flex justify-center'>
                                <Img img={userInfo.img_url } />
                            </div>
                            <div className='py-1.5'>{userInfo.name}</div>
                            <div className='py-1.5'>{userInfo.email}</div>
                            <button className='btn app_button_1'onClick={()=>setShow(true)} >{ t("emp.change") }</button>
                        </div>


                        <div className='profile_content'>
                            <div className='py-1.5'>{ t("merchant.v_acc_text") }</div>
                            <div className='py-1.5 text-lg'> 
                            <button className='btn app_button_1' > { t("merchant.Verify_your_account") } </button>
                            </div>
                        </div>
                </Col>
            </Row>
            <EditProfile show={show} info={userInfo} setShow={setShow}/>
         </Container>}
        </>
    )
}


{/* <Col>
                            <div > 
                                <div className='py-2 main_color'>
                                    { t("merchant.all_products") }
                                </div>
                                <div>
                                    {data.all_products}
                                </div>
                                <div className='py-2 main_color'>
                                    Products quantity
                                </div>
                                <div>
                                    {data.total_products_quantity}
                                </div>
                                <div className='py-2 main_color'>
                                    Pinned Products
                                </div>
                                {data.pinned_products.map(el => 
                                    <div>
                                    {el.product_name}
                                </div>
                                )}
                                <div className='py-2 main_color'>
                                    Pulled Products
                                </div>
                                {data.pulled_products.map(el => 
                                    <div>
                                    {el.name}
                                </div>
                                )}
                            </div>
                        </Col>
                        <Col className=' text-center' >
                        <p className='main_color fs-4 pb-3'>My Products</p>
                            {data.products.map((el,key)=>{
                                return(
                                    <div className='py-2 px-4' >
                                        {el.name}
                            </div>
                                )
                                })}
                        </Col> */}
