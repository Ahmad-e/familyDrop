import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const ReceiveMoney = () => {
    const allAmount = 456;
    const [method,setMethod] = useState("");
    const [amount,setAmount] = useState("");

    const methods = [
        {
            label: "cridet card",
            value: 0
        },
        {
            label: "Cash",
            value: 1
        },
        {
            label: "pay pad",
            value: 2
        }
    ];

    const handleOk = (e) => {
        e.preventDefault();
        console.log(method);
        console.log(amount);
    }

    return(
        <div className="receiveMoney h-100">
            <Container className="shadow p-0 rounded">
                <div className="top py-5 shadow rounded flex-column flex-md-row p-4 d-flex align-items-center justify-content-evenly">
                    <div className="p-2">
                        <h1 className="fs-4">Withdrawal balance</h1>
                        <p className="fs-5 main_color pt-3">345 JOD</p>
                    </div>
                    <div className="p-2">
                        <h1 className="fs-4">Suspended balance</h1>
                        <p className="fs-5 main_color pt-3">0 JOD</p>
                    </div>
                </div> 
                <div className="">
                    <div className="money-plus d-flex align-items-center">
                        <div className="main_color p-5 money">+ 560 JOD</div>
                        <div className="info text-start ps-3">
                            <h1>Products name</h1>
                            <div className="date py-2">
                                <span>Anable Withdraw from : <span>21/3/2023</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="money-plus d-flex align-items-center">
                        <div className="main_color p-5 money">+ 560 JOD</div>
                        <div className="info text-start ps-3">
                            <h1>Products name</h1>
                            <div className="date py-2">
                                <span>Anable Withdraw from : <span>21/3/2023</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="money-plus d-flex align-items-center">
                        <div className="main_color p-5 money">+ 560 JOD</div>
                        <div className="info text-start ps-3">
                            <h1>Products name</h1>
                            <div className="date py-2">
                                <span>Anable Withdraw from : <span>21/3/2023</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="money-plus d-flex align-items-center">
                        <div className="main_color p-5 money">+ 560 JOD</div>
                        <div className="info text-start ps-3">
                            <h1>Products name</h1>
                            <div className="date py-2">
                                <span>Anable Withdraw from : <span>21/3/2023</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <Form onSubmit={handleOk} className="text-start p-5 d-flex flex-column">
                    <h1>Withdraw</h1>
                    <div className="d-flex my-5 flex-column flex-md-row align-items-start justify-content-evenly">
                        <div className="w-100 w-md-50 p-2">
                        <TextField
                        id="outlined-select-currency"
                        select
                        label="Types"
                        defaultValue=""
                        className='w-100 text-secondary text-start'
                        value={method}
                        onChange={(e)=>setMethod(e.target.value)}
                        >
                        <option disabled value="">select payment method</option>
                            {methods.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                        </div>
                        <div className="w-100 w-md-50 p-2">
                        <TextField
                        type="number"
                        value={amount<0 ? 0 : amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        label="Amount"
                        id="outlined-start-adornment"
                        className='w-100 w-md-50 '
                        sx={{ width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">JOD</InputAdornment>,
                            },
                        }}
                        />
                        {
                            amount>allAmount && <span className="d-block error">The number must be less or equal than withdrawal balance</span>
                        }
                        </div>
                        </div>
                    <Button type="submit" className="app_button_2 align-self-center">Withdaw</Button>
                </Form>
            </Container>
        </div>
    )
}
export default ReceiveMoney;