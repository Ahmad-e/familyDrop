
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  


export default function AddWithdrawOrder(){
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };


    return(
        <div>
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
                        { t("merchant.dt_1") }  {50}  { t("merchant.dt_2") }  {"كنزة تدرج رمادي"}
                        <div className='mt-3' style={{ textAlign:"center" }} >
                            <TextField  style={{ maxWidth:"200px" }} type='number' className='my-2' variant="outlined" label={ t("basket.quan") }  />
                        </div>
                       
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                
                <Button   color='error' onClick={handleClose}>{ t("basket.no") }</Button>
                <Button color='error' onClick={handleClose}>{ t("basket.ok") }</Button>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}