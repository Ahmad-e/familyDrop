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
                    cost: `${233}`
                },
                {
                    id: 1,
                    name: "alseouf",
                    cost: `${223}`
                },
            ]
        },
        {
            id: "1",
            addresses: [
                {
                    id: 0,
                    name: "abo attaf",
                    cost: `${23}  `
                },
                {
                    id: 1,
                    name: "al kanesah",
                    cost: `${23}  `
                },
                {
                    id: 2,
                    name: "school",
                    cost: `${23}  `
                }
            ]
        },
        {
            id: "2",
            addresses: [
                {
                    id: 0,
                    name: "al khodrah",
                    cost: `${23}  `
                },
                {
                    id: 1,
                    name: "clothes",
                    cost: `${23}  `
                },
                {
                    id: 2,
                    name: "algesr",
                    cost: `${543}  `
                }
            ]
        },
        {
        id: "3",
        addresses: [
            {
                id: 0,
                name: "al sahah",
                cost: `${253}  `
            },
            {
                id: 1,
                name: "tv building",
                cost: `${203}  `
            },
            {
                id: 2,
                name: "saif",
                cost: `${234}  `
            }
        ]
    },
    {
        id: "4",
        addresses: [
            {
                id: 0,
                name: "malki 1",
                cost: `${203}  `
            },
            {
                id: 1,
                name: "malki 2",
                cost: `${233}  `
            },
            {
                id: 2,
                name: "malki 3",
                cost: `${243}  `
            }
        ]
    },
    {
        id: "5",
        addresses: [
            {
                id: 0,
                name: "mazah 86",
                cost: `${345}  `
            },
            {
                id: 1,
                name: "al tagned",
                cost: `${265}  `
            },
            {
                id: 2,
                name: "bank",
                cost: `${23}  `
            }
        ]
    },
    {
        id: "6",
        addresses: [
            {
                id: 0,
                name: "cgfcm 1",
                cost: `${23}  `
            },
            {
                id: 1,
                name: "cgfcm 2",
                cost: `${23}  `
            },
            {
                id: 2,
                name: "cgfcm 3",
                cost: `${23}  `
            }
        ]
    },
    {
        id: "7",
        addresses: [
            {
                id: 0,
                name: "ml/km/lkm/lkalki 1",
                cost: `${23}  `
            },
            {
                id: 1,
                name: "ml/km/lkm/lkalki 2",
                cost: `${23}  `
            },
            {
                id: 2,
                name: "ml/km/lkm/lkalki 3",
                cost: `${23}  `
            }
        ]
    },
    {
        id: "8",
        addresses: [
            {
                id: 0,
                name: "mazjhgkytfah 1",
                cost: `${23}  `
            },
            {
                id: 1,
                name: "mazjhgkytfah 2",
                cost: `${23}  `
            },
            {
                id: 2,
                name: "mazjhgkytfah 3",
                cost: `${23}  `
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