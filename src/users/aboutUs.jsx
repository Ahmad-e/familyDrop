import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Profile1 from '../images/images/ab_1.jpg';
import Profile2 from '../images/images/ab_2.jpg';

import { useTranslation } from 'react-i18next';

export default function Info (){


    var lg="lg"
    const { t } = useTranslation();

    return(
        <Container>
            <Row className='justify-center ' >
                <Col  lg={8} md={10} sm={12} >
                    <div className="p-3">
                    { t("about.header_1") }
                    </div>

                </Col>
                
                <Col  lg={8} md={10} sm={12} >
                    <div className="p-3">
                        <div className="text-2xl main_color pt-6 pb-3"> { t("about.mar_1") } </div>
                        { t("about.mar_2") }
                        <br/>
                        { t("about.mar_3") }
                    </div>
                    <img src={Profile1} className='' />
                </Col>
                <Row className='flex justify-center'>
                    <hr className='mt-3  mb-7' />
                </Row>
                <Col  lg={8} md={10} sm={12} >
                    <div className="p-3">
                        <div className="text-2xl main_color pt-6 pb-3"> { t("about.mer_1") }</div>
                        { t("about.mer_2") }
                        <br/>
                        { t("about.mer_3") }
                        <br/>
                        { t("about.mer_4") }
                    </div>
                    <img src={Profile2} className='' />
                </Col>
                <Row className='flex justify-center'>
                    <hr className='mt-3  mb-7' />
                </Row>
                <Col className=' m-12' lg={8} md={10} sm={12} >
                    
                    <div >
                        { t("about.end") }
                    </div>
                    <button onClick={()=> window.location.href = "register" } className='btn app_button_2 m-4'>{ t("header.regaster") }</button>

                </Col>
            </Row>
        </Container>
    )
}