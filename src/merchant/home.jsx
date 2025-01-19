import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Progress from '../component/progressBar'

import Test from '../images/images/test.jpg';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home(){

    const { t } = useTranslation();

    return(
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
                        <div className='text-5xl'>
                            50.32$
                        </div>
                        <div>
                            <Link to={"/merchant/receiveMoney"} style={{ height:"100%" }}  className='btn app_button_1 text-lg'>{ t("merchant.withdraw_money") }</Link>
                        </div>
                    </div>
                    <div className='profile_content flex justify-around'>
                        <Col>
                            
                            <div >
                                <div className='py-4 text-5xl'>
                                    { t("merchant.all_products") }
                                </div>
                                <div className='py-1.5 text-4xl'>
                                    13
                                </div>
                                <div className='py-1.5' >
                                    <button onClick={()=>window.location.href="merchant/orders"} style={{ height:"100%" }}  className='btn app_button_1 text-lg'>{ t("merchant.Add_new_order") }</button>
                                </div>
                            </div>
                        </Col>
                        <Col className='text-start' >
                            <div className='py-2 px-4' >
                                { t("merchant.new_products") }  <Progress value={10} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("merchant.d_Products") } <Progress value={50} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("merchant.sold_Products") }  <Progress value={20} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("merchant.u_sold_Products") }  <Progress value={40} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("merchant.p_products") }  <Progress value={20} />
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} >
                        <div className='profile_content'>
                            <div className='flex justify-center'>
                                <img src={Test} className='profile_img' />
                            </div>

                            <div className='py-1.5'> Ahmad Homse </div>
                            <div className='py-1.5'> AhmadHomse@gmail.com </div>
                        </div>
                        
                        <div className='profile_content'>
                            <div className='py-1.5'>{ t("merchant.v_acc_text") }</div>
                            <div className='py-1.5 text-lg'> 
                            <button className='btn app_button_1' > { t("merchant.Verify_your_account") } </button>
                            </div>
                        </div>


                </Col>
            </Row>
        </Container>
    )
}