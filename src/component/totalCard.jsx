
import { useTranslation } from 'react-i18next';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PhoneInput from 'react-phone-input-2'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function Products(){
        
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const [selectedCountry, setSelectedCountry] = React.useState(0);
    const [selecCity, setSelectedCity] = React.useState(0);
    const [selectedAddress, setSelectedAddress] = React.useState(0);


    const handleChangeSelectedCountry = (event) => {
        setSelectedCountry(event.target.value);
      };
    const handleChangeSelecCity = (event) => {
        setSelectedCity(event.target.value);
      };
    const handleChangeSelectedAddress = (event) => {
        setSelectedAddress(event.target.value);
      };

    const [name, setName] = React.useState('');
    const [errName, setErrName] = React.useState(false);
    const changeName=(e)=>{
        setName(e.target.value);
        if(e.target.value.length<3)
            setErrName(true)
        else
            setErrName(false)
    }

    const [phoneNumber, setPhoneNumber] = React.useState('')
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return(
        <div className='total_card'>
            <div className='mb-3'>{ t("basket.o_d") }</div>
            <div className="">
                <div className="flex justify-between total_card_item"> 
                    <span  > name × 3 : </span> 
                    <span>300$</span>   
                </div>
                <div className="flex justify-between total_card_item"> 
                    <span  > name × 3 : </span> 
                    <span>300$</span>   
                </div>
                <div className="flex justify-between total_card_item"> 
                    <span  > name × 3 : </span> 
                    <span>300$</span>   
                </div>
                <div className="flex justify-between total_card_item font-bold"> 
                    <span  > { t("basket.total") } : </span> 
                    <span>900$</span>   
                </div>
                <div className="flex justify-center mt-3 font-bold">
                    <button onClick={handleClickOpen}  className='btn app_button_2 text-lg '>  { t("basket.Add_order") } </button> 
                </div>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                
            >
                <DialogTitle align='center'> { t("basket.cus_info") } </DialogTitle>
                <DialogContent align='center'>
                    <DialogContentText style={{     maxWidth: "410px" }} id="alert-dialog-slide-description">
                        { t("basket.desc_1") }<br/>{ t("basket.desc_2") }<br/><br/><br/>
                        <div> { t("basket.del_info") } </div>
                        <FormControl style={{ margin:"12px", width:"300px" }}>
                            <InputLabel id="demo-simple-select-label">{ t("basket.Country") }</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedCountry}
                                label={ t("basket.Country") }
                                onChange={handleChangeSelectedCountry}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl style={{ margin:"12px", width:"300px" }}>
                            <InputLabel id="demo-simple-select-label">{ t("basket.City") }</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selecCity}
                                label={ t("basket.City") }
                                onChange={handleChangeSelecCity}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl style={{ margin:"12px", width:"300px" }}>
                            <InputLabel id="demo-simple-select-label">{ t("basket.Address") }</InputLabel>
                            <Select
                            
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedAddress}
                                label={ t("basket.Address") }
                                onChange={handleChangeSelectedAddress}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <br/><br/>
                        <div>
                        { t("basket.cus_info_input") }
                        </div>
                        <TextField style={{ margin:"12px", width:"300px" }} variant="outlined" helperText={ t("auth.name_t") } error={errName} onChange={changeName} value={name}  label={ t("auth.name") }  />
                        <div className='auth_item' dir='ltr' >
                            <PhoneInput
                            onlyCountries={["jo"]}
                            country={"jo"}
                                style={{ color:"gray", width:"300px" }}
                            value={phoneNumber}
                            // onChange={phone => setPhoneNumber({ phone })}
                         />
                        </div>
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button   className='btn app_button_1 text-lg mx-2'>{ t("basket.no") }</button>
                    <button   className='btn app_button_1 text-lg mx-2'>{ t("basket.ok") }</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}