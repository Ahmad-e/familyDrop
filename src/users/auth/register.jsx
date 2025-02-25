

import './style.css';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import FormHelperText from '@mui/material/FormHelperText';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useTranslation } from 'react-i18next';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


import axios from "axios";
import Loading from '../../component/loading'
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../../store";

import Alert from '@mui/material/Alert';
import { BorderAll } from '@mui/icons-material';

export default function Register (){
    const url = useSelector(state=>state.apiURL);
    const [loading, setLoading] = React.useState(false);

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {setAccount,setUserId,setToken} = modeActions;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [selectedCountry, setSelectedCountry] = React.useState(3);


    const [errName, setErrName] = React.useState(false);
    const [errPassword, setErrPassword] = React.useState(false);
    const [errEmail, setErrEmail] = React.useState(false);
    const [errPhoneNumber, setErrPhoneNumber] = React.useState(false);
    const [errServer, setErrSever] = React.useState('')


    const changeName=(e)=>{
        setName(e.target.value);
        if(e.target.value.length<3)
            setErrName(true)
        else
            setErrName(false)
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const changeEmail=(e)=>{
        setEmail(e.target.value);
        if(!re.test(e.target.value))
            setErrEmail(true)
        else
            setErrEmail(false)
    }

    const changePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8)
            setErrPassword(true)
        else
            setErrPassword(false)
    }

    const changePhoneNumber=(e)=>{
        if (e.startsWith('972')) {
            setErrPhoneNumber(true);
            setPhoneNumber('');
            return
        }
        setPhoneNumber(e);
        console.log(e)
        if(e.length<7)
            setErrPhoneNumber(true)
        else
            setErrPhoneNumber(false)
    }

    const handleChangeSelectedCountry = (event) => {
        setSelectedCountry(event.target.value);
    };


    const [radioValue, setRadioValue] = React.useState('4');

    const radios = [
        { name: t("auth.j_u_marketer") , value: '4' },
        { name: t("auth.j_u_merchant") , value: '3' },
      ];

    const sendData=()=>{

        if(password.length<7){
            setErrPassword(true)
        }
        if(email.length<1){
            setErrEmail(true)
        }
        if(name.length<1){
            setErrName(true)
        }
        if(phoneNumber.length<7){
            setErrPhoneNumber(true)
        }
        if(password.length<7 || email.length<1 || name.length<1 || phoneNumber.length<7 )
            return

        setLoading(true)
            console.log(name,password,email,radioValue);
            try {
                const response = axios.post(url+'register', {
                    name:name,
                    email:email,
                    password:password,
                    phone_no:phoneNumber,
                    type_id:radioValue,
                    country_id:selectedCountry
                },
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept':"application/json"
                    }
                }).then((response) => {
                    setLoading(false)
                    if(response.data.status){     
                        console.log(response.data);
                        dispatch(setAccount(response.data.user_data.type_id))
                        dispatch(setToken(response.data.access_token))
                        dispatch(setUserId(response.data.user_data.id))
                    }
                    else{
                    console.log(response.data.message);
                    setErrSever(response.data.message)
                        
                    }
        
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
                
            } catch (e) {
                  throw e;
            }
        

    }


    const [allCountreis,setAllCountreis] = React.useState([])

    React.useEffect(() => {
        setLoading(true);
        axios.get(url+"showCountries",
          {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
          })
            .then((response) => {
                console.log(response.data)
                setAllCountreis(response.data.data)
                setLoading(false)

            })
            .catch((error) =>{ 
              console.log(error);
               setLoading(false) });
    }, []);

    return(
        <div className='flex justify-center'>
            <Loading loading={loading} />
            <div className='auth_continer text-center'>
                <h2 className='text-3xl text-center mb-3'  > { t("auth.register") }  </h2>
                <div className='auth_item'>
                    <TextField helperText={ t("auth.email_t") } error={errEmail} onChange={changeEmail} value={email} fullWidth label={ t("auth.email") } variant="standard" />
                    
                </div>

                <div className='auth_item'>
                    <TextField helperText={ t("auth.name_t") } error={errName} onChange={changeName} value={name} fullWidth label={ t("auth.name") } variant="standard" />
                </div>
                
                <div className='auth_item'>
                    <FormControl fullWidth   variant="standard">
                        <InputLabel error={errPassword} htmlFor="standard-adornment-password">{ t("auth.password") }</InputLabel>
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
                        <FormHelperText error={errPassword} >{ t("auth.password_t") }</FormHelperText>
                    </FormControl>
                </div>
                <div dir='ltr' className='auth_item'>
                    <FormControl style={{ marginTop: "15px" }}>
                        <PhoneInput
                            country={"jo"}
                            excludeCountries={"Is"}
                            style={ errPhoneNumber ? { color:"gray", width:"300px" , border:"solid 1px #c5222a" } : { color:"gray", width:"300px"  }}
                            value={phoneNumber}
                            onChange={phone => changePhoneNumber( phone )}
                        />
                        <FormHelperText error={errPhoneNumber} > { t("auth.phone") } </FormHelperText>
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
                            {
                                allCountreis.map((item)=>{
                                    return(
                                        <MenuItem value={item.id}>{item.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
                <div dir='ltr' className='auth_item'>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            className='app_button_1'
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <div className='auth_item'>
                    <button onClick={()=>sendData()}  className='p-t-2 btn app_button_2'>{ t("auth.register") }</button>
                </div>
                <div hidden={errServer==="" } className='mt-3'>
                    <Alert  variant="outlined"  severity="error"> {errServer} </Alert>
                </div>
                <div className="taggle_auth" >
                    { t("auth.register_e") } <a className='app-link' href='login'> { t("auth.login") } </a>
                </div>
            </div>
        </div>
    )
}