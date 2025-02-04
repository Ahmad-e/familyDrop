import * as React from 'react';

import Types from './components/types'
import Colors from './components/colors'
import Sizess from './components/sizes'


import axios from "axios";
import Loading from '../component/loading'
import { useDispatch, useSelector } from 'react-redux';




export default function Register (){
    const url = useSelector(state=>state.apiURL);
    const [loading, setLoading] = React.useState(true);
    const [types, setTypes] = React.useState([]);
    const [colors, setColors] = React.useState([]);
    const [sizes, setSizes] = React.useState([]);


    React.useEffect(() => {
        //setLoading(true);
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
                setLoading(false) });
    }, []);

    return(
        <>
            <Loading loading={loading} />
            {
                !loading ? 
                    (
                        <>
                            <Types data={types} />
                            <Colors data={colors} />
                            <Sizess  data={sizes} />
                        </>
                    ):(<></>)

                
            }
        </>  
    )
}
