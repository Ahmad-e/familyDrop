import * as React from 'react';

import TextField from '@mui/material/TextField';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import axios from "axios";
import Loading from '../component/loading'


export default function Chat(props){


    const user_id=parseInt(useSelector(state=>state.id));
    const { t } = useTranslation();

    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState(props.messages);
    const [name , setName]=React.useState('');
    const [errName , setErrName]=React.useState(true);
    const ChangeName=(e)=>{
        setName(e.target.value)
        if(e.target.value<=0)
            setErrName(true)
        else
            setErrName(false)
    }
    const AddMessage=()=>{
        setLoading(true)
        console.log({
            order_id:props.id,
            text:name
        })
        try {
            const response = axios.post(url+'addOrderTag', {
                order_id:props.id,
                text:name
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
                setData(response.data.data[0].tags)
                setName("")
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            });
                
            } catch (e) {
                  throw e;
            }
    }

    return(
        <div dir='rtl' className="chat_box">
            <Loading loading={loading} />
            <div className='messages_box'>   
                <div hidden={data.length!==0} className=" p-5 ">
                    { t("orders.m_no_msg") } 
                </div>

                {data.map((item)=>{
                    if(user_id===item.user_id)
                    return(
                        <div className='recev_mes'>
                            <div className="row message sended">
                                {item.text}
                                <p className='text-start text-slate-400' >
                                {item.date}
                                </p>
                            </div>
                            <div>
                                <img className='msg_user_img ' src={"Test"} />
                            </div>
                        </div>
                    )

                    return(
                        <div className='sender_mes'>
                            <div>
                                <img className='msg_user_img ' src={"Test"} />
                            </div>
                            <div className="row message received" >
                                <a className='text-start text-slate-400' >
                                {item.name}
                                </a>
                                {item.text}
                                <p className='text-start text-slate-400' >
                                {item.date}
                                </p>

                            </div>
                            
                        </div>
                    )
                })}
            </div>

            <div className="send_box " >
                
                <IconButton onClick={()=>AddMessage()} disabled={errName}>
                    <SendRoundedIcon />
                </IconButton>
                <TextField value={name} onChange={ChangeName}  multiline fullWidth id="outlined-basic"  variant="outlined" />
            </div>
        </div>
    )
} 