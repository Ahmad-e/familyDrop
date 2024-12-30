import { useParams } from "react-router-dom";
import TableShow from "../component/TableShow";

const Cities = () => {
    const {id} = useParams();
    console.log(id)
    const all = [
        {
            id: "0",
            cities: [
                {
                    id: "0",
                    name: "jaramanah",
                },
                {
                    id: "1",
                    name: "doalaa",
                },
                {
                    id: "2",
                    name: "kaskol",
                }
            ]
        },
        {
            id: "1",
            cities: [
                {
                    id: "3",
                    name: "amaween",
                },
                {
                    id: "4",
                    name: "malki",
                },
                {
                    id: "5",
                    name: "mazah",
                }
            ]
        },
        {
            id: "2",
            cities: [
                {
                    id: "6",
                    name: "cgfcm",
                },
                {
                    id: "7",
                    name: "ml/km/lkm/lkalki",
                },
                {
                    id: "8",
                    name: "mazjhgkytfah",
                }
            ]
        },
    ];
    const allCities = all.map(el => el.cities);
    return(
        <div className="m-5">
            {id ? 
                <TableShow page="addresses" header="Cities" arr={all.filter(el => el.id === id)[0].cities}/> : 
                allCities.map((el,key) => <TableShow page="addresses" header={key === 0 ? "All Cities" : ""} last={key === allCities.length - 1 ? false : true} arr={el}/>
                )
            } 
        </div>
    )
}
export default Cities;