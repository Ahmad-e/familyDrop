
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
import Snackbar from '@mui/material/Snackbar';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Loading from '../component/loading'
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../store";
import Badge from '@mui/material/Badge';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });





export default function Products(){
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const [selectedCountry, setSelectedCountry] = React.useState(0);
    const [selecCity, setSelectedCity] = React.useState(0);
    const [selectedAddress, setSelectedAddress] = React.useState(0);

    const [loading, setLoading] = React.useState(false);
    const basket = useSelector(state=>state.basket);
    const dispatch = useDispatch();
    const {clearBasket} = modeActions;

    const [allCountry, setAllCountry] = React.useState([]);
    const [allCity, setAlldCity] = React.useState([]);
    const [allAddress, setAlldAddress] = React.useState([]);

    React.useEffect(() => {
    
        axios.get(url+"showLocations",
            {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
            })
            .then((response) => {
                
                setAllCountry(response.data.countries);
                setAlldAddress(response.data.addresses);
                setAlldCity(response.data.cities)
    
            })
            .catch((error) =>{ 
                console.log(error);
             });
    }, []);

    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackBar(false);
      };


    const handleChangeSelectedCountry = (event) => {
        setSelectedCountry(event.target.value);
      };
    const handleChangeSelecCity = (event) => {
        setSelectedCity(event.target.value);
      };
      const [errAddress, setErrAddress] = React.useState(false);
    const handleChangeSelectedAddress = (event) => {
        setSelectedAddress(event.target.value);
      };

    const [nots, setNots] = React.useState('');
    const [name, setName] = React.useState('');
    const [errName, setErrName] = React.useState(false);
    const changeName=(e)=>{
        setName(e.target.value);
        if(e.target.value.length<3)
            setErrName(true)
        else
            setErrName(false)
    }

    const [accName, setAccName] = React.useState('');
    const [errAccName, setErrAccName] = React.useState(false);
    const changeAccName=(e)=>{
        setAccName(e.target.value);
        if(e.target.value.length<3)
            setErrAccName(true)
        else
            setErrAccName(false)
    }

    const [phoneNumber, setPhoneNumber] = React.useState('')
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [errServer, setErrSever] = React.useState('')
    const Send=()=>{
        if(name==="")
            setErrName(true)
        if(selectedAddress===0)
            setErrAddress(true)


        if(name!=="" && selectedAddress!==0 && phoneNumber.length>7){
            try {
                const response = axios.post(url+'addOrder', {
                    customer_name:name,
                    addresse_id:selectedAddress,
                    customer_number:phoneNumber,
                    account_name:accName,
                    title:nots,
                    products:basket
                }, 
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer ' +token ,
                        'Accept':"application/json"
                    }
                }).then((response) => {
                    setLoading(false)
                    if(response.data.status){     
                        dispatch(clearBasket())
                        window.location.href="orders"
                        
                    }
                    else{
                        console.log(response.data);
                        setErrSever(response.data.message)
                        setOpen(false)
                        setOpenSnackBar(true);
                    }
        
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
        <div className='total_card'>
            <Loading loading={loading} />
            <div className='mb-3'>{ t("basket.o_d") }</div>
            <div className="">
                {
                    basket.map((item)=>{
                        return(
                            <div className="flex justify-between total_card_item"> 
                                <span  > {item.name} × { item.quantity }: </span> 
                                <span>  { item.quantity * item.price} </span>   
                            </div>
                        )
                    })
                }
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
                                {
                                    allCountry.map((item)=>{
                                        return(
                                            <MenuItem value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }
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
                                
                                {
                                    allCity.map((item)=>{
                                        if(selectedCountry===0 || selectedCountry===item.country_id)
                                        return(
                                            <MenuItem value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>

                        <FormControl style={{ margin:"12px", width:"300px" }}>
                            <InputLabel id="demo-simple-select-label">{ t("basket.Address") }</InputLabel>
                            <Select
                            
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedAddress}
                                label={ t("basket.Address") }
                                error={errAddress}
                                onChange={handleChangeSelectedAddress}
                            >
                                {
                                    allAddress.map((item)=>{
                                        if(selecCity===0 || selecCity===item.city_id)
                                        return(
                                            <MenuItem value={item.id}>
                                                <p style={{ width:"100%" }} className='flex justify-between' >
                                                    <p>
                                                    {item.addresse_name +" - "  }
                                                    </p>
                                                    <p className='main_color' >
                                                        {item.delivery_price+" JOD ," + t("emp.del_price")}
                                                    </p>
                                                </p>
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                        <br/><br/>
                        <div>
                        { t("basket.cus_info_input") }
                        </div>
                        <TextField style={{ margin:"12px", width:"300px" }} variant="outlined" helperText={ t("auth.name_t") } error={errName} onChange={changeName} value={name}  label={ t("auth.name") }  />
                        <TextField style={{ margin:"12px", width:"300px" }} variant="outlined" helperText={ t("auth.The platform or store you used to sell the order") } error={errAccName} onChange={changeAccName} value={accName}  label={ t("auth.Your online platform") }  />
                        <div style={{ marginTop:"12px", width:"300px" }} className='auth_item' dir='ltr' >
                            <PhoneInput
                                onlyCountries={["jo"]}
                                country={"jo"}
                                    style={{ color:"gray", width:"300px" }}
                                value={phoneNumber}
                                onChange={phone => setPhoneNumber( phone )}
                            />
                            
                        </div>
                        <InputLabel style={{ width:"300px" }} align="start">{ " رقم العميل " }</InputLabel>
                        <TextField style={{ margin:"12px", width:"300px" }} multiline minRows={2} variant="outlined" helperText={ t("auth.name_t") }  onChange={(e)=>setNots(e.target.value)} value={nots}  label={ t("ملاحظاتك") }  />
                        <InputLabel id="demo-simple-select-label">{ " إيمكنك ترك ملاحظةلنا إذا أردت " }</InputLabel>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button  onClick={handleClose} className='btn app_button_1 text-lg mx-2'>{ t("basket.no") }</button>
                    <button onClick={()=>Send()}  className='btn app_button_1 text-lg mx-2'>{ t("basket.ok") }</button>
                </DialogActions>
            </Dialog>
            <Snackbar

            open={openSnackBar}
            autoHideDuration={4000}
            onClose={handleCloseSnackBar}
            message= { t("emp.no_added") }
            />
        </div>
    )
}