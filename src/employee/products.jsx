import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import { InputAdornment, MenuItem, TextField } from "@mui/material";

import AddProducts from './components/addProduct'
import DeleteProduct from './components/deleteProduct'
import ChangeProduct from './components/changeProduct'
import UserInfo from './components/showUserInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';

import axios from "axios";
import Loading from '../component/loading'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function Products(){
    const { t } = useTranslation();
    const language = useSelector((state) => state.language);
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    
    const [loading, setLoading] = React.useState(false);

    const [selectedVed,setSelectedVed] = React.useState('');
    const [open,setOpen] = React.useState(false);
    const handleOpen = (url) => {
      setSelectedVed(url)
      setOpen(true);
  };
    const handleClose = () => {
        setOpen(false);
    };


  const [data, setData]=React.useState([]);
  const [types, setTypes]=React.useState([]);
  const [colors, setColors] = React.useState([]);
  const [sizes, setSizes] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        axios.get(url+"showProducts",
            {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
            })
            .then((response) => {
                console.log(response.data)
                setData(response.data.products)
                //setTypes(response.data.products_types)
                //setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                //setLoading(false) 
              });
      axios.get(url+"showTypesSizesColors",
          {
          headers:{
              'Content-Type': 'application/json',
              'Accept':"application/json"
          }
          })
          .then((response) => {
              //  console.log(response.data)

              setTypes(response.data.types)
              setColors(response.data.colors)
              setSizes(response.data.sizes)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setTypes([])
              setColors([])
              setSizes([])
              setLoading(false) 
            });
    }, []);


    const [fillterID, setFillterID]=React.useState(0);
    const [fillterType, setFillterType]=React.useState(0);
    const [fillterHidden, setFillterHidden]=React.useState(0);

    return(

        <Container>
            <Loading loading={loading} />
            <Row className='flex justify-center '> 
              <Col lg={12} md={12} sm={12}>
                <AddProducts onAdd={(e)=>setData(e.products)} />
            
              </Col>
              <Row className='flex justify-center'> 
                <Col className='my-4' lg={2} md={3} sm={6}>
                  <TextField dir="ltr"
                    slotProps={{
                      input: {
                                  startAdornment: <InputAdornment  position="start">FD_</InputAdornment>,
                              },
                          }} 
                    value={fillterID} 
                    onChange={(e)=>{
                      setFillterID(parseInt(e.target.value))  
                      console.log(e.target.value)
                    }} 
                    fullWidth 
                    type='number' 
                    label={ "code" } 
                    variant="outlined" 
                  />
                </Col>
                <Col className='my-4' lg={3} md={4} sm={6}>
                  <FormControl fullWidth  className='auth_item' dir='ltr' >
                      <InputLabel id="demo-simple-select-label">{ t("emp.type") }</InputLabel>
                      <Select
                      
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={fillterType}
                          label={ t("emp.type") }
                          onChange={(e)=>setFillterType(e.target.value)}
                      >
                        <MenuItem value={0}> All data </MenuItem>
                          {
                              types.map((item)=>{
                                  return(
                                      <MenuItem value={item.id}>{item.name}</MenuItem>
                                  )
                              })
                          }
                      </Select>
                  </FormControl>
                </Col>
              </Row>
                <Col lg={12} md={12} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 600  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("basket.p_img") }</StyledTableCell>
                                    <StyledTableCell align="center"> Code </StyledTableCell>
                                    <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.vid") }  </StyledTableCell>
                                    <StyledTableCell align="center">{ t("basket.p_desc") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.c_price") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.salling") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.rate") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.all_quant") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.sell_quant") }</StyledTableCell>
                                    
                                    <StyledTableCell align="center">{ t("emp.ow_data") }</StyledTableCell>
                                    <StyledTableCell align="center"> {} { t("emp.show") } & { t("emp.unShow") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.change") } </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => {
                              if( fillterID===0 || fillterID===parseInt(row.id) )
                                if( fillterType===0 || fillterType===parseInt(row.type_id) )
                                    return(
                                      <StyledTableRow key={row.id}>
                                          <StyledTableCell align="center">
                                              <div className='flex justify-center'>
                                                  <img src={row.images_array[0]} className='product_img' />
                                              </div>    
                                          </StyledTableCell>
                                          <StyledTableCell align="center">FD_{row.id}</StyledTableCell>
                                          <StyledTableCell align="center">{row.name}</StyledTableCell>
                                          <StyledTableCell align="center"> <Button hidden={!row.video_url} color="error" onClick={()=>handleOpen(row.video_url)}>{ t("emp.vid") }</Button> </StyledTableCell>
                                          <StyledTableCell align="center"> {row.disc} </StyledTableCell>
                                          <StyledTableCell align="center">{row.cost_price}</StyledTableCell>
                                          <StyledTableCell align="center">{row.selling_price}</StyledTableCell>
                                          <StyledTableCell align="center">{row.profit_rate} % </StyledTableCell>
                                          <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                          <StyledTableCell align="center">{row.sales}</StyledTableCell>
                                          <StyledTableCell align="center">
                                            <UserInfo  id={row.owner_id} name={row.owner_name} email={row.owner_email} phone_number={row.owner_phone_no} type={row.owner_type} text={ t("emp.ow_data") } />
                                          </StyledTableCell>
                                          <StyledTableCell align="center">
                                            <DeleteProduct blocked={row.blocked} id={row.id}  onDelete={(e)=>setData(e)}  />
                                          </StyledTableCell>
                                          <StyledTableCell align="center">
                                            {
                                              !loading ? 
                                                  (
                                                    <ChangeProduct colors={colors} types={types} sizes={sizes} product={row} onChange={(e)=>setData(e)} />
                                                  ):(<></>)
                                            }
                                          </StyledTableCell>
                                      </StyledTableRow>
                                )})}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"The video"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <video src={selectedVed} controls />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
        </Container>
    )
}