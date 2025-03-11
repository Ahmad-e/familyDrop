import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


export default function CustomizedTables(props) {

  const { t } = useTranslation();
  return (
    <Container>
        <Row className='flex justify-center'> 
            <Col lg={10} md={12}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="customized table">
                        {/* <caption>
                          <button   className='btn app_button_1 text-lg mx-2'>{ t("orders.o_cancel") }</button>
                        </caption> */}
                        <TableHead>
                            <TableRow>
                            <StyledTableCell align="center">code</StyledTableCell>
                                <StyledTableCell align="center">{ t("orders.p_name") }</StyledTableCell>
                                <StyledTableCell align="center">{ t("orders.color") }</StyledTableCell>
                                <StyledTableCell align="center">{ t("orders.size") }</StyledTableCell>
                                <StyledTableCell align="center">{ t("orders.p_quantity") }</StyledTableCell>
                                <StyledTableCell align="center">{ t("orders.p_salling") }</StyledTableCell>
                                <StyledTableCell align="center"> { t("orders.p_source") } </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.product.map((row) => (
                              <StyledTableRow key={row.id}>
                                <StyledTableCell align="center">FD_{row.product_id}</StyledTableCell>
                                <StyledTableCell align="center">{row.product_name}</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor:row.code}} align="center">{row.color}</StyledTableCell>
                                <StyledTableCell align="center">{row.size}</StyledTableCell>
                                <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                <StyledTableCell align="center">{row.selling_price}</StyledTableCell>
                                <StyledTableCell align="center">{row.cost_price}</StyledTableCell>
                              </StyledTableRow>
                          ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <OrderMessagess id={props.id} messages={props.tags}  />
        </Row>
    </Container>
    
  );
}