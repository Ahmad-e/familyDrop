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

import URL from '../images/images/test2.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import axios from "axios";
import Loading from '../component/loading'
import { useSelector } from 'react-redux';


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
  
  

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function WithdrawOrder(){

    const { t } = useTranslation();
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      setLoading(true);
      axios.get(url+"showPullProductRequests",
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              setData(response.data.pull_requests)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setLoading(false) });
  }, []);

    return(

        <Container>
          <Loading loading={loading} />
            <Row className='flex justify-center'> 
                <Col lg={12} md={12} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 500  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("basket.p_img") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.p_desc") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.salary") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.all_quant") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("merchant.q_t_w") } </StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.q_a_t_w") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.state") }</StyledTableCell>
                                    {/* <StyledTableCell align="center"> { t("orders.o_cancel") } </StyledTableCell> */}
                                    
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img loading="auto" src={row.images_array.slice(2, -2)} className='product_img' />
                                        </div>    
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.disc}</StyledTableCell>
                                    <StyledTableCell align="center">{row.cost_price} JOD</StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity + row.request_quantity}</StyledTableCell>
                                    <StyledTableCell align="center">{row.request_quantity}</StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                    
                                    <StyledTableCell  align="center">
                                    {  
                                            row.accepted===0 & row.employee_id ===null ? (t("emp.new_o")) :
                                            row.accepted===1 ? (t("emp.ok_o")):(t("emp.reject_o"))
                                        } 
                                    </StyledTableCell>
                                    
                                    {/* <StyledTableCell align="center">
                                        <button onClick={handleClickOpen}  className='btn app_button_1 text-lg mx-2' >{ t("orders.o_cancel") }</button>
                                    </StyledTableCell>
                                     */}
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle> { t("merchant.c_order") } </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    { t("merchant.t_c_order") }
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button color='error' onClick={handleClose}>{ t("merchant.no") }</Button>
                <Button color='error'  onClick={handleClose}>{ t("merchant.ok") }</Button>
                </DialogActions>
            </Dialog>

        </Container>
    )
}