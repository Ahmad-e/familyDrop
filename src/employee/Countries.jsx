import { useEffect, useState } from "react";
import TableShow from "../component/TableShow";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../component/loading";
import { useTranslation } from 'react-i18next';

const Countries = () => {
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [countries,setCountries] = useState([]);
    const [refresh,setRefresh] = useState(true);
    const [load,setLoad] = useState(true);
    const { t } = useTranslation();

    useEffect(()=>{
        axios.get(url+"showCountries",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            setCountries(res.data.data);
            setLoad(false)
        }).catch(err => {
            console.log(err);
            setLoad(false);
        })
    },[refresh])

    return(
        <div>
            <Loading loading={load}/>
            <div className="m-5">
                <TableShow page="cities" refresh={setRefresh} add={"addCountry"} delete={"deleteCountry/"} edit={"editCountry"} header={t("locations.coun")} arr={countries}/>
            </div>
        </div>
    )
}
export default Countries;