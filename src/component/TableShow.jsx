import { Button, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "./loading";

const TableShow = (props) => {
    const [open,setOpen] = useState(false);
    const [name,setName] = useState("");
    const [cost,setCost] = useState("");
    const [load,setLoad] = useState(false);
    const [open1,setOpen1] = useState(false);
    const [editId,setEditId] = useState("");
    const [parentId,setParentId] = useState("");
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);

    const nav = useNavigate();
    function handleClose() {
        open ? setOpen(false) : setOpen1(false);
    }
    function handleOk(){
        setLoad(true);
        if(open){
            axios.post(url+props.edit,
                props.edit === "editCountry" ? 
                    {
                        "id":editId,
                        "name":name
                    } 
                    : props.edit === "editCity" ? 
                        {
                            "id":editId,
                            "name":name,
                            "country_id": parentId
                        } : 
                        {
                            "id":editId,
                            "name": name,
                            "city_id":parentId
                        }
                ,{
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token
                    }
                }).then(res => {
                    setOpen(false);
                    setLoad(false);
                    setName("");
                    props.refresh(prev => !prev);
                }).catch(err => {
                    console.log(err);
                    setOpen(false);
                    setName("");
                    setLoad(false);
                })
        }
        else if(open1){
            axios.post(url+props.add,
                props.add === "addCountry" ? 
                {
                    "name": name
                } : 
                props.add === "addCity" ? {
                    "name":name,
                    "country_id": props.country_id
                } : {
                    "name": name,
                    "delivery_price":11,
                    "city_id": props.city_id
                },{
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token
                    }
                }).then(res => {
                    setOpen1(false);
                    setLoad(false);
                    setName("");
                    props.refresh(prev => !prev);
                }).catch(err => {
                    console.log(err);
                    setOpen1(false);
                    setName("");
                    setLoad(false);
                })
        }
    }
    const handleDelete = (id) => {
        setLoad(true);
        axios.get(url+props.delete+id,{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        }).then(res => {
            console.log(res);
            setLoad(false);
            props.refresh(prev => !prev);
        }).catch(err => {
            console.log(err);
            setLoad(false);
        })
    }
    return(
        <>
            <Loading loading={load}/>
            <Table striped bordered hover>
                {props.header === "" ? "" :
                <thead>
                    <tr>
                        <th className="main_color">{props.header}</th>
                        {!props.page && <th className="main_color">Cost</th>}
                        <th className="main_color">Action</th>
                    </tr>
                </thead>}
                <tbody>
                    {props.arr.length === 0 ? <tr><td colSpan={12}>{load ? "Loading..." : "Not Found"}</td></tr> :
                    props.arr.map((el,key)=>
                    <tr key={key}>
                        <td onClick={()=> props.page ? nav(`/employee/locations/${props.page}/${el.id}`):""} className="text-center w-50">
                            {props.header === "Addresses" ? el.addresse_name : el.name}
                        </td>
                        {!props.page && <td className="w-25">
                            {el.delivery_price === null ? "Not Found" : el.delivery_price + "JOD"}
                        </td>}
                        <td className={`${props.page ? "w-50" : "w-25"}`}>
                            <button className="btn me-2 app_button_1" onClick={()=> 
                                {
                                    if(!props.page){
                                        setCost(el.cost);
                                        setName(el.addresse_name);
                                    }else{
                                        setName(el.name);
                                    }
                                    setEditId(el.id);
                                    props.edit === "editCity" ?
                                    setParentId(props.country_id)  :
                                    props.edit === "editAddresse" ?
                                    setParentId(props.city_id) : 
                                    setParentId("");
                                    setOpen(true)}
                                }>Edit</button>
                            <button onClick={() => handleDelete(el.id)} className="btn app_button_1">Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
            {props.add && <div className="add mt-3">
                <button className="btn app_button_2 me-0" onClick={()=> setOpen1(true)}>
                    New
                </button>
            </div>}
            <Dialog
        open={open || open1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle className="fs-5" id="alert-dialog-title">
            {"Enter tne information"}
        </DialogTitle>
        <DialogContent>
            <form className='d-flex flex-column'>
            <TextField
                label="Name"
                id="outlined-start-adornment"
                className='w-100 my-3'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                sx={{ width: '25ch' }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">N</InputAdornment>,
                    },
                }}
            />
        {!props.page && <TextField
          label="Cost"
          id="outlined-start-adornment"
          className='w-100 my-3'
          value={cost}
          onChange={(e)=> setCost(e.target.value)}
          sx={{ width: '25ch' }}
          slotProps={{
            input: {
                startAdornment: <InputAdornment position="start">JOD</InputAdornment>,
            },
          }}
        />}
        </form>
        </DialogContent>
        <DialogActions>
          <Button className="btn app_button_2" onClick={handleClose}>cancel</Button>
          <Button className="btn app_button_2" onClick={handleOk} autoFocus>
            Ok
          </Button>
        </DialogActions>
        </Dialog>
        </>
    )
}
export default TableShow;