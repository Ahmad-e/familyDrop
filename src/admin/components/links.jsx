

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
  


export default function Products(){
  
  
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
      setValueToChange(data.value)
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const [openDelete, setOpenDelete] = React.useState(false);

    
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        setLoading(true);
        axios.get(url+"showLinks",
            {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
            })
            .then((response) => {
                setData(response.data.data)
                setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
    }, []);


    const [name , setName]=React.useState('');


    const [errors , setErrors]=React.useState({});


    const ChangeName=(e)=>{
        setName(e.target.value)
        if(e.target.value.length<3)
            errors.name=true
        else
            errors.name=false
    }

    const [value , setValue]=React.useState('');
    const ChangeValue=(e)=>{
      setValue(e.target.value)
      if(e.target.value.length<1)
          errors.value=true
      else
          errors.value=false
    }


    const [nameToChange , setNameToChange]=React.useState('');
    const ChangeNameToChange=(e)=>{
        setNameToChange(e.target.value)
        if(e.target.value.length<3)
            errors.nameToChange=true
        else
            errors.nameToChange=false
    }

    const [valueToChange , setValueToChange]=React.useState('');
    const ChangeValueToChange=(e)=>{
      setValueToChange(e.target.value)
      if(e.target.value.length<1)
          errors.valueToChange=true
      else
          errors.valueToChange=false
    }



    const Add_Type=()=>{
      if(value.length>=1)
      if(name.length>=3)
      if(!(errors.name || errors.value))
      { 
        setLoading(true)
        try {
        const response = axios.post(url+'addLink', {
            name:name,
            value:value
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            setData(response.data.data)
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
            const response = axios.post(url+'editLink', {
                id:idToChange,
                name:nameToChange,
                value:valueToChange
            },
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' +token ,
                    'Accept':"application/json"
                }
            }).then((response) => {
                setLoading(false)
                setData(response.data.data)
                setOpen(false)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            });
          } catch (e) {
                throw e;
          }}
    }

    const Delete_Type=(id)=>{
         
          setLoading(true)
          try {
            const response = axios.get(url+'deleteLink/'+id, 
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' +token ,
                    'Accept':"application/json"
                }
            }).then((response) => {
                setLoading(false)
                console.log(response.data)
                setData(response.data.data)
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
                        <Col lg={3} md={4} sm={12} className="add_item">
                            <TextField fullWidth value={name} onChange={ChangeName} error={errors.name} label={ t("emp.link_t") } variant="outlined" />
                        </Col>
                        <Col lg={5} md={5} sm={12} className="add_item">
                            <TextField fullWidth value={value} onChange={ChangeValue} error={errors.value}  label="link URL" variant="outlined" />
                        </Col>
                        <Col g={3} md={3} sm={12}>
                            <button onClick={()=>Add_Type()}  className='m-3 btn app_button_2'> { t("emp.save") } </button>
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
                                    <StyledTableCell align="center"> { t("emp.link_t") } </StyledTableCell>
                                    <StyledTableCell align="center"> link URL </StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.change") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.delete") } </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell  align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.value}</StyledTableCell>
                                    
                                    <StyledTableCell align="center">
                                        <button onClick={()=>handleClickOpen(row)} className='btn app_button_1' >  { t("emp.change") } </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button onClick={()=>Delete_Type(row.id)} className='btn app_button_1' >  { t("emp.delete") } </button>
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
              <DialogTitle> { t("emp.change") } </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <Col className='mt-1'>
                    <TextField fullWidth value={nameToChange} onChange={ChangeNameToChange} error={errors.nameToChange} label={ t("emp.link_t") } variant="outlined" />
                  </Col> 
                  <Col className='mt-3'>
                      <TextField fullWidth value={valueToChange}  onChange={ChangeValueToChange} label="Link URL" variant="outlined" />
                  </Col>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="error"  onClick={handleClose} >{ t("emp.cancle") }</Button>
                <Button color="error" onClick={()=>Change_Type()}>{ t("emp.save") }</Button>
              </DialogActions>
            </Dialog>

        </Container>
    )
}