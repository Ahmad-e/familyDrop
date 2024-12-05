

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

    
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('')
    

    const [errPassword, setErrPassword] = React.useState(false);
    const [errEmail, setErrEmail] = React.useState(false);
    const [errPhoneNumber, setErrPhoneNumber] = React.useState(false);





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


    const sendData=()=>{
        if(password.length<7){
            setErrPassword(true)
            return
        }
        if(email.length<1){
            setErrEmail(true)
            return
        }

        if( !errPassword && !errEmail )
            console.log(password,email);

    }

    return(
        <div className='flex justify-center'>
            <div className='auth_continer text-center'>
                <h2 className='text-3xl text-center'  > Login Now  </h2>

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
                <div className='auth_item'>
                    <button onClick={()=>sendData()}  className='p-t-2 btn app_button_2'>Register now</button>
                </div>
                
                <div className="taggle_auth" >
                    If you don`t have an account go to <a className='app-link' href='regaster'> regaster </a>
                </div>
            </div>
        </div>
    )
}