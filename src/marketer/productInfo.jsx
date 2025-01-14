import { Container } from "react-bootstrap";
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { MenuItem, TextField } from "@mui/material";
import { use } from "i18next";

function ProductInfo(){
    const [type,setType] = useState("");
    const [open,setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const sizes = [
        {
            label: "Small",
            value: 0
        },
        {
            label: "Medium",
            value: 1
        },
        {
            label: "Large",
            value: 2
        },{
            label: "X large",
            value: 3
        }
    ]
    return(
        <div className="productInfo my-4 d-flex flex-column align-items-center justify-content-center">
            <Container className="d-flex flex-column-reverse flex-md-row rounded shadow align-items-center justify-content-between">
                <div className="w-md-50 w-100 text-md-start text-center">
                        <div className="ps-3">
                            <h1 className="my-4 productName">Product Name</h1>
                            <span className="text-secondary mt-2 d-lg-block pb-4 mb-4 border-bottom">type</span> 
                            <div>
                                <span className='text-secondary'>Total price : </span>
                                <span className="ps-2 price position-relative">78 <span className="text-secondary">JOD</span></span>
                            </div>
                            <div className="pt-2 mb-3">
                                <span className='text-secondary'>Suggestion price : </span>
                                <span className="ps-2 price position-relative">43 <span className="text-secondary align-self-start">JOD</span></span>
                            </div>
                            <div className="sizes">
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Sizes"
                                defaultValue=""
                                className='w-50 my-4 text-secondary'
                                value={type}
                                onChange={(e)=>setType(e.target.value)}
                            >
                            {/* <option disabled value="">Sizes</option> */}
                                {sizes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                            </div>
                            <div className="sizes">
                                <h3 className="text-secondary">Colors :</h3>
                                    <button style={{backgroundColor: "red"}} className="color"></button>
                                    <button style={{backgroundColor: "white"}} className="color"></button>
                                    <button style={{backgroundColor: "green"}} className="color"></button>
                                    <button style={{backgroundColor: "purple"}} className="color"></button>
                                    <button style={{backgroundColor: "black"}} className="color"></button>
                            </div>
                            <div>
                            </div>
                        <div className="discription mt-4">
                            <h4 className="text-secondary">Description</h4>
                            services to meet your ambitions and achieve more revenueWe hbjhgj hvtrdf ytvtrcft ytvtrdtjf yitgtrvbdt ytgv6trvt byrg6tfry ytrgrub nuhu tydrcesc tvghf hgtrgb gvxc4rv yhgjgnh7rn btcsea yub rdfc
                        </div>
                        <button className="btn app_button_2 w-100 mt-5" size="small"><LocalGroceryStoreRoundedIcon/> Add to cart</button>
                        <button onClick={handleClickOpen} className="m-auto d-block video py-3"><span className="main_color">Click here</span> to show video</button>
                </div>
                </div>
                <div className="w-md-50 w-100 p-2 d-flex align-items-center justify-content-center">
                    <img className="rounded" width={"500px"} src={require("../images/images/test2.jpg")} alt=""/>
                </div>
                    <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">
                                {"The video"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <video src={require("../images/images/1 Introduction To React With Redux [تعلم ال redux] [شرح redux toolkit] [شرح redux](720P_HD).mp4")} controls />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
            </Container>
        </div>
    )
}
export default ProductInfo;