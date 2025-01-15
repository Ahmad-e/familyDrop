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

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';


export default function Home(){

    const [value, setValue] = React.useState([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
      ]);

      
    return(
        <Container>
            <Row dir='ltr' className='justify-content-center  mt-4'>
                <Col lg={11} md={12} sm={12} >
                    <div className="dash_item flex justify-center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateRangeCalendar']}>
                                <DateRangeCalendar defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </Col>
            </Row>
            <Row  className='justifu-content-center'>
            <Col lg={3} md={6} sm={12} >
                <div className="dash_card">
                    <div>
                        <p>
                            TOTAL MARKETERS<br />
                             20
                        </p>
                    </div>
                    <div>
                        <PersonAddIcon style={{ fontSize:"40px" }} />
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} >
                <div className="dash_card">
                    <div>
                        <p className='' >
                            TOTAL MERCHANT 
                        </p>
                        <p>
                            3
                        </p>
                    </div>
                    <div>
                        <PersonAddIcon style={{ fontSize:"40px" }} />
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} >
                <div className="dash_card">
                    <div>
                        <p>
                            TOTAL ORDERS<br />
                             20
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
                            TOTAL PROFITS<br />
                             20
                        </p>
                    </div>
                    <div>
                        <MonetizationOnRoundedIcon style={{ fontSize:"40px" }} />
                    </div>
                </div>
            </Col>
            </Row>
            <Row >
                <Col lg={4} md={6} sm={12} >
                    <div className="dash_item">
                        <Typography>BEST MARKETERS</Typography>
                        <PieChart
                            dir='ltr'
                          series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ]
                                }]}
                            
                            
                            height={200}
                            />
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className="dash_item">
                        <Typography>BEST MERCHANT</Typography>
                        <PieChart
                        dir='ltr'
                          series={[
                            {
                                data: [
                                    { id: 0, value: 50, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 1, value: 5, label: 'series D' },
                                    { id: 2, value: 20, label: 'series C' },
                                ]
                                }]}
                            
                            
                            height={200}
                            />
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className="dash_item">
                        <Typography>BEST PRODUCTS</Typography>
                        <PieChart
                        dir='ltr'
                          series={[
                            {
                                data: [
                                    { id: 0, value: 50, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 1, value: 5, label: 'series D' },
                                    { id: 2, value: 20, label: 'series C' },
                                    
                                ]
                                }]}
                            height={200}
                            />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} sm={12}>
                    <div className="dash_item">
                        
                    <Typography> مقارنة قيم الأرباح بين الأشهرالأخيرة الماضية </Typography>
                        <LineChart
                            xAxis={[{ data: ["1","2","3","4","5","6","7"] }]}
                            colors={["#ed1c25"]}
                            series={[
                                {
                                  data: [200,400,900,1100,700,800,1500],
                                  area: true,
                                },
                              ]}
                            height={300}
                            />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}