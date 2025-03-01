import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

import axios from "axios";
import Loading from '../component/loading'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as React from 'react';



const ReceiveMoney = () => {


    const { t } = useTranslation();
    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({});
    const [userData,setUserData] = useState([]);


    const [orders, setOrders] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [methods,setMethods] = useState([]);
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

        setLoading(true);
        axios.get(url+"showPaymentWays",
            {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
            })
            .then((response) => {
                setMethods(response.data.data)
                setLoading(false)
    
            })
            .catch((error) =>{ 
                console.log(error);
                setLoading(false) });

        axios.get(url+"profile",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            console.log(res.data);
            setUserData(res.data);
            setUserInfo(res.data.user_info[0]);
        }).catch(err => {
            console.log(err);
        })
  }, []);


    const allAmount = 456;
    const [method,setMethod] = useState(0);
    const [amount,setAmount] = useState(0);
    const [text,setText] = useState("");


    const [errMethod,setErrMethod] = useState(false);
    const [errAmount,setErrAmount] = useState(false);
    const [errText,setErrText] = useState(false);




    const handleOk=()=>{
        if(text==="")
            setErrText(true)
        if(amount<0 || amount> userInfo.badget)
            setErrAmount(true)
        if(method===0)
            setErrMethod(true)

        if(method!==0 && amount>0 && amount<= userInfo.badget && text.length!==''){
        setLoading(true)
        try {
        const response = axios.post(url+'pullMoneyRequest', {
            payment_way_id:method,
            payment_data:text,
            total:amount
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token ,
                'Accept':"application/json"
            }
        }).then((response) => {
            setLoading(false)
            console.log(response.data)
            
            setData(response.data.pull_requests)
            window.location.reload()
            

        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
            
        } catch (e) {
              throw e;
        }}
    }
    

    return(
        <div className="receiveMoney h-100">
            <Loading loading={loading} />
            <Container className="shadow p-0 rounded">
                <div className="top py-5 shadow rounded flex-column flex-md-row p-4 d-flex align-items-center justify-content-evenly">
                    <div className="p-2">
                        <h1 className="fs-4">{ t("marketer.badget") }</h1>
                        <p className="fs-5 main_color pt-3">{userInfo.badget} JOD</p>
                    </div>
                    <div className="p-2">
                        <h1 className="fs-4">{ t("marketer.Ubadget") }</h1>
                        <p className="fs-5 main_color pt-3">{userData.total_pull_requests} JOD</p>
                    </div>
                </div> 
                <Form  className="text-start p-5 d-flex flex-column">
                    <h1>Withdraw</h1>
                    <div className="d-flex my-5 flex-column flex-md-row align-items-start justify-content-evenly">
                        <div className="w-100 w-md-50 p-2">
                            <TextField
                            error={errMethod}
                            id="outlined-select-currency"
                            select
                            label={ t("emp.payment_t") }
                            defaultValue=""
                            className='w-100 text-secondary text-start'
                            value={method}
                            onChange={(e)=>setMethod(e.target.value)}
                            >
                            <option disabled value="">{ t("emp.payment_t") }</option>
                                {methods.map((option) => {
                                    if(option.available===1)
                                        return(
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.name}
                                            </MenuItem>
                                        )})}
                            </TextField>
                        </div>
                        <div className="w-100 w-md-50 p-2">
                            <TextField error={errText} value={text} onChange={(e)=>setText(e.target.value)}  className='w-100 text-secondary text-start' variant="outlined" label={ t("emp.p_data") } />
                        </div>
                        <div className="w-100 w-md-50 p-2">
                        <TextField
                        error={errAmount}
                        type="number"
                        value={amount<0 ? 0 : amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        label={ t("emp.o_monye") }
                        id="outlined-start-adornment"
                        className='w-100 w-md-50 '
                        sx={{ width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">JOD</InputAdornment>,
                            },
                        }}
                        />
                        {
                            amount>allAmount && <span className="d-block error">The number must be less or equal than withdrawal balance</span>
                        }
                        </div>
                    </div>
                    <Button onClick={handleOk}  className="app_button_2 align-self-center">Withdaw</Button>
                </Form>

                <div >
                    {
                        data.map((item)=>{
                            return(
                                <div className="money-plus d-flex align-items-center">
                                    <div className="main_color p-5 money">+ {item.total} JOD</div>
                                    <div className="info text-start ps-3">
                                        <h1>سحب من المحفظة</h1>
                                        <div className="date py-2">
                                            <span>Anable Withdraw from : <span>{item.created_at}</span></span><br/>
                                            <span>payment way : <span>{item.name}</span></span><br/>
                                            <span>state : { 
                                            item.accepted===0 & item.employee_id ===null ? ("قيد المراجعة") :
                                            item.accepted===1 ? ("تمت الموافقة"):(" طلب مرفوض ")
                                            }</span><br/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </Container>
        </div>
    )
}
export default ReceiveMoney;