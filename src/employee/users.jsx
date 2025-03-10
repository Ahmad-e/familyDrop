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
import NoImg from '../images/images/no_img.png';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { IconButton } from '@mui/material';

import URL from '../images/images/test.jpg'

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
import Register from '../admin/components/register'
import { useSelector } from 'react-redux';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


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
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };



    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      setLoading(true);
      axios.get(url+"showUsers",
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              setData(response.data.data)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setLoading(false) });
  }, []);

  const blockUser=(id)=>{
    setLoading(true);
      axios.get(url+"blockUser/"+id,
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              setData(response.data.data)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setLoading(false) });
  }


    return(

        <Container>
            <Row className='flex justify-center'> 
            <Loading loading={loading} />
                <Col lg={4} md={5} sm={12}>
                    <Register />
                </Col>
                <Col lg={8} md={7} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 600  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                  <StyledTableCell align="center"> { t("emp.img") } </StyledTableCell>
                                  <StyledTableCell align="center">id</StyledTableCell>
                                    <StyledTableCell align="center">{ t("auth.name") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("auth.email") }</StyledTableCell>
                                    
                                    <StyledTableCell align="center"> { t("auth.phone_number") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.type") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("auth.block") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("basket.change") } </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id} onClick={()=>{window.location.pathname=`/admin/userInfo/${row.id}`}}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img  src={row.img_url !== null ? (row.img_url):(NoImg)} className='product_img' />
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center"> {row.email} </StyledTableCell>
                                    <StyledTableCell align="center"> {row.phone_no} </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {
                                          row.type_id===1 ? (t("emp.admin")):
                                          row.type_id===2 ? (t("emp.employee")):
                                          row.type_id===4 ? (t("emp.marketer")):
                                          (t("emp.merchant"))

                                        } 
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button onClick={()=>blockUser(row.id)} className='btn app_button_1' > { row.blocked===0 ? (t("auth.block")) : (t("emp.Unblock")) } </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                    <button onClick={()=>handleClickOpen()} className='btn app_button_1' >  { t("basket.change") } </button>
                                    </StyledTableCell>
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
              <DialogTitle> {t("emp.change")}  </DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    
                  
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>{t("emp.cancle")}</Button>
                <Button   >{t("emp.change")}</Button>
              </DialogActions>
              
            </Dialog>
        </Container>
    )
}