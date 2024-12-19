import { useTranslation } from 'react-i18next';
import Card from "../component/card"
import { Container } from 'react-bootstrap';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';

export default function Products(){
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [productName,setProductName] = React.useState("");
    const [type,setType] = React.useState("");
    const [min,setMin] = React.useState(null);
    const [max,setMax] = React.useState(null);
    const [detailsType,setDetailsType] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setProductName("");
        setType("");
        setMin(null);
        setMax(null);
        setDetailsType("");
    };

    const handleSearch = () => {
      setOpen(false);
      console.log(productName);
      console.log(type);
      console.log("min " + min ,"max " + max)
      console.log(detailsType)
    }

    const types = [
      {
        value: '0',
        label: "meet"
      },
      {
        value: '1',
        label: 'frozen',
      },
      {
        value: '2',
        label: 'chicken',
      },
      {
        value: '3',
        label: 'fast food',
      },
    ];
    const deatailstypes = [
      {
        value: '0',
        label: "meet"
      },
      {
        value: '1',
        label: 'frozen',
      },
      {
        value: '2',
        label: 'chicken',
      },
      {
        value: '3',
        label: 'fast food',
      },
    ]
    return(
        <div className='my-3'>
        <Container className="d-flex flex-column align-items-center">
        <Paper
        onClick={handleClickOpen}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      /> 
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <SearchIcon />
      </IconButton>
      <IconButton color="primary" sx={{ p: '0px' }} aria-label="directions">
      </IconButton>
    </Paper>
            <div className='d-flex mt-4 align-items-center justify-content-center flex-wrap'>
                    <Card title="Test" sugg="20" total="24" id="0" disc="We provide all our marketers with comprehensive e-commerce services to meet your ambitions and achieve more" image={require("../images/images/test.jpg")}/>
                    <Card title="Test" sugg="20" total="24" id="0"  disc="We provide all our marketers with comprehensive e-commerce services to meet your" image={require("../images/images/test.jpg")}/>
                    <Card title="Test" sugg="20" total="24" id="0"  disc="We provide all our marketers with comprehensive e-commerce services " image={require("../images/images/test.jpg")}/>
                    <Card title="Test" sugg="20" total="24" id="0"  disc="We provide  to meet your ambitions and achieve more revenue" image={require("../images/images/test.jpg")}/>
                    <Card title="Test" sugg="20" total="24" id="0"  disc=" with comprehensive e-commerce services to meet your ambitions and achieve more revenue" image={require("../images/images/test.jpg")}/>
                    <Card title="Test" sugg="20" total="24" id="0"  disc="We with comprehensive e-commerce services to meet your ambitions and achieve more revenue" image={require("../images/images/test.jpg")}/>
            </div>
            <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter tne search info"}
        </DialogTitle>
        <DialogContent>
          <form className='d-flex flex-column'>
            <TextField
            value={productName}
            onChange={(e)=>setProductName(e.target.value)}
          label="Product Name"
          id="outlined-start-adornment"
          className='w-100 my-3'
          sx={{ width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">P</InputAdornment>,
            },
          }}
        />
            <TextField
          id="outlined-select-currency"
          select
          label="Select the type"
          defaultValue=""
          className='w-100 text-secondary'
          value={type}
            onChange={(e)=>setType(e.target.value)}
        >
          <option disabled value="">Select Type</option>
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className='d-flex my-3 flex-wrap mb-4 align-items-center justify-content-between'>
        <TextField
        className='me-3'
            autoFocus
            required
            margin="dense"
            id="min"
            value={min}
            onChange={e => setMin(e.target.value)}
            label="Min Price"
            type="number"
            variant="standard"
            />
            <TextField
            autoFocus
            required
            margin="dense"
            id="max"
            value={max}
            onChange={e => setMax(e.target.value)}
            label="Max Price"
            type="number"
            variant="standard"
            />
            </div>
            <TextField
          id="outlined-select-currency"
          select
          label="Select the type of details"
          defaultValue=""
          className='w-100 text-secondary'
          value={detailsType}
            onChange={(e)=>setDetailsType(e.target.value)}
        >
          <option disabled value="">Select details Type </option>
          {deatailstypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleSearch} autoFocus>
            search
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
        </Container>
        </div>
    )
}
