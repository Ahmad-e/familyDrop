import { useSelector } from 'react-redux';

import axios from "axios";
import Loading from '../../component/loading'
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
export default function DeleteProduct(props){
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
  

    const Delete=()=>{
        setLoading(true);
        axios.get(url+"blockProduct/"+props.id,
            {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
            })
            .then((response) => {
                setLoading(false)
                props.onDelete(response.data.products)
            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
    }
    return(
        <>
            <button onClick={()=>Delete()} className='btn app_button_1' > {props.blocked ===0 ? (t("emp.unShow")) : (t("emp.show")) } </button>
            <Loading loading={loading} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle> info about user  </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    حذف منتج يعني أيضا حذف الطلبات المرتبطة بهذا المنتج
                    <br/>
                    هل أنت متأكد من عملية الحذف
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>cancale</Button>
                <Button onClick={()=>Delete()}>delete</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}