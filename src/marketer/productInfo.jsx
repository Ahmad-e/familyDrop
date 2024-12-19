import { Container } from "react-bootstrap";
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function ProductInfo(){

    const [open,setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className="productInfo my-2 d-flex align-items-center justify-content-center">
            <Container>
                <div className="d-flex flex-wrap mb-4 top justify-content-between">
                    <div className="d-flex align-items-center img-name p-3 shadow rounded">
                        <img width={"200px"} height={"200px"} className="img" src={require("../images/images/test.jpg")} alt=""/>
                        <div className="ps-lg-5 ps-md-5 pt-3 text-lg-start">
                            <h1>Product Name</h1>
                            <span className="text-secondary text-start mt-2 d-lg-block">type</span> 
                            <button onClick={handleClickOpen} className="mt-4 d-block video"><span className="main_color">Click here</span> to show video</button>
                        </div>
                    </div>
                    <div className="price shadow p-4 rounded d-flex flex-column align-items-between justify-content-between">
                        <div className=" d-flex justify-content-evenly m-3 m-lg-0 align-items-start">
                        <div className="m-0">
                            <p className='text-secondary'>total</p>
                            <span>78$</span>
                            
                        </div>
                        <div className="">
                            <p className='text-secondary'>suggestion</p>
                            <span>43$</span>
                        </div>
                        </div>
                        <button className='btn nav_link nav-link' size="small"><LocalGroceryStoreRoundedIcon className="main_color"/> Add to cart</button>
                    </div>
                </div>
                <div className="discription p-5 shadow w-100">
                    We with achieve more revenuevWe with comprehensive e-commerce services to meet your ambitions and achieve more revenueWe with comprehensive e-commerce services to meet your ambitions and achieve more revenuevWe with comprehensive e-commerce services to meet your ambitions and achieve more revenuevWe with comprehensive e-commerce services to meet your ambitions and achieve more revenuevWe with comprehensive e-commerce services to meet your ambitions and achieve more revenueWe with comprehensive e-commerce services to meet your ambitions and achieve more revenueWe
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