import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { IconButton } from '@mui/material';

import URL from '../images/images/test2.jpg'

import AddProducts from './components/addProduct'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

import axios from "axios";
import Loading from '../component/loading'
import { rowHeightWarning } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

  


export default function Products(){
    const { t } = useTranslation();
    const language = useSelector((state) => state.language);
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    
    const [loading, setLoading] = React.useState(false);


    const [open, setOpen] = React.useState(false);


  const [data, setData]=React.useState([]);
  const [types, setTypes]=React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        axios.get(url+"showProducts",
            {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
            })
            .then((response) => {
                console.log(response.data)
                setData(response.data.products)
                setTypes(response.data.products_types)
                setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
    }, []);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


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
        if(!( errors.name || errors.desc ||  errors.longDesc || errors.salary || errors.suggestedSalary  || errors.quantity  ||  errors.rate )){
            
        }
        //console.log([name ,desc , longDesc , salary, suggestedSalary , quantuty , rate])
    }

    const [img, setImg]=React.useState(null);
    const [video, setVideo]=React.useState(null);




    return(

        <Container>
            <Loading loading={loading} />
            <Row className='flex justify-center'> 
              <Col lg={12} md={12} sm={12}>
                <AddProducts  />
              </Col>
                <Col lg={12} md={12} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 600  }} aria-label="customized table">
                            <caption className='text-center'>
                                
                            </caption>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("basket.p_img") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                    <StyledTableCell align="center"> فيديو توضيحي </StyledTableCell>
                                    <StyledTableCell align="center"> وصف المنتج </StyledTableCell>
                                    <StyledTableCell align="center"> سعر الجملة </StyledTableCell>
                                    <StyledTableCell align="center"> السعر المقترح </StyledTableCell>
                                    <StyledTableCell align="center"> نسبة الربح المسموحة </StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.all_quant") }</StyledTableCell>
                                    <StyledTableCell align="center">{ "كمية المبيعات" }</StyledTableCell>
                                    
                                    <StyledTableCell align="center"> بيانات المالك </StyledTableCell>
                                    <StyledTableCell align="center"> حذف </StyledTableCell>
                                    <StyledTableCell align="center"> تعديل </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img src={URL} className='product_img' />
                                        </div>    
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center"> link </StyledTableCell>
                                    <StyledTableCell align="center"> {row.disc} </StyledTableCell>
                                    <StyledTableCell align="center">{row.cost_price}</StyledTableCell>
                                    <StyledTableCell align="center">{row.cost_price+(row.cost_price * (row.profit_rate/50))}</StyledTableCell>
                                    <StyledTableCell align="center">{row.profit_rate} % </StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                    <StyledTableCell align="center">{row.sales}</StyledTableCell>
                                    <StyledTableCell align="center">
                                    <button className='btn app_button_1' > عرض البيانات </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                    <button className='btn app_button_1' > حذف </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                    <button onClick={()=>handleClickOpen()} className='btn app_button_1' >  تعديل </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle> change product data  </DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <Col  className="add_item">
                      <TextField value={name} onChange={ChangeName} error={errors.name} fullWidth label="name of product" variant="outlined" />
                    </Col>
                    <Col  className="add_item">
                        <TextField value={desc} onChange={ChangeDesc} error={errors.desc} fullWidth multiline minRows={2} maxRows={3} label="description" variant="outlined" />
                    </Col>
                    <Col  className="add_item">
                        <TextField value={longDesc} onChange={ChangeLongDesc} error={errors.longDesc} fullWidth multiline  minRows={2} maxRows={4}  label="long description" variant="outlined" />
                    </Col>

                    <Col  className="add_item">
                        <TextField value={salary} onChange={ChangeSalary} error={errors.salary} fullWidth type='number' label="salary" variant="outlined" />
                    </Col>

                    <Col  className="add_item">
                        <TextField  value={suggestedSalary} onChange={ChangeSuggestedSalary} error={errors.suggestedSalary} fullWidth type='number' label="Suggested salary" variant="outlined" />
                    </Col>

                    <Col  className="add_item">
                        <TextField  value={rate} onChange={ChangeRate} error={errors.rate} fullWidth type='number' label="نسبة الربح المسموحة" variant="outlined" />
                    </Col>

                    <Col className="add_item">
                        <TextField  value={quantuty} onChange={ChangeQuantity} error={errors.quantity} fullWidth type='number' label="quantity" variant="outlined" />
                    </Col>
                    <Col className="add_item">
                        <label for="file-upload" className='btn app_button_1  m-1 text-lg' >
                            upload product image <InsertPhotoRoundedIcon />
                        </label>
                        <input accept="image/*" id="file-upload" type="file" />
                    </Col>
                    <Col className="add_item">
                        <label for="file-upload" className='btn app_button_1  m-1 text-lg' >
                            upload product video <OndemandVideoRoundedIcon />
                        </label>
                        <input accept="video/mp4,video/x-m4v,video/*" id="file-upload" type="file" />
                    </Col>
                  
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>cancale</Button>
                <Button onClick={()=>Add_Product()}  > حفظ التعديلات </Button>
              </DialogActions>
              
            </Dialog>
        </Container>
    )
}