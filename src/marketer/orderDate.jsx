import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useParams } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import OrderMessagess from './orderMessages'
import { useTranslation } from 'react-i18next';


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

export default function CustomizedTables() {
    let { id } = useParams();
    console.log(id)  

    const { t } = useTranslation();
  return (
    <Container>
        <Row className='flex justify-center'> 
            <Col lg={10} md={12}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="customized table">
                        <caption>
                          <button   className='btn app_button_1 text-lg mx-2'>{ t("orders.o_cancel") }</button>
                        </caption>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                <StyledTableCell align="center">{ t("orders.p_quantity") }</StyledTableCell>
                                <StyledTableCell align="center">{ t("orders.p_salling") }</StyledTableCell>
                                <StyledTableCell align="center"> { t("orders.p_source") } </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                              <StyledTableRow key={row.id}>
                              <StyledTableCell align="center">{row.name}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center">{row.protein}</StyledTableCell>
                              </StyledTableRow>
                          ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <OrderMessagess  />
        </Row>
    </Container>
    
  );
}