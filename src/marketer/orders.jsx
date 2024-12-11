import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Container from 'react-bootstrap/Container';
import Row_c from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useTranslation } from 'react-i18next';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  
  const { t } = useTranslation();
  return (
      <TableRow  sx={{ '& > *': { borderBottom: 'unset' }   }}>
        <TableCell align="center" >1</TableCell>
        <TableCell align="center" component="th" scope="row">
          2024/1/24
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">
            <button onClick={()=>window.location.href="order/1" } className='btn app_button_1 text-lg'>{ t("orders.o_pr") }</button>    
        </TableCell>
      </TableRow>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {

    const { t } = useTranslation();


  return (
    <Container>
        <Row_c>
            <Col>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{ t("orders.o_n") } </TableCell>
                            <TableCell align="center">{ t("orders.o_date") }</TableCell>
                            <TableCell align="center">{ t("orders.O_user_name") }</TableCell>
                            <TableCell align="center">{ t("orders.o_address") }</TableCell>
                            <TableCell align="center">{ t("orders.o_state") }</TableCell>
                            <TableCell align="center">{ t("orders.o_p_quantity") }</TableCell>
                            <TableCell align="center">{ t("orders.o_s_price") }</TableCell>
                            <TableCell align="center">{ t("orders.o_profit") }</TableCell>
                            <TableCell align="center">{ t("orders.o_pr") }</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Col>
        </Row_c>
    </Container>
    
  );
}