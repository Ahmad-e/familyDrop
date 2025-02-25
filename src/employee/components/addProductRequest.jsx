import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import TextField from '@mui/material/TextField';


import Button from 'react-bootstrap/Button';
import MaterialButton from '@mui/material/Button';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


import axios from "axios";
import Loading from '../../component/loading';
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

export default function AcceptProductsOrders(props){
    const { t } = useTranslation();
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);

    const [openAcceptDialog, setOpenAcceptDialog] = React.useState(false);

  
    const handleClickOpenAcceptDialog = (id) => {
        setOpenAcceptDialog(true);
    };
  
    const handleCloseAcceptDialog = () => {
        setOpenAcceptDialog(false);
    };


    const [suggestedSalary , setSuggestedSalary]=React.useState(0);
    const ChangeSuggestedSalary=(e)=>{
        setSuggestedSalary(e.target.value)
    }

    const [rate , setRate]=React.useState(0);
    const [errRate , setErrRate]=React.useState(0);
    const ChangeRate=(e)=>{
        setRate(e.target.value)
        if(e.target.value<0 )
            setErrRate(true)
        else
            setErrRate(false)
    }
    const [selectedType , setSelectedType]=React.useState(0);
    const ChangeSelectedType=(e)=>{
        setSelectedType(e.target.value)
    }

    const Accept=()=>{
        setLoading(true);
        console.log({
            id:props.id,
            profit_rate:parseInt(rate),
            type_id:parseInt(selectedType),
            selling_price:suggestedSalary,
        }
    )
        if(selectedType!==0 && rate>0)
        axios.post(url+"acceptAddProductRequest/"+props.id,
            {
                id:props.id,
                profit_rate:rate,
                type_id:selectedType,
                selling_price:suggestedSalary,
            },
            {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
            })
            .then((response) => {
                console.log(response.data)
                window.location.href="products"
                setLoading(false)
                setOpenAcceptDialog(false)
            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
    }

    return(

        <>
             <Loading loading={loading} />
             <Button onClick={()=>handleClickOpenAcceptDialog()} variant="outline-success">قبول الطلب</Button>

            <Dialog
                open={openAcceptDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseAcceptDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>  تأكيد الطلب  </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        في حال قبول العررض يبدأ المنتج بالظهور للمسوقين لطلبه للشراء

                        <FormControl fullWidth style={{ margin:" 15px  0px"  }}  className='auth_item' dir='ltr' >
                            <InputLabel id="demo-simple-select-label">{ t("basket.type") }</InputLabel>
                            <Select
                                
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedType}
                                label={ t("basket.Country") }
                                onChange={ChangeSelectedType}
                            >
                                {
                                    props.types.map((item)=>{
                                        return(
                                            <MenuItem value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                        <br/><br/>
                        <TextField  value={rate} onChange={ChangeRate} error={errRate}  type='number' label="نسبة الربح المسموحة" variant="outlined" /><br/><br/>
                        <TextField  value={suggestedSalary} onChange={ChangeSuggestedSalary}   type='number' label="Suggested salary" variant="outlined" />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <MaterialButton color="error" onClick={handleCloseAcceptDialog}> cancele </MaterialButton>
                <MaterialButton color="error" onClick={()=>Accept()}> قيول العرض </MaterialButton>
                
                </DialogActions>
            </Dialog>
        </>
    )
}