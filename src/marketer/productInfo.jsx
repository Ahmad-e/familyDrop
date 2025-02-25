import { Container } from "react-bootstrap";
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import * as React from 'react';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { MenuItem, TextField } from "@mui/material";
import { use } from "i18next";
import axios from "axios";
import Loading from '../component/loading'
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../store";
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
function ProductInfo(){
    const data = {
        "id": 3,
        "name": "red blue",
        "disc": "test colors",
        "long_disc": null,
        "type_id": 3,
        "type_name": "Tables",
        "owner_id": 2,
        "owner_name": "Admin",
        "images_array": [],
        "cost_price": 100,
        "selling_price": 140,
        "quantity": 123,
        "profit_rate": 20,
        "blocked": 0,
        "created_at": "2025-02-06T10:05:31.000000Z",
        "updated_at": "2025-02-06T10:05:31.000000Z",
        "sizes": [
        ],
        "colors": [
        ]
    }

    const url = useSelector(state=>state.apiURL);
    const [loading, setLoading] = useState(false);
    const token = useSelector(state=>state.token);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {addProduct} = modeActions;
    var id= useParams()

    const [type,setType] = useState(0);
    const [open,setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  

    const [selectedColor,setSelectedColor] = useState(0);
    const [selectedSize,setSelectedSizes] = useState(0);
    const [pData, setPData] = React.useState(data);
    React.useEffect(() => {
        setLoading(true);
        axios.get(url+"showProductInfo/"+id.id,
            {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
            })
            .then((response) => {
                setPData(response.data.product[0])
                console.log(response.data.product[0])
                setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
  }, []);


    const addToCard=()=>{
        dispatch(addProduct(
            {
                id:pData.id,
                name:pData.name,
                desc:pData.disc,
                cost_price:pData.cost_price,
                img_url:pData.images_array[0],
                rate:pData.profit_rate,
                color_id:selectedColor,
                size_id:selectedSize,
                price:pData.selling_price,
                quantity:1
            }
        ))
    }
    return(
        <div className="productInfo my-4 d-flex flex-column align-items-center justify-content-center">
            <Container className="d-flex flex-column-reverse flex-md-row rounded shadow align-items-center justify-content-between">
                <div className="w-md-50 w-100 text-md-start text-center">
                    <div className="ps-3">
                        <h1 className="my-4 productName">{pData.name}</h1>
                        <span className="text-secondary mt-2 d-lg-block pb-4 mb-4 border-bottom">{pData.type_name}</span> 
                        <div>
                            <span className='text-secondary'>Total price : </span>
                            <span className="ps-2 price position-relative">{pData.cost_price} <span className="text-secondary">JOD</span></span>
                        </div>
                        <div className="pt-2 mb-3">
                            <span className='text-secondary'>Suggestion price : </span>
                            <span className="ps-2 price position-relative">{pData.selling_price} <span className="text-secondary align-self-start">JOD</span></span>
                        </div>
                        <div className="sizes">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Sizes"
                            defaultValue=""
                            className='w-50 my-4 text-secondary'
                            value={type}
                            onChange={(e)=>setSelectedSizes(e.target.value)}
                        >
                        {/* <option disabled value="">Sizes</option> */}
                        {pData.sizes.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.size_name}
                            </MenuItem>
                        ))}
                        </TextField>
                        </div>
                        <div className="sizes">
                            <h3 className="text-secondary">Colors :</h3>
                            {
                                pData.colors.map((item)=>{
                                    return(
                                        <button onClick={()=>setSelectedColor(item.id)} style={{backgroundColor: item.code }} className="color"> </button>
                                    )
                                })
                            }
                        </div>
                        <div>
                        </div>
                        <div className="discription mt-4">
                            <h4 className="text-secondary">Description</h4>
                            {pData.long_disc} 
                        </div>
                        <button onClick={()=>addToCard()} className="btn app_button_2 w-100 mt-5" size="small"><LocalGroceryStoreRoundedIcon/> Add to cart</button>
                        {/* <button onClick={handleClickOpen} className="m-auto d-block video py-3"><span className="main_color">Click here</span> to show video</button> */}
                    </div>
                </div>
                <div className="w-md-50 w-100 p-2 d-flex align-items-center justify-content-center">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            pData.images_array.map((img)=>(
                                <Carousel.Item>
                                    <img className="rounded" width={"500px"} src={img} alt=""/>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"The video"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <video src={require("../images/images/1 Introduction To React With Redux [تعلم ال redux] [شرح redux toolkit] [شرح redux](720P_HD).mp4")} controls />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    )
}
export default ProductInfo;