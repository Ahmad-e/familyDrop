import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../store";
import axios from "axios";
import Loading from '../component/loading'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useTranslation } from 'react-i18next';

import TotalCard from '../component/totalCard'
import Err from '../errors/err404_basket'

export default function SportsBasketball(){
    
    const { t } = useTranslation();
    const url = useSelector(state=>state.apiURL);
    const basket = useSelector(state=>state.basket);
    const dispatch = useDispatch();
    const {addProduct,deleteProduct,deleteFullProduct,clearBasket,ChangeProduct} = modeActions;



    const token = useSelector(state => state.token); 
    const [load,setLoad] = React.useState(false);
    const [rate,setRate] = React.useState(0);
    React.useEffect(()=>{
        setLoad(true);
        axios.get(url+"showSettings",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            console.log(res.data);
            setRate(res.data.settings[0].value)
            setLoad(false);
        }).catch(err => {
            console.log(err);
            setLoad(false);
        })
    },[])
    console.log(basket)

    const addToProduct=(data)=>{
        var n_product = 
        {
            id:data.id,
            name:data.name,
            desc:data.desc,
            cost_price:data.cost_price,
            img_url:data.img_url,
            rate:data.rate,
            color_id:data.color_id,
            size_id:data.size_id,
            price:data.price,
            quantity:1
        }
        console.log(n_product)
        dispatch(addProduct(n_product));
    }

    const ChangePriceProduct=(data,price)=>{
        if(price>0){
            var n_product = 
            {
                id:data.id,
                name:data.name,
                desc:data.desc,
                cost_price:data.cost_price,
                img_url:data.img_url,
                rate:data.rate,
                color_id:data.color_id,
                size_id:data.size_id,
                price:price,
                quantity:data.quantity
            }
            //console.log(n_product)
            dispatch(ChangeProduct(n_product))
        }
        
    }

    if(basket.length===0)
        return(<Err/>)


    
    return(
        <Container>
            <Loading loading={load} />
            <Row className='mt-3'>
                <Col lg={9} md={8} sm={12} className='p-3'>
                    <TableContainer 
                        style={{ 
                            backgroundColor:"#6363631f" ,
                            borderRadius:"20px" , 
                            backgroundImage:"none",
                            boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
                            }} 
                        component={Paper}
                    >
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"> { t("basket.delete") } </TableCell>
                                    <TableCell align="center">{ t("basket.p_img") }</TableCell>
                                    <TableCell align="center"> code </TableCell>
                                    <TableCell align="center">{ t("basket.p_name") }</TableCell>
                                    <TableCell align="center">{ t("basket.min_s") }</TableCell>
                                    <TableCell align="center">{ t("basket.salary") }</TableCell>
                                    <TableCell align="center">{ t("basket.rate") }</TableCell>
                                    <TableCell align="center">{ t("basket.profits") }</TableCell>
                                    <TableCell align="center">{ t("basket.quan") }</TableCell>
                                    <TableCell align="center">{ t("basket.t_s") }</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {basket.map((row,index) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center">
                                        <IconButton onClick={()=>dispatch(deleteFullProduct(index))} className='delete_button'>
                                            <DeleteForeverRoundedIcon style={{ fontSize:"33px", transition:"all .3s ease-in-out"  }} />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className='flex justify-center'>
                                            <img src={row.img_url} className='product_img' />
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                      FD_{row.id}    
                                    </TableCell>
                                    <TableCell align="center">
                                    {row.name}    
                                    </TableCell>
                                    <TableCell align="center">
                                        {( row.cost_price*(row.rate/100) + row.cost_price )}
                                    </TableCell>
                                    
                                    <TableCell align="center">
                                        <TextField defaultValue={row.price} onChange={(e)=>ChangePriceProduct(row,e.target.value)} error={row.price<( row.cost_price*(row.rate/100) + row.cost_price )} sx={{ width:"100px"  }} type='number' id="outlined-basic" variant="outlined" />  
                                    </TableCell>
                                    <TableCell align="center">
                                        {rate} % 
                                    </TableCell>
                                    <TableCell align="center">
                                        {((row.price - row.cost_price)* row.quantity) * (rate/100) }
                                    </TableCell>
                                    
                                    <TableCell align="center">
                                        <div className='flex'>
                                            <button onClick={()=>dispatch(deleteProduct(row.id))}  className='btn app_button_1 text-xl mx-2'>-</button>
                                            <TextField value={row.quantity}  disabled sx={{ width:"63px" , textAlign:"center"  }} type='number' id="outlined-basic" variant="outlined" /> 
                                            <button onClick={()=>addToProduct(row)} className='btn app_button_1 text-lg mx-2'>+</button> 
                                        </div>

                                    </TableCell>
                                    <TableCell align="center">
                                        {row.quantity * row.price}
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </Col>
                <Col lg={3} md={4} sm={12} className='p-3' >
                    <TotalCard />
                </Col>
            </Row>
        </Container>
    )
}