import TableShow from "../component/TableShow";

const Countries = () => {
    const arr = [
        {
            id: 0,
            name: "Lebanon",
        },
        {
            id: 1,
            name: "Jorden"
        },
        {
            id: 2,
            name: "US"
        },
    ]
    return(
        <div className="m-5">
            <TableShow page="cities" header="Countries" arr={arr}/>
        </div>
    )
}
export default Countries;