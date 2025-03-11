import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Progress from '../component/progressBar'

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../component/loading';
import EditProfile from '../admin/components/editProfile';

import Img from '../component/uploadImg'
export default function Home(){

    const { t } = useTranslation();
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token); 
    const [userInfo,setUserInfo] = useState([]);
    const [show,setShow] = useState(false);
    const [load,setLoad] = useState(true);
    const [data,setData] = useState([]);


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
                <h1 className='text-3xl'>
                    { t("marketer.Marketer_Profile") }
                </h1>
            </Row>
            <Row className='d-flex flex-column-reverse flex-md-row'>
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
                    <div className='profile_content flex justify-around'>
                        <Col style={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "spaceAround",
                            flexWrap: "nowrap"}}
                            >
                            <div >
                                <div className='py-4 text-2xl'>
                                    { t("marketer.all_order") }
                                </div>
                                <div className='py-1.5 text-2xl'>
                                    {data.all_orders}
                                </div>
                                
                                <div className='py-1.5' >
                                    <button onClick={()=>window.location.href="marketer/products"} style={{ height:"100%" }}  className='btn app_button_1 text-lg'>{ t("marketer.Add_new_order") }</button>
                                </div>
                            </div>
                        </Col>
                        <Col className='text-start' >
                            <div className='py-2 px-4' >
                                { t("marketer.c_order") }  <Progress value={data.cancelled_orders.slice(0,-1)} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("marketer.n_order") } <Progress value={data.new_orders.slice(0,-1)} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("marketer.w_order") }  <Progress value={data.on_working_orders.slice(0,-1)} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("marketer.e_order") }  <Progress value={data.ended_orders.slice(0,-1)} />
                            </div>
                            <div className='py-2 px-4'>
                            { t("marketer.del_order") }  <Progress value={data.under_delivery_orders.slice(0,-1)} />
                            </div>
                            <div className='py-2 px-4'>
                            { t("marketer.done_order") }  <Progress value={data.finished_orders.slice(0,-1)} />
                            </div>
                            
                        </Col>
                    </div>
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
                        
                        {/* <div className='profile_content'>
                            <div className='py-1.5'>{ t("marketer.v_acc_text") }</div>
                            <div className='py-1.5 text-lg'> 
                            <button className='btn app_button_1' > { t("marketer.Verify_your_account") } </button>
                            </div>
                        </div> */}
                </Col>
            </Row>
            <EditProfile show={show} info={userInfo} setShow={setShow}/>
        </Container>}
        </>
    )
}