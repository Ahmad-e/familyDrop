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

import AddProducts from './components/addProduct'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import MaterialButton from '@mui/material/Button';
import UserInfo from './components/showUserInfo';


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

export default function Products(){
    const { t } = useTranslation();
    const [openAcceptDialog, setOpenAcceptDialog] = React.useState(false);
    const [idToCansel, setIdToCancel] = React.useState(0);
    const handleClickOpenAcceptDialog = (id) => {
        setOpenAcceptDialog(true);
        setIdToCancel(id)
    };
  
    const handleCloseAcceptDialog = () => {
        setOpenAcceptDialog(false);
    };

    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);




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


  const Cansole=(id)=>{
    
    setLoading(true);
    axios.get(url+"deletePullProductRequest/"+id,
        {
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' +token ,
            'Accept':"application/json"
        }
        })
        .then((response) => {
            console.log(response.data)
            setOpenAcceptDialog(false)
            setData(response.data.pull_requests)
            setLoading(false)

        })
        .catch((error) =>{ 
            console.log(error);
            setLoading(false) });
    }


    const Accept=()=>{
    
        setLoading(true);
        axios.get(url+"acceptPullProductRequest/"+idToCansel,
            {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
            })
            .then((response) => {
                console.log(response.data)
                setOpenAcceptDialog(false)
                window.location.reload();
                setLoading(false)
    
            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
        }

    return(

        <Container>
            <Loading loading={loading} />
            <Row className='flex justify-center'> 
                <Col lg={12} md={12} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 600  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("basket.p_img") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("basket.p_desc") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.c_price") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.rate") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.q_t_p") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.all_quant") }</StyledTableCell>
                                    
                                    <StyledTableCell align="center">{ t("emp.o_state") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.ow_data") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.opr") } </StyledTableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img src={row.images_array[0]} className='product_img' />
                                        </div>    
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center"> {row.disc} </StyledTableCell>
                                    <StyledTableCell align="center"> {row.cost_price}  </StyledTableCell>
                                    <StyledTableCell align="center">{row.profit_rate}</StyledTableCell>
                                    <StyledTableCell align="center"> {row.request_quantity} </StyledTableCell>
                                    <StyledTableCell align="center"> {row.request_quantity + row.quantity } </StyledTableCell>
                                    <StyledTableCell align="center">
                                        { 
                                            row.accepted===0 & row.employee_id ===null ? (t("emp.new_o")) :
                                            row.accepted===1 ? (t("emp.ok_o")):(t("emp.reject_o"))
                                        }
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <UserInfo  id={row.user_id} name={row.user_name} email={row.email} phone_number={row.phone_no} type={row.user_type}   text={ t("emp.user_data") }/>
                                    </StyledTableCell>
                                    <TableCell align="center">
                                        { 
                                            row.accepted===0 & row.employee_id ===null ? (
                                                !loading ? (
                                                <>
                                                    <Button color="error" onClick={()=>handleClickOpenAcceptDialog(row.id)} variant="outline-success">{t("emp.acc_o")}</Button>
                                                    <Button onClick={()=>Cansole(row.id)} variant="outline-secondary" className='btn m-1' >{t("emp.reject")}</Button>
                                                </>):("")

                                            ) :
                                            row.accepted===1 ? (t("emp.acc_from")+row.employee_name+t("emp.for_o")):(t("emp.reject_o_from")+row.employee_name)
                                        }
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>

            <Dialog
                open={openAcceptDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseAcceptDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle> {t("emp.acc_o")} </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                {t("dialog.acc")}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <MaterialButton color="error" onClick={()=>handleCloseAcceptDialog()}> {t("emp.cancle")}</MaterialButton>
                <MaterialButton color="error" onClick={()=>Accept()}> {t("emp.acc_o")} </MaterialButton>
                
                
                </DialogActions>
            </Dialog>
        </Container>
    )
}