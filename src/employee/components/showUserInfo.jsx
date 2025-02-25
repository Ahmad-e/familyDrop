import * as React from 'react';
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

export default function UserData(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen} className='btn app_button_1' >  user Data </button>

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
            name : {props.name} <br/>
            email : {props.email} <br/>
            phone number : {props.phone_number}<br/>
            Account type : {props.type}
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>cancale</Button>
          <Button href={'userInfo/'+props.id} color="error" onClick={handleClose}>Show more data</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}