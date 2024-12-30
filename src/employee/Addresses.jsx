import { useParams } from "react-router-dom";
import TableShow from "../component/TableShow"

const Addresses = () => {
    const {id} = useParams();
    console.log(id)
    const all = [
        {
            id: "0",
            addresses: [
                {
                    id: 0,
                    name: "alkheder",
                },
                {
                    id: 1,
                    name: "alseouf",
                },
            ]
        },
        {
            id: "1",
            addresses: [
                {
                    id: 0,
                    name: "abo attaf",
                },
                {
                    id: 1,
                    name: "al kanesah",
                },
                {
                    id: 2,
                    name: "school",
                }
            ]
        },
        {
            id: "2",
            addresses: [
                {
                    id: 0,
                    name: "al khodrah",
                },
                {
                    id: 1,
                    name: "clothes",
                },
                {
                    id: 2,
                    name: "algesr",
                }
            ]
        },
        {
        id: "3",
        addresses: [
            {
                id: 0,
                name: "al sahah",
            },
            {
                id: 1,
                name: "tv building",
            },
            {
                id: 2,
                name: "saif",
            }
        ]
    },
    {
        id: "4",
        addresses: [
            {
                id: 0,
                name: "malki 1",
            },
            {
                id: 1,
                name: "malki 2",
            },
            {
                id: 2,
                name: "malki 3",
            }
        ]
    },
    {
        id: "5",
        addresses: [
            {
                id: 0,
                name: "mazah 86",
            },
            {
                id: 1,
                name: "al tagned",
            },
            {
                id: 2,
                name: "bank",
            }
        ]
    },
    {
        id: "6",
        addresses: [
            {
                id: 0,
                name: "cgfcm 1",
            },
            {
                id: 1,
                name: "cgfcm 2",
            },
            {
                id: 2,
                name: "cgfcm 3",
            }
        ]
    },
    {
        id: "7",
        addresses: [
            {
                id: 0,
                name: "ml/km/lkm/lkalki 1",
            },
            {
                id: 1,
                name: "ml/km/lkm/lkalki 2",
            },
            {
                id: 2,
                name: "ml/km/lkm/lkalki 3",
            }
        ]
    },
    {
        id: "8",
        addresses: [
            {
                id: 0,
                name: "mazjhgkytfah 1",
            },
            {
                id: 1,
                name: "mazjhgkytfah 2",
            },
            {
                id: 2,
                name: "mazjhgkytfah 3",
            }
        ]
    },
    ];
    const allAddresses = all.map(el => el.addresses);
    return(
        <div className="m-5">
            {id ? 
                <TableShow header="Addresses" arr={all.filter(el => el.id === id)[0].addresses}/> : 
                allAddresses.map((el,key) => <TableShow header={key === 0 ? "Addresses" : ""} last={key === allAddresses.length - 1 ? false : true} arr={el}/>
                )
            }
        </div>
    )
}
export default Addresses