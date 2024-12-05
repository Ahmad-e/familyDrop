

import './style.css';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import FormHelperText from '@mui/material/FormHelperText';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Register (){

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
    
    const [errName, setErrName] = React.useState(false);
    const [errPassword, setErrPassword] = React.useState(false);
    const [errEmail, setErrEmail] = React.useState(false);
    const [errPhoneNumber, setErrPhoneNumber] = React.useState(false);



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


    const [radioValue, setRadioValue] = React.useState('1');

    const radios = [
        { name: 'join us marketer', value: '1' },
        { name: 'join as merchant', value: '2' },
      ];

    const sendData=()=>{
        if(password.length<7){
            setErrPassword(true)
            return
        }
        if(email.length<1){
            setErrEmail(true)
            return
        }
        if(name.length<1){
            setErrName(true)
            return
        }
        if(!errEmail && !errPassword && !errEmail )
            console.log(name,password,email,radioValue);

    }

    return(
        <div className='flex justify-center'>
            <div className='auth_continer text-center'>
                <h2 className='text-3xl text-center'  > Register Now  </h2>
                <div className='auth_item'>
                    <TextField helperText="Name must be greater than 3 characters" error={errName} onChange={changeName} value={name} fullWidth label="name" variant="standard" />
                </div>
                <div className='auth_item'>
                    <TextField helperText="Email must be valid" error={errEmail} onChange={changeEmail} value={email} fullWidth label="email" variant="standard" />
                    
                </div>
                <div className='auth_item'>
                    <FormControl fullWidth   variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
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
                        <FormHelperText >Password must be greater than 3 characters</FormHelperText>
                    </FormControl>
                </div>
                <div className='auth_item' dir='ltr' >
                    <PhoneInput
                    
                    value={phoneNumber}
                    // onChange={phone => setPhoneNumber({ phone })}
                    />
                </div>
                <div className='auth_item'>
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
                    <button onClick={()=>sendData()}  className='p-t-2 btn app_button_2'>Register now</button>
                </div>
                
                <div className="taggle_auth" >
                    If you have an account go to <a className='app-link' href='login'> login </a>
                </div>
            </div>
        </div>
    )
}