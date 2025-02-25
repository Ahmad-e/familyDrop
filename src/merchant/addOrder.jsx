
import { useTranslation } from 'react-i18next';

import * as React from 'react';
import Slide from '@mui/material/Slide';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Loading from '../component/loading';
import { useSelector } from 'react-redux';

import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function Products({onAdd}){
    
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    
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
        setErrAddress(false)
      };
    const [errAddress, setErrAddress] = React.useState(false);
      
    const [allCountry, setAllCountry] = React.useState([]);
    const [allCity, setAlldCity] = React.useState([]);
    const [allAddress, setAlldAddress] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
    
        axios.get(url+"showLocations",
            {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
            })
            .then((response) => {
                //console.log(response.data)
                setAllCountry(response.data.countries);
                setAlldAddress(response.data.addresses);
                setAlldCity(response.data.cities)
            })
            .catch((error) =>{ 
                console.log(error);
             });
    }, []);

    const [name, setName] = React.useState('');
    const [errName, setErrName] = React.useState(false);
    const changeName=(e)=>{
        setName(e.target.value);
        if(e.target.value.length<3)
            setErrName(true)
        else
            setErrName(false)
    }

    const [desc, setDesc]=React.useState('');
    const [errDesc, setErrDesc] = React.useState(false);
    const ChangeDesc=(e)=>{
        setDesc(e.target.value)
        if(e.target.value.length<1)
            setErrDesc(true)
        else
            setErrDesc(false)
    }

    const [salary, setSalary]=React.useState(0);
    const [errSalary, setErrSalary] = React.useState(false);
    const ChangeSalary=(e)=>{
        setSalary(e.target.value)
        if(e.target.value.length<1)
            setErrSalary(true)
        else
            setErrSalary(false)
    }

    const [quantity, setQuantity]=React.useState(0);
    const [errQuantity, setErrQuantity] = React.useState(false);
    const ChangeQuantity=(e)=>{
        setQuantity(e.target.value)
        if(e.target.value.length<1)
            setErrQuantity(true)
        else
            setErrQuantity(false)
    }

    const [img, setImg]=React.useState(null);

    const handleFileChange = (event) => {
        
        const files = Array.from(event.target.files);
        setImg(files);
        console.log("img")
    
    };
    

    const AddReq = () => {
        
        if(name==='')
            setErrName(true)
        if(desc==='')
            setErrDesc(true)
        
        if(salary===0)
            setErrSalary(true)
        if(quantity===0)
            setErrQuantity(true);
        if(selectedAddress===0)
            setErrAddress(true)

         if(name!=="" && salary>0 && quantity>0 && selectedAddress!==0 ){
            var form = new FormData();
            
            form.append('product_name', name);
            form.append('addresse_id', selectedAddress);
            form.append('product_disc', desc);
            form.append('product_price', salary );
            form.append('product_quantity', quantity);
            
            if(img!==null){
                [...img].forEach((img) => {
                    form.append('images_array[]', img);
                  });
            }
                //form.append('images_array', img);

            setLoading(true)

            try {
                const response = axios.post(url+'addProductRequest',
                form,
                {
                    headers:{
                        'Content-Type': 'multipart/form-data',
                        'Authorization' : 'Bearer ' +token ,
                        'Accept':"application/json"
                    }
                }
                ).then((response) => {
                    setLoading(false)
                    //console.log(response.data)
                    onAdd(response.data.add_product_requests)
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
            } catch (e) {
                throw e;
            }
        }
      };


    return(
        <div className='total_card' style={{ backgroundColor:"#63636300" }}>
            <Loading loading={loading} />
            <div className='mb-3 text-2xl'>{ t("merchant.t_1") }</div>
            <div id="alert-dialog-slide-description">
                <div>
                { t("merchant.t_2") }
                </div>
                        <FormControl className='my-2' fullWidth >
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

                        <FormControl className='my-2' fullWidth >
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

                        <FormControl className='my-2' fullWidth >
                            <InputLabel id="demo-simple-select-label">{ t("basket.Address") }</InputLabel>
                            <Select
                            
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedAddress}
                                label={ t("basket.Address") }
                                onChange={handleChangeSelectedAddress}
                                error={errAddress}
                            >
                                {
                                    allAddress.map((item)=>{
                                        if(selecCity===0 || selecCity===item.city_id)
                                        return(
                                            <MenuItem value={item.id}>{item.addresse_name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                        <br/><br/>
                        <div>
                        { t("merchant.t_3") }
                    </div>
                    <TextField fullWidth className='my-2' variant="outlined"  error={errName} onChange={changeName} value={name}  label={ t("orders.p_name") }  />
                    <TextField multiline fullWidth className='my-2' variant="outlined" error={errDesc} onChange={ChangeDesc} value={desc}  label={ t("emp.p_desc") }  />
                    <TextField type='number' error={errSalary} onChange={ChangeSalary} value={salary} fullWidth className='my-2' variant="outlined" label={ t("basket.salary") }  />
                    <TextField type='number' error={errQuantity} onChange={ChangeQuantity} value={quantity} fullWidth className='my-2' variant="outlined" label={ t("basket.quan") }  />
                    <div className="add_item">
                        <label required  for="img-upload"  className='btn app_button_1  m-1 text-lg' >
                        { t("emp.img") }<InsertPhotoRoundedIcon />
                        </label>
                        <input onChange={handleFileChange} accept="image/*" id="img-upload"  type="file" />
                    </div>
                    <div className="">
                        <button onClick={()=>AddReq()} className='btn app_button_2 text-lg m-2' >{ t("merchant.Add_order") }</button>
                    </div>
            </div>
        </div>
    )
}