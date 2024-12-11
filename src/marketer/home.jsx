import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Progress from '../component/progressBar'

import Test from '../images/images/test.jpg';

import { useTranslation } from 'react-i18next';

export default function Home(){

    const { t } = useTranslation();

    return(
        <Container>
            <Row>
                <h1 className='text-3xl'>
                    { t("marketer.Marketer_Profile") }
                </h1>
            </Row>
            <Row>
                <Col lg={8} md={6} sm={12}  >
                    {/* orders and mony section */}
                    <div className='profile_content flex justify-around'>
                        <div className='text-5xl'>
                            50.32$
                        </div>
                        <div>
                            <button style={{ height:"100%" }}  className='btn app_button_1 text-lg'>{ t("marketer.withdraw_money") }</button>
                        </div>
                    </div>
                    <div className='profile_content flex justify-around'>
                        <Col>
                            
                            <div >
                                <div className='py-4 text-5xl'>
                                    { t("marketer.all_order") }
                                </div>
                                <div className='py-1.5 text-4xl'>
                                    13
                                </div>
                                <div className='py-1.5' >
                                    <button style={{ height:"100%" }}  className='btn app_button_1 text-lg'>{ t("marketer.Add_new_order") }</button>
                                </div>
                            </div>
                        </Col>
                        <Col className='text-start' >
                            <div className='py-2 px-4' >
                                { t("marketer.c_order") }  <Progress value={10} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("marketer.n_order") } <Progress value={50} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("marketer.w_order") }  <Progress value={20} />
                            </div>
                            <div className='py-2 px-4'>
                                { t("marketer.e_order") }  <Progress value={70} />
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
                            <div className='py-1.5'>{ t("marketer.v_acc_text") }</div>
                            <div className='py-1.5 text-lg'> 
                            <button className='btn app_button_1' > { t("marketer.Verify_your_account") } </button>
                            </div>
                        </div>


                </Col>
            </Row>
        </Container>
    )
}