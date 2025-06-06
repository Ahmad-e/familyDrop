import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container';
import Row_ from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Loading from '../component/loading'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { InputAdornment, MenuItem, TextField } from "@mui/material";

import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { IconButton } from '@mui/material';
import OrderData from './orderDate';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Row(props) {
  const { row } = props;
  const [open , setOpen]=React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();


  
  return (
      <TableRow  sx={{ '& > *': { borderBottom: 'unset' }   }}>
        <TableCell align="center" >{row.id}</TableCell>
        <TableCell align="center" component="th" scope="row">
        {row.created_at}
        </TableCell>
        <TableCell align="center">{row.customer_name}</TableCell>
        <TableCell align="center">{row.account_name}</TableCell>
        <TableCell align="center">{row.customer_number}</TableCell>
        <TableCell align="center">{ row.country +"-"+ row.city +"-"+row.addresse }</TableCell>
        <TableCell align="center">{row.delivery_price} JOD </TableCell>
        <TableCell align="center">{row.total_quantity} </TableCell>
        <TableCell align="center">{row.total_price} JOD </TableCell>
        <TableCell align="center">{row.total_profit} JOD </TableCell>
        <TableCell align="center">{row.title}</TableCell>
        
        <TableCell align="center">{row.state_name}</TableCell>
        <TableCell align="center"> 
          <Badge badgeContent={row.tags.length}  color="error">
            <button onClick={()=>handleClickOpen(row)} className='btn app_button_1 text-lg'>{ t("orders.o_pr") }</button>    
          
          </Badge>
            
        </TableCell>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            { t("orders.o_pr") }
            </Typography>

          </Toolbar>
          <OrderData id={row.id} tags={row.tags} product={row.products} />

        </AppBar>
      </Dialog>
      </TableRow>
  );
}


export default function CollapsibleTable() {


  const [loading, setLoading] = React.useState(false);
  const url = useSelector(state=>state.apiURL);
  const token = useSelector(state=>state.token);
  const { t } = useTranslation();

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    
    axios.get(url+"showUserOrders",
        {
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' +token ,
            'Accept':"application/json"
        }
        })
        .then((response) => {
            console.log(response.data)
            setData(response.data.orders)
            setLoading(false)

        })
        .catch((error) =>{ 
          setLoading(false)

            console.log(error);
         });
    }, []);

    const [fillterID, setFillterID]=React.useState(0);
    const [fillterType, setFillterType]=React.useState(0);
    const [fillterUserID, setFillterUserID]=React.useState(0);
    const [fillterUserrPhoneNo, setFillterUserPhoneNo]=React.useState("");
    const [fillterPhoneNo, setFillterPhoneNo]=React.useState("");
  return (
    <>
    <Row_ className='flex justify-center'> 



                <Col className='my-4' lg={2} md={3} sm={6}>
                <TextField dir="ltr"
                    
                    value={fillterUserrPhoneNo} 
                    onChange={(e)=>{setFillterUserPhoneNo(e.target.value) }} 
                    fullWidth 
                    label={ t("orders.o_user_ph_no") }
                    variant="outlined" 
                  />
                </Col>

                
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
      <Loading loading={loading} />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{ t("orders.o_n") } </TableCell>
                            <TableCell align="center">{ t("orders.o_date") }</TableCell>
                            <TableCell align="center">{ t("orders.platform") }</TableCell>
                            <TableCell align="center">{ t("orders.O_user_name") }</TableCell>
                            <TableCell align="center">{ t("orders.o_user_ph_no") }</TableCell>
                            <TableCell align="center">{ t("orders.o_address") }</TableCell>
                            <TableCell align="center">{ t("emp.del_price") }</TableCell>
                            <TableCell align="center">{ t("orders.o_p_quantity") }</TableCell>
                            <TableCell align="center">{ t("orders.o_s_price") }</TableCell>
                            <TableCell align="center">{ t("orders.o_profit") }</TableCell>
                            <TableCell align="center">{ t("emp.title") }</TableCell>
                            <TableCell align="center">{ t("orders.o_state") }</TableCell>
                            <TableCell align="center">{ t("orders.o_pr") }</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => 
                      {
                        if( fillterID===0 || fillterID===parseInt(row.id) )
                          if( fillterType===0 || fillterType===parseInt(row.state_id) )
                            if( fillterUserrPhoneNo==="" || fillterUserrPhoneNo===(row.customer_number) )
                              return(
                                <Row key={row.id} row={row} />
                              )    
                      }
                    )}
                    </TableBody>
                </Table>
                </TableContainer>
    </>
    
  );
}