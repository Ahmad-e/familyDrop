import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export default function ProductCard(props) {
      const { t } = useTranslation();
    
    return (
    <Card className='m-2' >
        <CardContent>
            <div className='text-start'>
                <h1>{props.name}</h1>
                <span className='text-secondary type'>{props.type}</span>
            </div>
        </CardContent>
        <CardMedia
        component="img"
        alt="green iguana"
        sx={{ height:"200px" }}
        image={props.image}
        width="100%"
        />
        <CardContent>
        <Typography className='d-flex justify-content-between mb-1' gutterBottom variant="h5" component="div">
            <div>
                <p className='text-secondary'>{ t("card.cost_price") }</p>
                <span>{props.cost_price} JOD</span>
            </div>
            <div>
                <p className='text-secondary'>{ t("card.selling_price") }</p>
                <span>{props.selling_price} JOD</span>
            </div>
        </Typography>
        <Typography className='mt-1 mb-1' variant="body2" sx={{ color: 'text.secondary',maxHeight: "80px",overflow: "hidden" }}>
            {props.disc}
        </Typography>
        </CardContent>
        
        {/* <button onClick={()=>window.location.href=`/marketer/productInfo/${props.id}`} className='btn nav_link nav-link m-auto' size="small">
        { t("card.m_d") }
        </button> */}
        <CardContent>
            <button onClick={()=>window.location.href=`/marketer/productInfo/${props.id}`} className='btn mb-1  mt-1 app_button_2'>
                <LocalGroceryStoreRoundedIcon/> { t("card.a_c") }
            </button>
        </CardContent>
    </Card>
);
}
