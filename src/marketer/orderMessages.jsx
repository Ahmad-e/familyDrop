import * as React from 'react';

import TextField from '@mui/material/TextField';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';


import Test from '../images/images/test.jpg'
export default function Chat(props){

    const data=[
        {
            userName:"Ahmad",
            userImg:"url",
            userId:1,
            text:"مرحبا فريق فاميلي دروب",
            date:"2024/12/8"
        },
        {
            userName:"Ahmad",
            userImg:"url",
            userId:1,
            text:"لدي استفسار عن الطلب",
            date:"2024/12/8"
        },
        {
            userName:"Zead",
            userImg:"url",
            userId:2,
            text:"أهلا بك أحمد\n تفضل كيف يمكنني مساعدتك",
            date:"2024/12/8"
        },
        {
            userName:"Ahmad",
            userImg:"url",
            userId:1,
            text:"كم من الوقت تحتاج الطلبية لإيصالها للمستهلك ؟",
            date:"2024/12/8"
        },
        {
            userName:"Zead",
            userImg:"url",
            text:"سيتم خلال يوم أو يومين",
            userId:2,
            date:"2024/12/8"
        }
    ]
    const user_id=1;
    const { t } = useTranslation();

    return(
        <div dir='rtl' className="chat_box">
            <div className='messages_box'>   
                <div hidden={data.length!==0} className=" p-5 ">
                    { t("orders.m_no_msg") } 
                </div>

                {data.map((item)=>{
                    if(user_id===item.userId)
                    return(
                        <div className='flex content-around'>
                            <div className={user_id===item.userId ?  "row message sended" : "row message received"}>
                                {item.text}
                                <p className='text-start text-slate-400' >
                                {item.date}
                                </p>
                            </div>
                            <div>
                                <img className='msg_user_img ' src={Test} />
                            </div>
                        </div>
                    )

                    return(
                        <div className='flex content-around'>
                            <div>
                                <img className='msg_user_img ' src={Test} />
                            </div>
                            <div className={user_id===item.userId ?  "row message sended" : "row message received"}>
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
                <TextField  multiline fullWidth id="outlined-basic"  variant="outlined" />
                <IconButton>
                    <SendRoundedIcon />
                </IconButton>
            </div>
        </div>
    )
} 