import 'react-phone-input-2/lib/style.css'

import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DialogActions } from '@mui/joy';
import { Dialog, DialogContent, DialogTitle, IconButton, Input, InputAdornment } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loading from '../../component/loading';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';


export default function EditProfile (props){

    const { t } = useTranslation();

        const [showPassword, setShowPassword] = React.useState(false);
    
        const handleClickShowPassword = () => setShowPassword((show) => !show);
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
      
        const handleMouseUpPassword = (event) => {
          event.preventDefault();
        };

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [selectedCountry, setSelectedCountry] = React.useState(0);

    const [errName, setErrName] = React.useState(false);
    const [errEmail, setErrEmail] = React.useState(false);
    const [errNumber, setErrNumber] = React.useState(false);
    const [Countries,setCountries] = React.useState([]);
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [password, setPassword] = React.useState('');
    const [load,setLoad] = React.useState(false);
    const [errPassword, setErrPassword] = React.useState(false);
    



    const changeName=(e)=>{
        setName(e.target.value);
        if(e.target.value.length<3)
            setErrName(true)
        else
            setErrName(false)
    }

    const changeNumber = (e) => {
        setPhoneNumber(e.target.value);
        if(e.target.value.length<3)
            setErrNumber(true)
        else
            setErrNumber(false)
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const changeEmail=(e)=>{
        setEmail(e.target.value);
        if(!re.test(e.target.value))
            setErrEmail(true)
        else
            setErrEmail(false)
    }

    const handleChangeSelectedCountry = (event) => {
        setSelectedCountry(event.target.value);
    };


    const [open, setOpen] = React.useState(false);
    const [idToChange, setIdToChange] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        setIdToChange(props.info.id)
        setName(props.info.name)
        setEmail(props.info.email);
        setSelectedCountry(props.info.country_id);
        setPhoneNumber(props.info.phone_no);
        setCountries(props.countries)
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const changePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8)
            setErrPassword(true)
        else
            setErrPassword(false)
    }

    const handleOk = ()=>{
        axios.post(url+"updateUserData",{
            user_id:idToChange,
            name: name,
            email: email,
            password: password,
            city_id: selectedCountry,
            phone_no: phoneNumber
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            setOpen(false)
           window.location.reload()
        }).catch(err => {
            console.log(err);
            setLoad(false);
        })
    } 

    return(
        <>
            <button onClick={()=>handleClickOpen()} className='btn app_button_1' >  { t("basket.change") } </button>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <Loading loading={load}/>
            <DialogTitle className="fs-5" id="alert-dialog-title">
                {"Enter the information"}
            </DialogTitle>
            <DialogContent>
            <div className='flex justify-center shadow-none'>
                <div className='auth_continer text-center shadow-none'>
                    <div className='auth_item'>
                        <TextField helperText={ t("auth.name_t") } error={errName} onChange={changeName} value={name} fullWidth label={ t("auth.name") } variant="standard" />
                    </div>
                    <div className='auth_item'>
                        <TextField helperText={ t("auth.email") } error={errEmail} onChange={changeEmail} value={email} fullWidth label={ t("auth.email") } variant="standard" />
                    </div>
                    <div className='auth_item'>
                        <FormControl fullWidth   variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">{ t("auth.password") }</InputLabel>
                            <Input
                                onChange={changePassword}
                                value={password}
                                error={errPassword}
                                sx={{ direction:"ltr" }}
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment  position="end">
                                    <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                
                                }
                            />
                            <FormHelperText >{ t("auth.password_t") }</FormHelperText>
                        </FormControl>
                    </div>
                    <div className='auth_item'>
                        <FormControl fullWidth style={{ margin:" 15px  0px"  }}  className='auth_item' dir='ltr' >
                            <InputLabel id="demo-simple-select-label">{ t("basket.Country") }</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedCountry}
                                label={ t("basket.Country") }
                                onChange={handleChangeSelectedCountry}
                            >
                                {Countries.map(el => <MenuItem value={el.id}>{el.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        {/* <TextField helperText={"Phone Number"} error={errNumber} onChange={changeNumber} value={phoneNumber} fullWidth label={"Phone Number"} variant="standard" /> */}
                    </div>
                </div>
            </div>
            </DialogContent>
            <DialogActions className={"p-2"}>
            <Button color="error" className=" ms-2" onClick={handleClose}>{ t("emp.cancle") }</Button>
            <Button color="error"  onClick={handleOk} autoFocus>
            { t("emp.save") }
            </Button>
            </DialogActions>
            </Dialog>
        </>
    )
}