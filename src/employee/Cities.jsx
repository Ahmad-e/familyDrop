import { useParams } from "react-router-dom";
import TableShow from "../component/TableShow";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../component/loading";
import { useTranslation } from 'react-i18next';

const Cities = () => {
    const [cities,setCities] = useState([]);
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [load,setLoad] = useState(true);
    const [refresh,setRefresh] = useState(true);
    const { t } = useTranslation();

    useEffect(()=>{
        axios.get(url+"showCities",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            setCities(res.data.data);
            console.log(res)
            setLoad(false)
        }).catch(err => {
            console.log(err);
            setLoad(false)
        })
    },[refresh])
    const {id} = useParams();
    return(
        <>
            <Loading loading={load}/>
            <div className="m-5">
            {id ? 
                <TableShow page="addresses" refresh={setRefresh} country_id={id} add={"addCity"} delete={"deleteCity/"} edit={"editCity"} header={t("locations.cit")} arr={cities.filter(el => el.country_id.toString() === id)}/> : 
                <TableShow page="addresses" refresh={setRefresh} delete={"deleteCity/"} edit={"editCity"} header={t("locations.cit")}  arr={cities}/>
            } 
        </div>
        </>
    )
}
export default Cities;