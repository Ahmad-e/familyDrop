import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

import Typography from '@mui/material/Typography';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

import axios from "axios";
import Loading from '../component/loading'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


export default function Home(){

    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const { t } = useTranslation();

    const [loading, setLoading] = React.useState(true);
    const [value, setValue] = React.useState([
        dayjs('2025-01-1'),
        dayjs('2026-01-1'),
      ]);

      const colors =  [
        "#ed1c25", // اللون الأول
        "#ef3e2d", // تدرج بين اللونين
        "#f05f34", // تدرج بين اللونين
        "#f2813c", // تدرج بين اللونين
        "#f4a045", // تدرج بين اللونين
        "#fdc814"  // اللون الثاني
    ];
      
    const [data, setData] = React.useState({
        "status": true,
        "merchers_count": 0,
        "marketers_count": 0,
        "total_profits": 0,
        "all_orders": 0,
        "new_orders": 0,
        "on_working_orders": 0,
        "ended_orders": 0,
        "under_delivery_orders": 0,
        "cancelled_orders": 0,
        "finished_orders": 0,
        "products": [],
        "top_marketers": [],
        "top_merchers": [],
        "top_products": [],
        "profit_dates": [],
        "profit_values": []
    });
    function ChangeDate(){
        if( value[0] && value[1] ){
            setLoading(true)
            try {
                const response = axios.post(url+'showReport', {
                    date1:value[0],
                    date2:value[1]
                }, 
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer ' +token ,
                        'Accept':"application/json"
                    }
                }).then((response) => {
                    setLoading(false)
                    if(response.data.status){     
                        console.log(response.data)
                        setData(response.data)
                    }
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
                
            } catch (e) {
                  throw e;
            }
        }
    }

    
    React.useEffect(() => {
        ChangeDate()
    }, [value]);

    const getMonthsArray = (dates) => {
        return dates.map(date => {
            const [, month] = date.split('-');
            return parseInt(month, 10); // تحويل الشهر إلى رقم صحيح
        });
    };

    return(
        <Container>
            <Loading loading={loading} />
            <Row dir='ltr' className='justify-content-center  mt-4'>
                <Col lg={11} md={12} sm={12} >
                    <div className="dash_item flex justify-center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateRangeCalendar']}>
                                <DateRangeCalendar onChange={(e)=>setValue(e)}  />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </Col>
            </Row>
            <Row  className='justifu-content-center'>
                <Col lg={3} md={4} sm={12} >
                    <div className="dash_card">
                        <div>
                            <p>
                                { t("admin.TOTAL_MARKETERS") }<br />
                                {data.marketers_count}
                            </p>
                        </div>
                        <div>
                            <PersonAddIcon style={{ fontSize:"40px" }} />
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={12} >
                    <div className="dash_card">
                        <div>
                            <p className='' >
                            { t("admin.TOTAL_MERCHANT") }
                            </p>
                            <p>
                            {data.merchers_count}
                            </p>
                        </div>
                        <div>
                            <PersonAddIcon style={{ fontSize:"40px" }} />
                        </div>
                    </div>
                </Col>
                
                <Col lg={6} md={4} sm={12} >
                    <div className="dash_card">
                        <div>
                            <p>
                            { t("admin.TOTAL_PROFITS") }<br />
                                {data.total_profits}
                            </p>
                        </div>
                        <div>
                            <MonetizationOnRoundedIcon style={{ fontSize:"40px" }} />
                        </div>
                    </div>
                </Col>
                
            </Row>
            {/* orders data */}
            <Row className='justifu-content-center justify-center'>
                <Col lg={3} md={6} sm={12} >
                    <div className="dash_card">
                        <div>
                            <p>
                            { t("admin.TOTAL_ORDERS") }<br />
                                {data.all_orders}
                            </p>
                        </div>
                        <div>
                            <LocalGroceryStoreRoundedIcon style={{ fontSize:"40px" }} />
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} >
                    <div className="dash_card">
                        <div>
                            <p>
                            { t("admin.NEW_ORDERS") }<br />
                                {data.new_orders}
                            </p>
                        </div>
                        <div>
                            <PlaylistAddRoundedIcon style={{ fontSize:"40px" }} />
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} >
                    <div className="dash_card">
                        <div>
                            <p>
                            { t("admin.CANCELED_ORDERS") } <br />
                                {data.cancelled_orders}
                            </p>
                        </div>
                        <div>
                            <BackspaceRoundedIcon style={{ fontSize:"40px" }} />
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} >
                    <div className="dash_card">
                        <div>
                            <p>
                            { t("admin.WORKING_ORDERS") } <br />
                                {data.on_working_orders + data.under_delivery_orders +data.ended_orders }
                            </p>
                        </div>
                        <div>
                        
                            <MoveToInboxRoundedIcon style={{ fontSize:"40px" }} />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='justifu-content-center justify-center'>
                
            <Col lg={10}  sm={12} >
                    <div className="dash_item">
                        <Typography>{ t("admin.BEST_PRODUCTS") } </Typography>
                        <PieChart
                        dir='ltr'
                          series={[
                            {
                                data: data.top_products
                                }]}
                            height={250}
                            colors={colors}
                            />
                    </div>
                </Col>
                <Col  md={6} sm={12} >
                    <div className="dash_item">
                        <Typography>{ t("admin.BEST_MARKETERS") } </Typography>
                        <PieChart
                            dir='ltr'
                          series={[
                            {
                                data: data.top_marketers
                                }]}
                            
                                colors={colors}
                            height={200}
                            />
                    </div>
                </Col>
                <Col md={6} sm={12} >
                    <div className="dash_item">
                        <Typography>{ t("admin.BEST_MERCHANT") } </Typography>
                        <PieChart
                        dir='ltr'
                          series={[
                            {
                                data: data.top_merchers
                                }]}
                            
                                colors={colors}
                            height={200}
                            />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} sm={12}>
                    <div className="dash_item">
                        
                    <Typography> { t("admin.end") } </Typography>
                        <LineChart
                            xAxis={[{ data: getMonthsArray(data.profit_dates) }]}
                            colors={colors}
                            series={[
                                {
                                  data: data.profit_values
                                },
                              ]}
                            height={300}
                            />
                    </div>
                </Col>
            </Row>
            <Loading loading={loading} />
        </Container>
    )
}