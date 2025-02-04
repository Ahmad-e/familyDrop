import { useParams } from "react-router-dom";
import TableShow from "../component/TableShow"
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../component/loading";

const Addresses = () => {
    const {id} = useParams();
    const [addresses,setAddresses] = useState([]);
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [load,setLoad] = useState(true);
    const [refresh,setRefresh] = useState(true);

    useEffect(()=>{
        axios.get(url+"showAddresses",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            setAddresses(res.data.data);
            console.log(res)
            setLoad(false)
        }).catch(err => {
            console.log(err);
            setLoad(false)
        })
    },[refresh])

    return(
        <>
            <Loading loading={load}/>
            <div className="m-5">
            {id ? 
                <TableShow header="Addresses" refresh={setRefresh} city_id={id} add={"addAddresse"} delete={"deleteAddresse/"} edit={"editAddresse"} arr={addresses.filter(el => el.city_id.toString() === id)}/> : 
                <TableShow header="Addresses" refresh={setRefresh} delete={"deleteAddresse/"} edit={"editAddresse"} arr={addresses}/>
            }
        </div>
        </>
    )
}
export default Addresses