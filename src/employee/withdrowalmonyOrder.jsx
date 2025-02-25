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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserInfo from './components/showUserInfo';

import axios from "axios";
import Loading from '../component/loading'
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
  



export default function WithdrowallMoney(){
    const { t } = useTranslation();

    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);




    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      setLoading(true);
      axios.get(url+"showPullRequests",
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              setData(response.data.pull_requests)
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
              
                <Col lg={12} md={12} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 600  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">{ t("emp.user_data") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.o_monye") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.p_data") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.payment_t") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.o_state") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.acc_o") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.reject") } </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center"> <UserInfo  id={row.user_id} name={row.user_name} email={row.email} phone_number={row.phone_no} type={row.user_type} text={ t("emp.user_data") } /> </StyledTableCell>
                                    <StyledTableCell align="center"> {row.total} </StyledTableCell>
                                    <StyledTableCell align="center">  </StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {  
                                            row.accepted===0 & row.employee_id ===null ? (t("emp.new_o")) :
                                            row.accepted===1 ? (t("emp.ok_o")):(t("emp.reject_o"))
                                        }     
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className='btn app_button_1' >  { t("emp.acc_o") }</button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button  className='btn app_button_1' > { t("emp.reject") }</button>
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