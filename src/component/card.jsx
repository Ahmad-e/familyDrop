import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import { Link } from 'react-router-dom';


export default function ProductCard(props) {
    return (
    <Card className='m-2 position-relative card' sx={{width: 270}} style={{height: "700px"}}>
        <CardContent>
        <div className='text-start'>
            <h1>Potatto chees</h1>
            <span className='text-secondary type'>frozen</span>
        </div>
        </CardContent>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.image}
        width="100%"
        />
        <CardContent>
        <Typography className='d-flex justify-content-between' gutterBottom variant="h5" component="div">
            <div>
                <p className='text-secondary'>total</p>
                <span>{props.total}$</span>
            </div>
            <div>
                <p className='text-secondary'>suggestion</p>
                <span>{props.sugg}$</span>
            </div>
        </Typography>
        <Typography className='mt-3 mb-4' variant="body2" sx={{ color: 'text.secondary',maxHeight: "80px",overflow: "hidden" }}>
            {props.disc}
        </Typography>
        </CardContent>
        <CardActions className='position-absolute bottom-0 d-flex flex-column text-center w-100'>
        <button onClick={()=>window.location.href=`/marketer/productInfo/${props.id}`} className='btn nav_link nav-link' size="small">
            More details 
        </button>

        <button className='btn mb-2  mt-3 app_button_2' size="small">
            <LocalGroceryStoreRoundedIcon/> Add to cart
        </button>
        </CardActions>
    </Card>
);
}
