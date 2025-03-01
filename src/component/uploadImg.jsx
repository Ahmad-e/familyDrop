import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import NoImg from '../images/images/no_img.png';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useSelector } from 'react-redux';
import axios from "axios";
import Loading from '../component/loading'

export default function BadgeOverlap(props) {

    const [img, setImg]=React.useState(null);

    const url = useSelector(state=>state.apiURL);
    const token = useSelector(state=>state.token);
    const [loading, setLoading] = React.useState(false);



    const handleFileChange = (event) => {
    
        if(event.target.files[0]){
            const files = (event.target.files[0]);
            setImg(files);

            var form = new FormData();
            form.append('img_url',files );
            setLoading(true)

            try {
                const response = axios.post(url+'editUserData',
                form,
                {
                    headers:{
                        'Content-Type': 'multipart/form-data',
                        'Authorization' : 'Bearer ' +token ,
                        'Accept':"application/json"
                    }
                }
                ).then((response) => {
                    setLoading(false)
                    console.log(response.data)
                    window.location.reload()
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
            } catch (e) {
                throw e;
            }
        }
    };
  return (
    <>
        <Loading loading={loading} />
        <Badge  overlap="circular"  color="error" badgeContent={
            <>
                <label required  for="img-upload"  className=' text-lg' >
                    <EditOutlinedIcon style={{ margin:"1px" }} />
                </label>
                <input onChange={handleFileChange} accept="image/*" id="img-upload" type="file" />
            </>
        }>
        <img src={props.img !== null ? (props.img):(NoImg)} className='profile_img' />
      </Badge>
    </>
  );
}