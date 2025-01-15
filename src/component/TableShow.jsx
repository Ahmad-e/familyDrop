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

const TableShow = (props) => {
    const [open,setOpen] = useState(false);
    const [name,setName] = useState("");
    const [cost,setCost] = useState("");
    const nav = useNavigate();
    function handleClose() {
        setOpen(false);
    }
    function handleOk(){
        console.log(name);
        setOpen(false)
    }
    return(
        <>
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
                    {props.arr.map((el,key)=>
                    <tr key={key}>
                        <td onClick={()=> props.page ? nav(`/employee/locations/${props.page}/${el.id}`):""} className="text-center w-50">{el.name}</td>
                        {!props.page && <td className="w-25">{el.cost} JOD</td>}
                        <td className={`${props.page ? "w-50" : "w-25"}`}>
                            <button className="btn me-2 app_button_1" onClick={()=> 
                                {
                                    setName(el.name);
                                    if(!props.page){
                                        setCost(el.cost)
                                    }
                                    setOpen(true)}
                                }>Edit</button>
                            <button className="btn app_button_1">Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
            {props.last === true ? "" : <div className="add mt-3">
                <button className="btn app_button_2 me-0" onClick={()=> setOpen(true)}>
                    New
                </button>
            </div>}
            <Dialog
        open={open}
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
                startAdornment: <InputAdornment position="start">C</InputAdornment>,
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