import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as React from 'react';
import TextField from '@mui/material/TextField';

import { useSelector } from 'react-redux';
import Links from './components/links';
import Payment from './components/paymentWays';
import { useTranslation } from 'react-i18next';

const Setting=()=>{
    const { t } = useTranslation();
    const language = useSelector((state) => state.language);
    const [name , setName]=React.useState('');


    const [errors , setErrors]=React.useState({});


    const ChangeName=(e)=>{
        setName(e.target.value)
        if(e.target.value<0)
            errors.name=true
        else
            errors.name=false
    }


    return(
        <>
            <Links />
            <Payment />
            <Container>
                <Row className=' justify-center'>
                    <div>
                        نسبة الأرباح تعني النسبة من الأموال التي سيتم قطعها و تسليمها للمسوق بعد إتمام عملية الشراء<br/>
                        يجب تحديدها بحذر
                    </div>
                    <Col lg={3} md={4} sm={6} className="add_item">
                        <TextField type='number' fullWidth value={name} onChange={ChangeName} error={errors.name} label="name of product" variant="outlined" />
                    </Col>
                    <Col lg={3} md={4} sm={6} className="add_item">
                    <button   className='m-3 btn app_button_2'> { t("auth.save") } </button>

                    </Col>
                    
                </Row>
            </Container>
            
        </>
    )
}
export default Setting