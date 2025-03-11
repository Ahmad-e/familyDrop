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
import NoImg from '../images/images/no_img.png';

import EditProfile from '../admin/components/adminEdirUser'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";

import Slide from '@mui/material/Slide';
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

    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      setLoading(true);
      axios.get(url+"showUsers",
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              setData(response.data.data)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setLoading(false) });
  }, []);

  const [Countries,setCountries] = React.useState([]);
      React.useEffect(()=>{
        setLoading(true);
        axios.get(url+"showCountries",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            setCountries(res.data.data);

            setLoading(false);
            console.log(res)
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    },[])

  const blockUser=(id)=>{
    setLoading(true);
      axios.get(url+"blockUser/"+id,
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              setData(response.data.data)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setLoading(false) });
  }
  const [fillterType, setFillterType]=React.useState(0);

    return(

          <Container>
            <Row className='flex justify-center'> 
                <Col className='my-4' lg={3} md={4} sm={6}>
                  <FormControl fullWidth  className='auth_item' dir='ltr' >
                      <InputLabel id="demo-simple-select-label">{ t("orders.o_state") }</InputLabel>
                      <Select
                      
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={fillterType}
                          label={ t("orders.o_state") }
                          onChange={(e)=>setFillterType(e.target.value)}
                      >
                        <MenuItem value={0}> All data </MenuItem>
                        <MenuItem value={1}>{ t("emp.admin") } </MenuItem>
                        <MenuItem value={2}> { t("emp.employee") } </MenuItem>
                        <MenuItem value={3}>{ t("emp.merchant") } </MenuItem>
                        <MenuItem value={4}> { t("emp.marketer") }</MenuItem>
                      </Select>
                  </FormControl>
                </Col>
              </Row>
            <Row className='flex justify-center'> 
            <Loading loading={loading} />

                <Col lg={4} md={5} sm={12}>
                    <Register />
                </Col>
                <Col lg={8} md={7} sm={12}>
                    <TableContainer 
                        sx={{ borderRadius:"20px" , boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }} 
                        component={Paper}
                    >
                        <Table  sx={{ minWidth: 600  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                  <StyledTableCell align="center"> { t("emp.img") } </StyledTableCell>
                                  <StyledTableCell align="center">id</StyledTableCell>
                                    <StyledTableCell align="center">{ t("auth.name") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("auth.email") }</StyledTableCell>
                                    
                                    <StyledTableCell align="center"> { t("auth.phone_number") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.type") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("auth.block") } </StyledTableCell>
                                    <StyledTableCell align="center"> { t("basket.change") } </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => {
                              if( fillterType===0 || fillterType===parseInt(row.type_id) )
                                return(<StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img  src={row.img_url !== null ? (row.img_url):(NoImg)} className='product_img' />
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center"> {row.email} </StyledTableCell>
                                    <StyledTableCell align="center"> {row.phone_no} </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {
                                          row.type_id===1 ? (t("emp.admin")):
                                          row.type_id===2 ? (t("emp.employee")):
                                          row.type_id===4 ? (t("emp.marketer")):
                                          (t("emp.merchant"))

                                        } 
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button onClick={()=>blockUser(row.id)} className='btn app_button_1' > { row.blocked===0 ? (t("auth.block")) : (t("emp.Unblock")) } </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                      
                                      <EditProfile info={row} countries={Countries}  />
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