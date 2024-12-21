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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  


export default function Products(){
    const { t } = useTranslation();
    return(

        <Container>
            <Row className='flex justify-center'> 
                <Col lg={11} md={12} sm={12}>
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
                                    <StyledTableCell align="center">{ t("merchant.salary") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.all_quant") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("merchant.salary") }</StyledTableCell>
                                    
                                    
                                    <StyledTableCell align="center"> بيانات المالك </StyledTableCell>
                                    <StyledTableCell align="center"> حذف </StyledTableCell>
                                    <StyledTableCell align="center"> تعديل </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img src={URL} className='product_img' />
                                        </div>    
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center"> link </StyledTableCell>
                                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="center">0</StyledTableCell>
                                    <StyledTableCell align="center">{row.carbs} </StyledTableCell>
                                    <StyledTableCell align="center"> 90$  </StyledTableCell>
                                    <StyledTableCell align="center">
                                    <button className='btn app_button_1 text-lg mx-2' > حذف </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                    <button  className='btn app_button_1 text-lg mx-2' >  تعديل </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    )
}