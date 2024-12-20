
import { useTranslation } from 'react-i18next';

import * as React from 'react';
import Slide from '@mui/material/Slide';

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
        <div className='total_card' style={{ backgroundColor:"#63636300" }}>
            <div className='mb-3 text-2xl'>{ t("merchant.t_1") }</div>
            <div id="alert-dialog-slide-description">
                <div>
                { t("merchant.t_2") }
                </div>
                        <FormControl className='my-2' fullWidth   >
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

                        <FormControl className='my-2' fullWidth >
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

                        <FormControl className='my-2' fullWidth >
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
                        { t("merchant.t_3") }
                    </div>
                    <TextField fullWidth className='my-2' variant="outlined"  error={errName} onChange={changeName} value={name}  label={ t("orders.p_name") }  />
                    <TextField type='number' fullWidth className='my-2' variant="outlined" label={ t("basket.salary") }  />
                    <TextField type='number' fullWidth className='my-2' variant="outlined" label={ t("basket.quan") }  />
                    <div className="">
                        <button className='btn app_button_2 text-lg m-2' >{ t("merchant.Add_order") }</button>
                    </div>
            </div>
        </div>
    )
}