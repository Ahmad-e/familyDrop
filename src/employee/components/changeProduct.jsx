import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import Loading from '../../component/loading'


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { IconButton } from '@mui/material';


import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




export default function FullScreenDialog( props ) {
    
    const [id, setId] = React.useState(0);
    const handleClickOpen = () => {
        setOpen(true);
        setId(props.product.id)
        setName(props.product.name)
        setDesc(props.product.disc)
        setLongDesc(props.product.long_disc)
        setSelectedType(props.product.type_id)
        setSourceSalary(props.product.cost_price)
        setSuggestedSalary(props.product.selling_price)
        setRate(props.product.profit_rate)
        setQuantity(props.product.quantity)
    };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();
    const language = useSelector((state) => state.language);
    const [open , setOpen]=React.useState(false);

    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);



    const [types, setTypes] = React.useState(props.types);

    const [colors, setColors] = React.useState(props.colors);
    const [sizes, setSizes] = React.useState(props.sizes);



    const theme = useTheme();
    const [selectedSizes, setSelectedSizes] = React.useState([]);
  
    const handleChangeSelectedSizes = (event) => {
      const {
        target: { value },
      } = event;
      setSelectedSizes(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };


    const [selectedColors, setSelectedColors] = React.useState([]);
  
    const handleChangeSelectedColors = (event) => {
      
      const {
        target: { value },
      } = event;
      setSelectedColors(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };


    const [name , setName]=React.useState('');
    const [desc, setDesc]=React.useState('');
    const [longDesc , setLongDesc]=React.useState('');
    const [sourceSalary , setSourceSalary]=React.useState(0);
    const [suggestedSalary , setSuggestedSalary]=React.useState(0);
    const [rate , setRate]=React.useState(0);
    const [quantuty , setQuantity]=React.useState(0);
    const [selectedType , setSelectedType]=React.useState(0);



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


    const ChangeSourceSalary=(e)=>{
        setSourceSalary(e.target.value)
        if(e.target.value<0)
            errors.sourceSalary=true
        else
            errors.sourceSalary=false
    }


    const ChangeSuggestedSalary=(e)=>{
        setSuggestedSalary(e.target.value)
        if(e.target.value<0 || e.target.value<parseInt(sourceSalary) )
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

    const ChangeSelectedType=(e)=>{
        setSelectedType(e.target.value)
    }

    const [img, setImg]=React.useState(null);
    
    const handleFileChangeToChange = (event) => {
        const files = Array.from(event.target.files);
        setImg(files);
        console.log(files)
    };

    const [video, setVideo]=React.useState("");
    const handleVideoChange = (event) => {  
        console.log("start uploading")
        const files = (event.target.files[0]);

        var form = new FormData();
        form.append('file',files );
        setLoading(true)

        try {
            const response = axios.post(url+'uploadVideo',
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
                setVideo(response.data.url)
                console.log(response.data)
                
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            });
        } catch (e) {
            throw e;
        }
};

    // console.log(token)

    const Add_Product=()=>{
        if(name==='')
            errors.name=true
        if(desc==='')
            errors.desc=true
        if(longDesc==='')
            errors.longDesc=true 
        if(sourceSalary===0)
            errors.sourceSalary=true
        if(suggestedSalary===0)
            errors.suggestedSalary=true
        if(rate===0)
            errors.rate=true
        if(quantuty===0)
            errors.quantity=true
        if(selectedType===0)
            errors.selectedType=true


        setErrors({
            name:errors.name,
            desc:errors.desc,
            longDesc:errors.longDesc,
            selectedType:errors.selectedType,
            suggestedSalary:errors.suggestedSalary,
            rate:errors.rate,
            quantity:errors.quantity,
            sourceSalary:errors.sourceSalary
        })

        var colorArr = selectedColors.map(item => item.id)
        var sizeArr = selectedSizes.map(item => item.id)
        
        colorArr = JSON.stringify(colorArr);
        sizeArr = JSON.stringify(sizeArr);

        // console.log("selectedColors",selectedColors)
        // console.log("selectedSizes",selectedSizes)

        // console.log("colors",colors)
        // console.log("sizes",sizes)

        if(!( errors.name || errors.desc || errors.suggestedSalary  || errors.quantity  ||  errors.rate  )){
            var form = new FormData();
            form.append('id', id);
            form.append('name', name);
            form.append('type_id', selectedType);
            form.append('disc', desc);
            form.append('long_disc', longDesc);
            form.append('cost_price', sourceSalary );
            form.append('quantity', quantuty);
            form.append('sales', 0);
            form.append('selling_price', suggestedSalary);
            form.append('profit_rate', rate);
            
            if(sizeArr!=='[]')
                form.append('sizes', colorArr);
            if(colorArr!=='[]')
                form.append('colors', sizeArr);

            if(img!==null){
                [...img].forEach((img) => {
                    form.append('images_array[]', img);
                  });
                  console.log("img changed")
            }

            
                form.append('video_url', video);

            setLoading(true)

            try {
                const response = axios.post(url+'editProduct',
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
                    console.log(response.data)
                    props.onChange(response.data.products)
                    setOpen(false)
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
            } catch (e) {
                throw e;
            }
        }
        
    }


  return (
    <React.Fragment>
        <Loading loading={loading} />
      <button onClick={()=>handleClickOpen()} className='btn app_button_1' >  { t("emp.change") } </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            
            <Button autoFocus color="inherit" onClick={handleClose}>
            { t("emp.cancle") }
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
        <Row className={' justify-center '}> 
            <Loading loading={loading} />
            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField value={name} onChange={ChangeName} error={errors.name} fullWidth label={ t("emp.p_name") } variant="outlined" />
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item">
                <TextField value={desc} onChange={ChangeDesc} error={errors.desc} fullWidth multiline minRows={2} maxRows={3} label={ t("emp.p_desc") } variant="outlined" />
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item">
                <TextField value={longDesc} onChange={ChangeLongDesc} error={errors.longDesc} fullWidth multiline  minRows={2} maxRows={4}  label={ t("emp.long_desc") } variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField value={sourceSalary} onChange={ChangeSourceSalary} error={errors.salary} fullWidth type='number' label={ t("emp.c_price") } variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField  value={suggestedSalary} onChange={ChangeSuggestedSalary} error={errors.suggestedSalary} fullWidth type='number' label={ t("emp.salling") } variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField  value={rate} onChange={ChangeRate} error={errors.rate} fullWidth type='number' label={ t("emp.rate") } variant="outlined" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="add_item">
                <TextField  value={quantuty} onChange={ChangeQuantity} error={errors.quantity} fullWidth type='number' label={ t("emp.quan") } variant="outlined" />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12} >
                <FormControl fullWidth style={{ margin:" 15px  0px"  }}  className='auth_item' dir='ltr' >
                    <InputLabel id="demo-simple-select-label">{ t("basket.type") }</InputLabel>
                    <Select
                        error={errors.selectedType}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedType}
                        label={ t("basket.type") }
                        onChange={ChangeSelectedType}
                    >
                        {
                            types.map((item)=>{
                                return(
                                    <MenuItem value={item.id}>{item.name}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12} >
                <FormControl sx={{ margin: "12px 0px" }} fullWidth>
                    <InputLabel id="demo-multiple-chip-label">{ t("emp.size") }</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectedSizes}
                    onChange={handleChangeSelectedSizes}
                    input={<OutlinedInput id="select-multiple-chip" label={ t("emp.size") } />}
                    renderValue={(selected) => (
                        <Box >
                        {selected.map((value) => (
                            <Chip key={value.id} label={value.name} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {sizes.map((name) => (
                        <MenuItem
                        key={name.id}
                        value={name}
                        style={getStyles(name, selectedSizes, theme)}
                        >
                        {name.name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12} >
                <FormControl sx={{ margin: "12px 0px" }} fullWidth>
                    <InputLabel id="demo-multiple-chip-label">{ t("emp.color") } </InputLabel>
                    <Select
                    
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectedColors}
                    onChange={handleChangeSelectedColors}
                    input={<OutlinedInput id="select-multiple-chip" label={ t("emp.color") }/>}
                    renderValue={(selected) => (
                        <Box >
                        {selected.map((value) => (
                            <Chip key={value.id} label={value.name} sx={{ backgroundColor:value.code }} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {colors.map((name) => (
                        <MenuItem
                        sx={{ color:name.code }}
                        key={name.id}
                        value={name}
                        style={getStyles(name, selectedColors, theme)}
                        >
                        {name.name} 
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item">
                <label required multiple  for="img-upload-change"  className='btn app_button_1  m-1 text-lg' >
                { t("emp.p_img") } <InsertPhotoRoundedIcon />
                </label>
                <input onChange={handleFileChangeToChange} accept="image/*" id="img-upload-change" multiple type="file" />
            </Col>
            <Col lg={4} md={6} sm={12} className="add_item  text-center">
                <label for="file-upload-to-change" className='btn app_button_1  m-1 text-lg' >
                { t("emp.vid") } <OndemandVideoRoundedIcon />
                </label>
                <input onChange={handleVideoChange} accept="video/mp4,video/x-m4v,video/*" id="file-upload-to-change" type="file" />
            </Col>
            <Col lg={12} sm={12} className="add_item text-center">
                <button onClick={()=>Add_Product()} className='btn app_button_2 text-lg' >{ t("emp.save") }</button>
            </Col>
        </Row>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}