import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../component/loading";
import { useParams } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import Progress from "../component/progressBar";

const UserInfo = () => {
    const [data,setData] = useState([]);
    const [info,setInfo] = useState("");
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [load,setLoad] = useState(true);
    const {id} = useParams();
  
    useEffect(()=>{
        axios.get(url+"showUserInfo/"+id,{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            setData(res.data);
            setInfo(res.data.user_info[0]);
            console.log(res)
            setLoad(false)
        }).catch(err => {
            console.log(err);
            setLoad(false)
        })
    },[]) 

    return(
        <>
              <Loading loading={load}/>
              <div className="receiveMoney h-100">
            <Container className="shadow p-0 rounded">
                <div className="top shadow px-5  rounded">
                    <div className="d-flex py-5 align-items-center rounded flex-column flex-md-row">
                        <img width={"100px"} style={{borderRadius: "50%"}} src={""} alt=""/>
                        <div className="ms-4 text-md-start">
                            <div className="fs-4">{info.name}</div>
                            <div className="text-secondary">{info.email}</div>
                            <div> {info.type}</div>
                        </div>
                    </div>
                    <div className="border-top py-3 text-start">
                        <span className="ms-5">From <span className="main_color">{info.country}</span></span>
                        <span className="ms-5 d-block d-md-inline">To Communication <span className="main_color">{info.phone_no}</span></span>
                    </div>
                </div> 
                <div className="p-3">
                {info.type === "Marketer" &&
                <div> 
                    <h1 className="fs-2 my-3 fw-bold main_color">All Requests</h1>
                <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td className="text-center w-50">
                            {info.type === "Marketer" ? "All Orders" : ""}
                        </td>
                        <td className="w-25">
                            {data.all_orders}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Total pull request
                        </td>
                        <td className="w-25">
                            {data.total_pull_requests}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Pull Requests
                        </td>
                        <td className="w-25">
                            {!load && data.pull_requests.length}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Cancelled Orders
                        </td>
                        <td className="w-25">
                        {!load && <Progress value={data.cancelled_orders.slice(0,-1)}/>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Ended Orders
                        </td>
                        <td className="w-25">
                           {!load && <Progress value={data.ended_orders.slice(0,-1)}/>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Finished Orders
                        </td>
                        <td className="w-25">
                            {!load && <Progress value={data.finished_orders.slice(0,-1)}/>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            New Orders
                        </td>
                        <td className="w-25">
                            {!load && <Progress value={data.new_orders.slice(0,-1)}/>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            On Working Orders
                        </td>
                        <td className="w-25">
                            {!load && <Progress value={data.on_working_orders.slice(0,-1)}/>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Under delivery Orders
                        </td>
                        <td className="w-25">
                            {!load && <Progress value={data.under_delivery_orders.slice(0,-1)}/>}
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>}
            {info.type === "Mercher" &&
            <div> 
                <h1 className="fs-2 my-3 fw-bold main_color">All Products</h1>
                <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td className="text-center w-50">
                            All Products
                        </td>
                        <td className="w-25">
                            {data.all_products}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Total Products quantity
                        </td>
                        <td className="w-25">
                            {data.total_products_quantity}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center w-50">
                            Products
                        </td>
                        <td className="w-25">
                            {data.products.map((el,key) => <div> {key+1}-{el.name} </div> )}
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>}
                </div>
            </Container>
        </div>
        </>
    )
}
export default UserInfo;