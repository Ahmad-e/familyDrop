import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as React from 'react';
import TextField from '@mui/material/TextField';

import { useSelector } from 'react-redux';
import Links from './components/links';
import Payment from './components/paymentWays';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import Loading from '../component/loading'


const Setting=()=>{
    const { t } = useTranslation();
    const language = useSelector((state) => state.language);
    const [name , setName]=React.useState('');
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [errors , setErrors]=React.useState({});

    React.useEffect(() => {
        setLoading(true);
        axios.get(url+"showSettings",
            {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
            })
            .then((response) => {
                console.log(response.data)
                setData(response.data.settings[0])
                setName(response.data.settings[0].value)
                setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
    }, []);

    // console.log(token)
    const ChangeName=(e)=>{
        setName(e.target.value)
        if(e.target.value<0)
            errors.name=true
        else
            errors.name=false
    }

    const Change=()=>{
        console.log(name)
        if(name>0)
        { 
          
          try {
          const response = axios.post(url+'editCommission', {
              value:name
          },
          {
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer ' +token ,
                  'Accept':"application/json"
              }
          }).then((response) => {
              setLoading(false)
              console.log(response.data)
              setName(response.data.settings[0].value)
          }).catch((error) => {
              console.log(error)
              setLoading(false)
          });
              
          } catch (e) {
                throw e;
          }}
    }
    


    return(
        <>
            <Links />
            <Payment />
            <Loading loading={loading} />
            <Container>
                <Row className=' justify-center'>
                    <div>
                    { t("dialog.rate") }
                    </div>
                    <Col lg={3} md={3} sm={5} className="add_item">
                        <TextField  type='number' fullWidth value={name} onChange={ChangeName} error={errors.name} label={ t("emp.rate") } variant="outlined" />
                    </Col>
                    <Col lg={2} md={3} sm={5} className="add_item">
                    <button  onClick={()=>Change()} className='m-1 btn app_button_2'> { t("emp.save") } </button>

                    </Col>
                    
                </Row>
            </Container>
            
        </>
    )
}
export default Setting