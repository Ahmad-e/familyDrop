// import logo from './logo.svg';
// import './App.css';
import * as React from 'react';
import { Card, Typography, useThemeProps } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';
import   { useRef } from 'react';

import Button from 'react-bootstrap/Button';


import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import CloseIcon from '@mui/icons-material/Close';

import { useTranslation } from 'react-i18next';
import { Padding } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function App( data ) {
  const { t } = useTranslation();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:"My Document"
  });

  const containerStyle = {
    display:"flex",
    flexDirection:"column",
    
    gap:"20px",
    alignItems:"center",
    justifyContent:"center"
  }

  var props = data.data


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className="container" style={containerStyle}>
      <Button variant="outline-warning" onClick={handleClickOpen}>
      { t("emp.print") } <PrintIcon /> 
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div style={{ backgroundColor:"white" ,color:"black" }} ref={componentRef} >
        <Typography >

        <Box  className="m-4 p-4" >
          <Table   aria-label="purchases">
            <TableBody>
              
                <TableRow >
                  <TableCell style={{ color:"black" }} color='dark' align="center">id</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{props.id}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("orders.o_date") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center" component="th" scope="row">
                    {props.created_at}
                  </TableCell> 
                </TableRow>
                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("orders.O_user_name") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{props.customer_name}</TableCell>
                </TableRow>

                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("auth.phone_number") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{props.customer_number}</TableCell>
                </TableRow>


                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("orders.platform") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{ props.account_name}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("orders.o_address") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{ props.country +" - "+ props.city +" - "+props.addresse }</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("emp.del_price") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{props.delivery_price} JOD </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("orders.o_p_quantity") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{props.total_quantity}</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell style={{ color:"black" }} align="center">{ t("orders.o_s_price") }</TableCell>
                  <TableCell style={{ color:"black" }} align="center">{props.total_price} JOD </TableCell>
                </TableRow>

            </TableBody>
          </Table>
        </Box>


        <Box  sx={{ margin: 1 }}>
              <Table  size='small' aria-label="purchases">
                <TableHead>
                  <TableRow>
                  {/* <TableCell style={{ color:"black" }} align="center">{ t("basket.p_img") }</TableCell> */}
                    <TableCell align="center">code</TableCell>
                    
                    <TableCell style={{ color:"black" }} align="center">{ t("orders.p_name") }</TableCell>
                    <TableCell style={{ color:"black" }} align="center">{ t("orders.color") }</TableCell>
                    <TableCell style={{ color:"black" }} align="center">{ t("orders.size") }</TableCell>
                    <TableCell style={{ color:"black" }} align="center">{ t("orders.p_quantity") }</TableCell>
                    <TableCell style={{ color:"black" }} align="center">{ t("orders.p_salling") }</TableCell>
                    {/* <TableCell style={{ color:"black" }} align="center"> { t("orders.p_source") } </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.products.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      {/* <TableCell style={{ color:"black" }} align="center">
                        <div className='flex justify-center'>
                            <img onClick={()=>console.log(historyRow.images_array.slice(2, -2))} src={historyRow.images_array.slice(2, -2)} className='product_img' />
                        </div>    
                      </TableCell> */}
                      <TableCell style={{ color:"black" }} align="center"> FD_{historyRow.product_id}</TableCell>
                      <TableCell style={{ color:"black" }} align="center">{historyRow.product_name}</TableCell>
                      <TableCell style={{ color:"white" , backgroundColor:historyRow.code }}  align="center">{historyRow.color}</TableCell>
                      <TableCell style={{ color:"black" }} align="center">{historyRow.size}</TableCell>
                      <TableCell style={{ color:"black" }} align="center">{historyRow.quantity}</TableCell>
                      <TableCell style={{ color:"black" }} align="center">{historyRow.selling_price}</TableCell>
                      
                      {/* <TableCell style={{ color:"black" }} align="center">{historyRow.cost_price}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>


        </Typography>
      </div>
        </DialogContent>
        <DialogActions>
        <Button onClick={handlePrint} variant="outline-warning" className='btn mx-1'>{ t("emp.print") } </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default App;
