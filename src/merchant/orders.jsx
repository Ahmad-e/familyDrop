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

import URL from '../images/images/test2.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddOrder from './addOrder'
import axios from "axios";
import Loading from '../component/loading';
import { useSelector } from 'react-redux';


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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(' yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  


export default function Products(){
    const { t } = useTranslation();
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        axios.get(url+"showProductRequests",
            {
            headers:{
                'Content-Type': 'application/json',
                
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
            })
            .then((response) => {
                console.log(response.data)
                setData(response.data.add_product_requests)
                
                setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
    }, []);

    
    const Cansole=(id)=>{
        setLoading(true);
        axios.get(url+"deleteProductRequest/"+id,
            {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
            })
            .then((response) => {
                console.log(response.data)
                setData(response.data.add_product_requests)
                
                setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });
    }

    return(

        <Container>
            <Loading loading={loading} />
            <Row className='flex justify-center'> 
                <Col lg={9} md={8} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 500  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("basket.p_img") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.p_desc") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("orders.p_quantity") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.salary") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.address") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.state") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("orders.o_cancel") } </StyledTableCell>
                                </TableRow>
                            </TableHead> 
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img loading="auto" src={row.images_array.slice(2, -2)} className='product_img' />
                                        </div>    
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.product_name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.product_disc}</StyledTableCell>
                                    <StyledTableCell align="center">{row.product_quantity}</StyledTableCell>
                                    <StyledTableCell align="center">{row.product_price}</StyledTableCell>
                                    <StyledTableCell align="center">{row.country} - {row.city} - {row.addresse_}</StyledTableCell>
                                    <StyledTableCell  align="center">
                                    {  
                                            row.accepted===0 & row.employee_id ===null ? (t("emp.new_o")) :
                                            row.accepted===1 ? (t("emp.ok_o")):(t("emp.reject_o"))
                                        } 
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button hidden={!(row.accepted===0 && row.employee_id===null)} onClick={()=>Cansole(row.id)} className='btn app_button_1 text-lg mx-2' >{ t("orders.o_cancel") }</button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <AddOrder onAdd={(data)=>setData(data)} />
                </Col>
            </Row>
        </Container>
    )
}