import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from 'react-bootstrap/Button';

import UserInfo from './components/showUserInfo';
import CustomerInfo from './components/showCustomerInfo'
import PrintButton from './test'

import { useSelector } from 'react-redux';

import axios from "axios";
import Loading from '../component/loading'

import { useTranslation } from 'react-i18next';
import Test from '../marketer/orderMessages'
import Badge from '@mui/material/Badge';

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Container from 'react-bootstrap/Container';
import Row_ from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { InputAdornment, MenuItem, TextField } from "@mui/material";

function Row(props) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  
  const url = useSelector(state=>state.apiURL);
  const token = useSelector(state=>state.token);
  const [loading, setLoading] = React.useState(false);

  const [row, setRow] = React.useState(props.row);



  const CancleOrder=(id)=>{
    setLoading(true)
    try {
        const response = axios.post(url+'cancelOrder', {
          id:id
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            window.location.reload()
            console.log(response.data.orders)
            

        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
        
    } catch (e) {
          throw e;
    }
    
  }
  const StartWork =(id)=>{
    setLoading(true)
    try {
        const response = axios.post(url+'startWorkingOrder', {
          id:id
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            window.location.reload()
            console.log(response.data.orders)
            

        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
        
    } catch (e) {
          throw e;
    }
  }
  const EndWork =(id)=>{
    setLoading(true)
    try {
        const response = axios.post(url+'endingOrder', {
          id:id
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            window.location.reload()
            console.log(response.data.orders)
            

        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
        
    } catch (e) {
          throw e;
    }
  }
  const StartDelivery =(id)=>{
    setLoading(true)
    try {
        const response = axios.post(url+'deliveringOrder', {
          id:id
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            window.location.reload()
            console.log(response.data.orders)
            

        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
        
    } catch (e) {
          throw e;
    }
  }
  const Done =(id)=>{
    setLoading(true)
    try {
        const response = axios.post(url+'doneOrder', {
          id:id
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            window.location.reload()
            console.log(response.data.orders)
            

        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
        
    } catch (e) {
          throw e;
    }
  }
  
  return (
    <React.Fragment>
      <Loading loading={loading} />

      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <Badge badgeContent={row.tags.length}  color="error">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Badge>

          </IconButton>
          </TableCell>
          <TableCell align="center" >{row.id}</TableCell>
          <TableCell align="center">
              <UserInfo  text={ t("emp.marketer_data") }  id={row.user_id} name={row.user_name} email={row.email} phone_number={row.phone_no} type={row.user_type}  />
          </TableCell>
          <TableCell align="center">
              <CustomerInfo text={ t("emp.consumer_data") }   id={row.user_id} name={row.customer_name} email={row.email} phone_number={row.customer_number} type={row.user_type}  />
          </TableCell>
          <TableCell>
             <PrintButton data={row}/>  
          </TableCell> 
          <TableCell align="center" component="th" scope="row">
            {row.created_at}
          </TableCell> 
          <TableCell align="center">{row.account_name}</TableCell>
          <TableCell align="center">{ row.country +"-"+ row.city +"-"+row.addresse }</TableCell>
          <TableCell align="center">{row.delivery_price}</TableCell>
          <TableCell align="center">{row.total_quantity}</TableCell>
          <TableCell align="center">{row.total_price}</TableCell>
          <TableCell align="center">{row.total_profit}</TableCell>
          <TableCell align="center">{row.title}</TableCell>
          <TableCell align="center">{row.state_name}</TableCell>
          
          <TableCell align="center">
            <Button hidden={row.state_id===6 || row.state_id===5 } onClick={()=>CancleOrder(row.id)} variant="outline-secondary"  className='btn mx-1' > { t("emp.o_cancel") }  </Button>
          </TableCell>
          <TableCell align="center">
            {
              row.state_id===1 ? (
                
                  <Button onClick={()=>StartWork(row.id)} variant="outline-warning" className='btn mx-1'>{ t("emp.o_statrt") }</Button>
                
              ): row.state_id===2 ? (<Button onClick={()=>EndWork(row.id)} variant="outline-primary" className='btn mx-1' > { t("emp.o_end") }</Button>):
              row.state_id===3 ? (<Button onClick={()=>StartDelivery(row.id)} variant="outline-success" className='btn mx-1'>{ t("emp.o_SDel") }</Button>):
              row.state_id===4 ? (<Button onClick={()=>Done(row.id)} variant="outline-danger" className='btn mx-1'> { t("emp.o_done") } </Button>):("")

            }
          </TableCell> 
        
        
      </TableRow>
      <TableRow  >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            
            <Box  sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                order data
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  <TableCell align="center">{ t("basket.p_img") }</TableCell>
                    <TableCell align="center">code</TableCell>
                    
                    <TableCell align="center">{ t("orders.p_name") }</TableCell>
                    <TableCell align="center">{ t("orders.color") }</TableCell>
                    <TableCell align="center">{ t("orders.size") }</TableCell>
                    <TableCell align="center">{ t("orders.p_quantity") }</TableCell>
                    <TableCell align="center">{ t("orders.p_salling") }</TableCell>
                    <TableCell align="center"> { t("orders.p_source") } </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell align="center">
                        <div className='flex justify-center'>
                            <img onClick={()=>console.log(historyRow.images_array.slice(2, -2))} src={historyRow.images_array.slice(2, -2)} className='product_img' />
                        </div>    
                      </TableCell>
                      <TableCell align="center"> FD_{historyRow.product_id}</TableCell>
                      <TableCell align="center">{historyRow.product_name}</TableCell>
                      <TableCell style={{ backgroundColor:historyRow.code}} align="center">{historyRow.color}</TableCell>
                      <TableCell align="center">{historyRow.size}</TableCell>
                      <TableCell align="center">{historyRow.quantity}</TableCell>
                      <TableCell align="center">{historyRow.selling_price}</TableCell>
                      
                      <TableCell align="center">{historyRow.cost_price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Test id={row.id} messages={row.tags} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}




export default function CollapsibleTable() {
  const { t } = useTranslation();
  const url = useSelector(state=>state.apiURL);
  const token = useSelector(state=>state.token);
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setLoading(true)
    axios.get(url+"showOrders",
        {
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' +token ,
            'Accept':"application/json"
        }
        })
        .then((response) => {
            console.log(response.data)
            setLoading(false)
            setData(response.data.orders)

        })
        .catch((error) =>{ 
            console.log(error);
            setLoading(false)
         });
    }, []);

    const [fillterID, setFillterID]=React.useState(0);
    const [fillterType, setFillterType]=React.useState(0);
    

  return (
    <>
              <Row_ className='flex justify-center'> 
                <Col className='my-4' lg={2} md={3} sm={6}>
                  <TextField dir="ltr"
                    slotProps={{
                      input: {
                                  startAdornment: <InputAdornment  position="start">id_</InputAdornment>,
                              },
                          }} 
                    value={fillterID} 
                    onChange={(e)=>{
                      setFillterID(parseInt(e.target.value))  
                      console.log(e.target.value)
                    }} 
                    fullWidth 
                    type='number' 
                    label={ t("orders.o_n") }
                    variant="outlined" 
                  />
                </Col>
                <Col className='my-4' lg={3} md={4} sm={6}>
                  <FormControl fullWidth  className='auth_item' dir='ltr' >
                      <InputLabel id="demo-simple-select-label">{ t("orders.o_state") }</InputLabel>
                      <Select
                      
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={fillterType}
                          label={ t("orders.o_state") }
                          onChange={(e)=>setFillterType(e.target.value)}
                      >
                        <MenuItem value={0}> All data </MenuItem>
                        <MenuItem value={1}>{ t("marketer.n_order") } </MenuItem>
                        <MenuItem value={2}> { t("marketer.w_order") } </MenuItem>
                        <MenuItem value={3}>{ t("marketer.e_order") } </MenuItem>
                        <MenuItem value={4}> { t("marketer.del_order") }</MenuItem>
                        <MenuItem value={5}> { t("marketer.c_order") }</MenuItem>
                        <MenuItem value={6}> { t("marketer.done_order") }</MenuItem>
                        
                      </Select>
                  </FormControl>
                </Col>
              </Row_>
    
    <TableContainer component={Paper}>
      <Loading loading={loading} />
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell align="center">{ t("orders.o_n") } </TableCell>
            <TableCell align="center"> { t("emp.marketer_data") } </TableCell>
            <TableCell align="center"> { t("emp.consumer_data") } </TableCell>
            <TableCell align="center">{ t("emp.print") }</TableCell>
            <TableCell align="center">{ t("orders.o_date") }</TableCell>
            <TableCell align="center">{ t("orders.platform") }</TableCell>
            <TableCell align="center">{ t("orders.o_address") }</TableCell>
            <TableCell align="center">{ t("emp.del_price") }</TableCell>
            <TableCell align="center">{ t("orders.o_p_quantity") }</TableCell>
            <TableCell align="center">{ t("orders.o_s_price") }</TableCell>
            <TableCell align="center">{ t("orders.o_profit") }</TableCell>
            <TableCell align="center">{ t("emp.title") }</TableCell>
            <TableCell align="center">{ t("orders.o_state") }</TableCell>
            <TableCell align="center"> { t("emp.o_cancel") } </TableCell>
            <TableCell align="center"> { t("emp.opr") } </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            if( fillterID===0 || fillterID===parseInt(row.id) )
              if( fillterType===0 || fillterType===parseInt(row.state_id) )
                return(
                  <Row key={row.name} row={row}  />
                )}
              )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


