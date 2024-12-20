import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';


import URL from '../images/images/test2.jpg'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useTranslation } from 'react-i18next';

import TotalCard from '../component/totalCard'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];


export default function SportsBasketball(){
    
    const { t } = useTranslation();
    return(
        <Container>
            <Row className='mt-3'>
                <Col lg={9} md={8} sm={12} className='p-3'>
                    <TableContainer 
                        style={{ 
                            backgroundColor:"#6363631f" ,
                            borderRadius:"20px" , 
                            backgroundImage:"none",
                            boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
                            }} 
                        component={Paper}
                    >
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"> { t("basket.delete") } </TableCell>
                                    <TableCell align="center">{ t("basket.p_img") }</TableCell>
                                    <TableCell align="center">{ t("basket.p_name") }</TableCell>
                                    <TableCell align="center">{ t("basket.p_desc") }</TableCell>
                                    <TableCell align="center">{ t("basket.min_s") }</TableCell>
                                    <TableCell align="center">{ t("basket.salary") }</TableCell>
                                    <TableCell align="center">{ t("basket.quan") }</TableCell>
                                    <TableCell align="center">{ t("basket.t_s") }</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell align="center">
                                        <IconButton className='delete_button'>
                                            <DeleteForeverRoundedIcon style={{ fontSize:"33px", transition:"all .3s ease-in-out"  }} />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className='flex justify-center'>
                                            <img src={URL} className='product_img' />
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        name    
                                    </TableCell>
                                    <TableCell align="center">
                                        description
                                    </TableCell>
                                    <TableCell align="center">
                                        90 $
                                    </TableCell>
                                    <TableCell align="center">
                                        <TextField   sx={{ width:"100px"  }} type='number' id="outlined-basic" variant="outlined" />  
                                    </TableCell>
                                    
                                    <TableCell align="center">
                                        <div className='flex'>
                                            <button   className='btn app_button_1 text-xl mx-2'>-</button>
                                            <TextField   disabled sx={{ width:"50px" , textAlign:"center"  }} type='number' id="outlined-basic" variant="outlined" /> 
                                            <button   className='btn app_button_1 text-lg mx-2'>+</button> 
                                        </div>

                                    </TableCell>
                                    <TableCell align="center">
                                        300 $
                                    </TableCell>

                                    
                                    
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </Col>
                <Col lg={3} md={4} sm={12} className='p-3' >
                    <TotalCard />
                </Col>
            </Row>
        </Container>
    )
}