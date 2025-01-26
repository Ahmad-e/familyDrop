import * as React from 'react';

import Types from './components/types'
import Colors from './components/colors'
import Sizess from './components/sizes'


import axios from "axios";
import Loading from '../component/loading'
import { useDispatch, useSelector } from 'react-redux';




export default function Register (){
    const url = useSelector(state=>state.apiURL);
    const [loading, setLoading] = React.useState(false);

    return(
        <>
            <Types />
            <Colors />
            <Sizess />
        </>  
    )
}
