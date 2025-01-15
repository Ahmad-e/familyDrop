import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { IconButton } from '@mui/material';


export default function Products(){
    const { t } = useTranslation();
    const language = useSelector((state) => state.language);
    const [open , setOpen]=React.useState(true);

    const tuggle_button =()=>{
        setOpen(!open)
    }


    const [name , setName]=React.useState('');
    const [desc, setDesc]=React.useState('');
    const [longDesc , setLongDesc]=React.useState('');
    const [salary , setSalary]=React.useState(0);
    const [suggestedSalary , setSuggestedSalary]=React.useState(0);
    const [rate , setRate]=React.useState(0);
    const [quantuty , setQuantity]=React.useState(0);


    const [errors , setErrors]=React.useState({});


    const ChangeName=(e)=>{
        setName(e.target.value)
        if(e.target.value.length<3)
            errors.name=true
        else
            errors.name=false
    }

    const ChangeDesc=(e)=>{
        setDesc(e.target.value)
        if(e.target.value.length<1)
            errors.desc=true
        else
            errors.desc=false
    }

    const ChangeLongDesc=(e)=>{
        setLongDesc(e.target.value)
        if(e.target.value.length<1)
            errors.longDesc=true
        else
            errors.longDesc=false
    }

    const ChangeSalary=(e)=>{
        setSalary(e.target.value)
        if(e.target.value<0)
            errors.salary=true
        else
            errors.salary=false
    }

    const ChangeSuggestedSalary=(e)=>{
        setSuggestedSalary(e.target.value)
        if(e.target.value<0 || e.target.value<salary )
            errors.suggestedSalary=true
        else
            errors.suggestedSalary=false
    }

    const ChangeRate=(e)=>{
        setRate(e.target.value)
        if(e.target.value<0 )
            errors.rate=true
        else
            errors.rate=false
    }

    const ChangeQuantity=(e)=>{
        setQuantity(e.target.value)
        if(e.target.value<0 )
            errors.quantity=true
        else
            errors.quantity=false
    }

    const Add_Product=()=>{
        if(name==='')
            errors.name=true
        if(desc==='')
            errors.desc=true
        if(longDesc==='')
            errors.longDesc=true 
        if(salary===0)
            errors.salary=true
        if(suggestedSalary===0)
            errors.suggestedSalary=true
        if(rate===0)
            errors.rate=true
        if(quantuty===0)
            errors.quantity=true

        setErrors({
            name:errors.name,
            desc:errors.desc,
            longDesc:errors.longDesc,
            salary:errors.salary,
            suggestedSalary:errors.suggestedSalary,
            rate:errors.rate,
            quantity:errors.quantity
        })
        if(!( errors.name || errors.desc ||  errors.longDesc || errors.salary || errors.suggestedSalary  || errors.quantity  ||  errors.rate ))
        console.log([name ,desc , longDesc , salary, suggestedSalary , quantuty , rate])
    }

    const [img, setImg]=React.useState(null);
    const [video, setVideo]=React.useState(null);



    return(
        <Row className={'add_product justify-center '+( open ? "close" : " " )}> 
            
            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField value={name} onChange={ChangeName} error={errors.name} fullWidth label="name of product" variant="outlined" />
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item">
                <TextField value={desc} onChange={ChangeDesc} error={errors.desc} fullWidth multiline minRows={2} maxRows={3} label="description" variant="outlined" />
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item">
                <TextField value={longDesc} onChange={ChangeLongDesc} error={errors.longDesc} fullWidth multiline  minRows={2} maxRows={4}  label="long description" variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField value={salary} onChange={ChangeSalary} error={errors.salary} fullWidth type='number' label="salary" variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField  value={suggestedSalary} onChange={ChangeSuggestedSalary} error={errors.suggestedSalary} fullWidth type='number' label="Suggested salary" variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField  value={rate} onChange={ChangeRate} error={errors.rate} fullWidth type='number' label="نسبة الربح المسموحة" variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField  value={quantuty} onChange={ChangeQuantity} error={errors.quantity} fullWidth type='number' label="quantity" variant="outlined" />
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item">
                <label for="file-upload" className='btn app_button_1  m-1 text-lg' >
                    upload product image <InsertPhotoRoundedIcon />
                </label>
                <input accept="image/*" id="file-upload" type="file" />
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item">
                <label for="file-upload" className='btn app_button_1  m-1 text-lg' >
                    upload product video <OndemandVideoRoundedIcon />
                </label>
                <input accept="video/mp4,video/x-m4v,video/*" id="file-upload" type="file" />
            </Col>
            <Col lg={12} sm={12} className="add_item">
                <button onClick={()=>Add_Product()} className='btn app_button_2 text-lg' >  إضافة المنتج </button>
            </Col>
            <div className={'tuggle_button '+(language==="Ar" ? ("En_tuggle_button") :(" ") )}>
                <IconButton onClick={()=>tuggle_button()} >
                    <span> Add product </span>
                    <KeyboardDoubleArrowUpIcon className={ open ? "close_icon " :" " } style={{ fontSize:"30px" }} />
                </IconButton>
            </div>

            
        </Row>
    )
}