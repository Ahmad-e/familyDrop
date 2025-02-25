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



import AddProducts from './components/addProduct'
import DeleteProduct from './components/deleteProduct'
import ChangeProduct from './components/changeProduct'
import UserInfo from './components/showUserInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';

import axios from "axios";
import Loading from '../component/loading'




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
  const [colors, setColors] = React.useState([]);
  const [sizes, setSizes] = React.useState([]);

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
                //setTypes(response.data.products_types)
                //setLoading(false)

            })
            .catch((error) =>{ 
                console.log(error);
                //setLoading(false) 
              });
      axios.get(url+"showTypesSizesColors",
          {
          headers:{
              'Content-Type': 'application/json',
              'Accept':"application/json"
          }
          })
          .then((response) => {
              //  console.log(response.data)

              setTypes(response.data.types)
              setColors(response.data.colors)
              setSizes(response.data.sizes)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setTypes([])
              setColors([])
              setSizes([])
              setLoading(false) 
            });
    }, []);

    return(

        <Container>
            <Loading loading={loading} />
            <Row className='flex justify-center'> 
              <Col lg={12} md={12} sm={12}>
                <AddProducts onAdd={(e)=>setData(e.products)} />

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
                                    <StyledTableCell align="center"> { t("emp.vid") }  </StyledTableCell>
                                    <StyledTableCell align="center">{ t("basket.p_desc") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.c_price") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.salling") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.rate") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("merchant.all_quant") }</StyledTableCell>
                                    <StyledTableCell align="center">{ t("emp.sell_quant") }</StyledTableCell>
                                    
                                    <StyledTableCell align="center">{ t("emp.ow_data") }</StyledTableCell>
                                    <StyledTableCell align="center"> {} { t("emp.show") } & { t("emp.unShow") }</StyledTableCell>
                                    <StyledTableCell align="center"> { t("emp.change") } </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        <div className='flex justify-center'>
                                            <img src={row.images_array[0]} className='product_img' />
                                        </div>    
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center"> link </StyledTableCell>
                                    <StyledTableCell align="center"> {row.disc} </StyledTableCell>
                                    <StyledTableCell align="center">{row.cost_price}</StyledTableCell>
                                    <StyledTableCell align="center">{row.selling_price}</StyledTableCell>
                                    <StyledTableCell align="center">{row.profit_rate} % </StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                    <StyledTableCell align="center">{row.sales}</StyledTableCell>
                                    <StyledTableCell align="center">
                                      <UserInfo  id={row.owner_id} name={row.owner_name} email={row.email} phone_number={row.phone_no} type={row.user_type} text={ t("emp.user_data") } />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                      <DeleteProduct blocked={row.blocked} id={row.id}  onDelete={(e)=>setData(e)}  />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                      {
                                        !loading ? 
                                            (
                                              <ChangeProduct colors={colors} types={types} sizes={sizes} product={row} onChange={(e)=>setData(e)} />
                                            ):(<></>)
                                      }
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