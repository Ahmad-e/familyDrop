
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import axios from "axios";
import Loading from '../component/loading'
import Register from '../admin/components/register'
import { useSelector } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  


export default function AddWithdrawOrder(props){
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

        
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const user_id = useSelector(state=>state.id);
    
    const [loading, setLoading] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };

    const [quantity, setQuantity]=React.useState(0);
    const [errQuantity, setErrQuantity] = React.useState(false);
    const ChangeQuantity=(e)=>{
        setQuantity(e.target.value)
        if(e.target.value<0 ||  e.target.value>props.quantity)
            setErrQuantity(true)
        else
            setErrQuantity(false)
    }
    const AddReq = () =>{
    
    if(quantity===0 ||  quantity>props.quantity)
        setErrQuantity(true);


        if(quantity>0 && quantity<=props.quantity ){

        setLoading(true)
        console.log({
            product_id:props.p_id,
            quantity:parseInt(quantity)
        })

        try {
            const response = axios.post(url+'PullProductRequest',
            {
                product_id:props.p_id,
                quantity:parseInt(quantity)
            },
            {
                headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization' : 'Bearer ' +token ,
                    'Accept':"application/json"
                }
            }
            ).then((response) => {
                console.log(response.data)
                window.location.href="/merchant/withdrawOrder"
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            });
        } catch (e) {
            throw e;
        }
    }
    }


    return(
        <div>
            <Loading loading={loading} />
            <button onClick={handleClickOpen}  className='btn app_button_1 text-lg mx-2' > { t("merchant.button2") }</button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>  { t("merchant.button2") } </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        { t("merchant.dt_1") }  {props.quantity}  { t("merchant.dt_2") }
                        <div className='mt-3' style={{ textAlign:"center" }} >
                            <TextField  error={errQuantity} onChange={ChangeQuantity} value={quantity}  style={{ maxWidth:"220px" }} fullWidth type='number' className='my-2' variant="outlined" label={ t("basket.quan") }  />
                            <label>{ t("merchant.q_m_p") }  {props.quantity} </label>
                        </div>
                       
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                
                <Button   color='error' onClick={handleClose}>{ t("basket.no") }</Button>
                <Button color='error' onClick={()=>AddReq()}>{ t("basket.ok") }</Button>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}