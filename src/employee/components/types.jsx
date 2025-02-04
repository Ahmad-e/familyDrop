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
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { IconButton } from '@mui/material';

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

import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';


import axios from "axios";
import Loading from '../../component/loading'

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
  


export default function Products(props){
  
    const { t } = useTranslation();
    
    const url = useSelector(state=>state.apiURL);
    const [loading, setLoading] = React.useState(false);
    const token = useSelector(state=>state.token);

    const [open, setOpen] = React.useState(false);

    const [idToChange, setIdToChange] = React.useState(0);
    const handleClickOpen = (data) => {
      setOpen(true);
      setIdToChange(data.id)
      setNameToChange(data.name)
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const [openDelete, setOpenDelete] = React.useState(false);

    const [idToDelete, setIdToDelete] = React.useState(0);
    const handleClickOpenDelete = (data) => {
      setOpenDelete(true);
      setIdToDelete(data.id)
    };
  
    const handleCloseDelete = () => {
      setOpenDelete(false);
    };
    
    const [typs, setTyps] = React.useState(props.data);

    const [name , setName]=React.useState('');


    const [errors , setErrors]=React.useState({});


    const ChangeName=(e)=>{
        setName(e.target.value)
        if(e.target.value.length<3)
            errors.name=true
        else
            errors.name=false
    }

    const [nameToChange , setNameToChange]=React.useState('');


    const ChangeNameToChange=(e)=>{
        setNameToChange(e.target.value)
        if(e.target.value.length<3)
            errors.nameToChange=true
        else
            errors.nameToChange=false
    }

    

    const Add_Type=()=>{
      if(name.length>=3)
      if(!errors.name)
      { 
        setLoading(true)
        try {
        const response = axios.post(url+'addProductType', {
            name:name
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            setTyps(response.data.data)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
            
        } catch (e) {
              throw e;
        }}
    }

    const Change_Type=()=>{
      if(nameToChange.length>=3)
        if(!errors.nameToChange){ 
          setLoading(true)
          try {
            const response = axios.post(url+'editProductType', {
                id:idToChange,
                name:nameToChange
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
                setTyps(response.data.data)
                setOpen(false)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            });
          } catch (e) {
                throw e;
          }}
    }

    const Delete_Type=()=>{
         
          setLoading(true)
          try {
            const response = axios.get(url+'deleteProductType/'+idToDelete, 
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' +token ,
                    'Accept':"application/json"
                }
            }).then((response) => {
                setLoading(false)
                console.log(response.data)
                setTyps(response.data.data)
                setOpenDelete(false)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            });
          } catch (e) {
                throw e;
          }
    }

    return(

        <Container>
            <Loading loading={loading} />
            <Row className='flex justify-center'> 
                <Col lg={8} md={10} sm={12} >
                    <Container>
                    <Row className='flex justify-center'>
                        <Col lg={4} md={6} sm={12} className="add_item">
                            <TextField  fullWidth value={name} onChange={ChangeName} error={errors.name} label="name of product" variant="outlined" />
                        </Col>
                        <Col g={3} md={4} sm={12}>
                            <button onClick={()=>Add_Type()}  className='m-3 btn app_button_2'> { t("auth.save") } </button>
                        </Col>
                    </Row>
                    </Container>
                </Col>
                <Col lg={8} md={10} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 600  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                    <StyledTableCell align="center"> تعديل </StyledTableCell>
                                    <StyledTableCell align="center"> حذف </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {typs.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    
                                    <StyledTableCell align="center">
                                        <button onClick={()=>handleClickOpen(row)} className='btn app_button_1' >  تعديل </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button onClick={()=>handleClickOpenDelete(row)} className='btn app_button_1' >  حذف </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            <Row className='flex justify-center'>
                <hr className='mt-3  mb-7' />
            </Row>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle> Change product type </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <Col className='mt-1'>
                    <TextField fullWidth value={nameToChange} onChange={ChangeNameToChange} error={errors.nameToChange} label="new name of product" variant="outlined" />
                  </Col> 
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="error"  onClick={handleClose} >cancle</Button>
                <Button color="error" onClick={()=>Change_Type()}>save</Button>
              </DialogActions>
            </Dialog>

            {/* dalete dialog */}
            <Dialog
              open={openDelete}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleCloseDelete}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle> delete product type </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  حذف النوع يعني أن المنتجات التي تنتمي تحت هذا النوع سيتم حذفها أيضاً
                  هل أنت متأكد من عملية الحذف
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="error"  onClick={handleCloseDelete} >cancle</Button>
                <Button color="error" onClick={()=>Delete_Type()}>delete</Button>
              </DialogActions>
            </Dialog>
        </Container>
    )
}