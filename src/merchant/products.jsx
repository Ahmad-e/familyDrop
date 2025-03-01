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

import AddWithdrawalOrder from './addWithdrawalOrder';

import axios from "axios";
import Loading from '../component/loading'
import Register from '../admin/components/register'
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


export default function Products(){
    const { t } = useTranslation();

    
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const user_id = useSelector(state=>state.id);
    
    const [loading, setLoading] = React.useState(false);

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


    return(

        <Container>
             <Loading loading={loading} />
            <Row className='flex justify-center'> 
                <Col lg={11} md={12} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 650  }} aria-label="customized table">
                            <caption className='text-center'>
                                <span>{ t("merchant.tt_1") }</span>
                                <a href='/merchant/orders' className='app-link' > { t("merchant.add_product") } </a>
                            </caption>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("basket.p_img") }</StyledTableCell>
                                    <StyledTableCell align="center">code</StyledTableCell>
                                    <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.p_desc") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.all_quant") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.s_quant") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.eq_quant") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("merchant.salary") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("merchant.button") }</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => {
                                if(row.owner_id===parseInt(user_id))
                                return(<StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img src={row.images_array[0]} className='product_img' />
                                        </div>    
                                    </StyledTableCell>
                                    <StyledTableCell align="center">  FD-{row.id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.disc}</StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity + row.sales}</StyledTableCell>
                                    <StyledTableCell align="center">{row.sales}</StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity} </StyledTableCell>
                                    <StyledTableCell align="center"> {row.cost_price}JOD  </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <AddWithdrawalOrder p_id={row.id} quantity={row.quantity}  />
                                    </StyledTableCell>
                                </StyledTableRow>)
                            })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    )
}