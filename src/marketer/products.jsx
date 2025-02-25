// import { useTranslation } from 'react-i18next';
// import Card from "../component/card"
// import { Container } from 'react-bootstrap';
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import InputAdornment from '@mui/material/InputAdornment';
// import { useSelector } from 'react-redux';

// import axios from "axios";
// import Loading from '../component/loading'

// export default function Products(){
//     const { t } = useTranslation();
//     const [open, setOpen] = React.useState(false);
//     const [productName,setProductName] = React.useState("");
//     const [type,setType] = React.useState("");
//     const [min,setMin] = React.useState(null);
//     const [max,setMax] = React.useState(null);
//     const [detailsType,setDetailsType] = React.useState("");


//     const url = useSelector(state=>state.apiURL);
//     const token = useSelector(state=>state.token);
    
//     const [loading, setLoading] = React.useState(false);

//     const [data, setData]=React.useState([]);
//     const [types, setTypes]=React.useState([]);
//     React.useEffect(() => {
//       setLoading(true);
//       axios.get(url+"showProducts",
//           {
//           headers:{
//               'Content-Type': 'application/json',
//               'Accept':"application/json"
//           }
//           })
//           .then((response) => {
//               console.log(response.data)
//               setData(response.data.products)
//               setTypes(response.data.products_types)
//               setLoading(false)

//           })
//           .catch((error) =>{ 
//               console.log(error);
//               setLoading(false) });
//   }, []);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setProductName("");
//         setType("");
//         setMin(null);
//         setMax(null);
//         setDetailsType("");
//     };

//     const handleSearch = () => {
//       setOpen(false);
//       console.log(productName);
//       console.log(type);
//       console.log("min " + min ,"max " + max)
//       console.log(detailsType)
//     }

//     // const types = [
//     //   {
//     //     value: '0',
//     //     label: "meet"
//     //   },
//     //   {
//     //     value: '1',
//     //     label: 'frozen',
//     //   },
//     //   {
//     //     value: '2',
//     //     label: 'chicken',
//     //   },
//     //   {
//     //     value: '3',
//     //     label: 'fast food',
//     //   },
//     // ];
//     const deatailstypes = [
//       {
//         value: '0',
//         label: "meet"
//       },
//       {
//         value: '1',
//         label: 'frozen',
//       },
//       {
//         value: '2',
//         label: 'chicken',
//       },
//       {
//         value: '3',
//         label: 'fast food',
//       },
//     ]
//     return(
//         <div className='my-3'>
//         <Container className="d-flex flex-column align-items-center">
//         <Paper
          
//           component="form"
//           sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: 300 , width:"100%", maxWidth:"440px" }}
//         >
//             <InputBase
              
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search"
//               inputProps={{ 'aria-label': 'search google maps' }}
//             /> 
//             <IconButton type="button" sx={{ padding: '10px 0px' }} aria-label="search">
//             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <SearchIcon style={{ margin :"7px" }} />
//             </IconButton>
//             <IconButton onClick={handleClickOpen} type="button" sx={{ padding: '10px 0px' }} aria-label="search">
//             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <TuneRoundedIcon  style={{ margin :"7px" }}  />
//             </IconButton>
//           </Paper>
          // <div className='d-flex mt-4 align-items-center justify-content-center flex-wrap'>
          //   {
          //     data.map((item)=>{
          //       if(item.blocked===0)
          //       return(
          //         <Card
          //           id={item.id} 
          //           name={item.name}
          //           type={item.type_name} 
          //           disc={item.disc}
          //           rate={item.profit_rate}
          //           cost_price={item.cost_price}
          //           selling_price={item.selling_price}
          //           image={require("../images/images/test2.jpg")}/>
          //       )
          //     })
          //   }
          // </div>
//           <React.Fragment>
//             <Dialog
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="alert-dialog-title"
//               aria-describedby="alert-dialog-description"
//             >
//               <DialogTitle id="alert-dialog-title">
//                 {"Enter tne search info"}
//               </DialogTitle>
//               <DialogContent>
//                 <form className='d-flex flex-column'>
//                   <TextField
//                   value={productName}
//                   onChange={(e)=>setProductName(e.target.value)}
//                 label="Product Name"
//                 id="outlined-start-adornment"
//                 className='w-100 my-3'
//                 sx={{ width: '25ch' }}
//                 slotProps={{
//                   input: {
//                     startAdornment: <InputAdornment position="start">P</InputAdornment>,
//                   },
//                 }}
//               />
//                   <TextField
//                 id="outlined-select-currency"
//                 select
//                 label="Select the type"
//                 defaultValue=""
//                 className='w-100 text-secondary'
//                 value={type}
//                   onChange={(e)=>setType(e.target.value)}
//               >
//                 <option disabled value="">Select Type</option>
//                 {types.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//               <div className='d-flex my-3 flex-wrap mb-4 align-items-center justify-content-between'>
//               <TextField
//               className='me-3'
//                   autoFocus
//                   required
//                   margin="dense"
//                   id="min"
//                   value={min}
//                   onChange={e => setMin(e.target.value)}
//                   label="Min Price"
//                   type="number"
//                   variant="standard"
//                   />
//                   <TextField
//                   autoFocus
//                   required
//                   margin="dense"
//                   id="max"
//                   value={max}
//                   onChange={e => setMax(e.target.value)}
//                   label="Max Price"
//                   type="number"
//                   variant="standard"
//                   />
//                   </div>
//                   <TextField
//                 id="outlined-select-currency"
//                 select
//                 label="Select the type of details"
//                 defaultValue=""
//                 className='w-100 text-secondary'
//                 value={detailsType}
//                   onChange={(e)=>setDetailsType(e.target.value)}
//               >
//                 <option disabled value="">Select details Type </option>
//                 {deatailstypes.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//                 </form>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleClose}>cancel</Button>
//                 <Button onClick={handleSearch} autoFocus>
//                   search
//                 </Button>
//               </DialogActions>
//             </Dialog>
//           </React.Fragment>
//         </Container>
//         </div>
//     )
// }




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
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { PropaneSharp } from '@mui/icons-material';
import Loading from '../component/loading';

export default function Products(){
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [productName,setProductName] = React.useState("0");
    const [type,setType] = React.useState("");
    const [min,setMin] = React.useState(null);
    const [max,setMax] = React.useState(null);
    const [detailsType,setDetailsType] = React.useState("");
    const url = useSelector(state => state.apiURL);
    const [products,setProducts] = React.useState([]);
    const [types,setTypes] = React.useState([]);
    const [load,setLoad] = React.useState(true);
    console.log(products);
    console.log(min,max,type)

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
        setProducts(prev => 
          prev.filter((el)=>
              type && min && max ? el.type_name === type &&
              el.cost_price >= min && el.cost_price <= max :
              type && min ? el.type_name === type &&
              el.cost_price >= min :
              type && max ? el.type_name === type &&
              el.cost_price <= max :
              min && max ?
              el.cost_price >= min && el.cost_price <= max :
              type ? el.type_name === type :
              min ?
              el.cost_price >= min :
              max ? 
                el.cost_price <= max : el
          )
        )
        setOpen(false);
    }
    React.useEffect((()=>{
      axios.post(url+"searchProducts",{
        "name": "0"
      }
      ,{
          headers: {
            Accept: "application/json",
          }
      }).then(res => {
          console.log(res);
          setProducts(res.data.products);
          setTypes(res.data.types);
          setLoad(false);
      }).catch(err => {
          console.log(err);
          setLoad(false)
      })
  }),[])

  const fetchProducts = () => {
    setLoad(true);
    axios.post(url+"searchProducts",{
      "name": productName
    }
    ,{
        headers: {
          Accept: "application/json",
        }
    }).then(res => {
        console.log(res);
        setProducts(res.data.products);
        setTypes(res.data.types);
        setLoad(false)
    }).catch(err => {
        console.log(err);
        setLoad(false)
    })
  }
  
    return(
      <>
      <Loading loading={load}/>
        <div className='my-3'>
        <Container className="d-flex flex-column align-items-center">
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: 300 , width:"100%", maxWidth:"440px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={ t("marketer.search_to") }
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={(e)=> setProductName(e.target.value)}
          />
          <IconButton type="button" onClick={fetchProducts} sx={{ padding: '10px 0px' }} aria-label="search">
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <SearchIcon style={{ margin :"7px" }} />
          </IconButton>
          <IconButton onClick={handleClickOpen} type="button" sx={{ padding: '10px 0px' }} aria-label="search">
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <TuneRoundedIcon  style={{ margin :"7px" }}  />
          </IconButton>
        </Paper>
        <div className='Card_map mt-4' >
            {
              products.map((item)=>{
                if(item.blocked===0)
                return(
                  <Card
                    id={item.id} 
                    name={item.name}
                    type={item.type_name} 
                    disc={item.disc}
                    rate={item.profit_rate}
                    cost_price={item.cost_price}
                    selling_price={item.selling_price}
                    image={item.images_array[0]}/>
                )
              })
            }
          </div>
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        { t("marketer.search_p") }
        </DialogTitle>
        <DialogContent>
          <form className='d-flex flex-column'>
            <TextField
          id="outlined-select-currency"
          select
          label="Select the type"
          defaultValue=""
          className='w-100 mt-4 text-secondary'
          value={type}
            onChange={(e)=>setType(e.target.value)}
          >
          <option disabled value="">Select Type</option>
          {types.map((option,key) => (
            <MenuItem key={key} value={option.name}>
              {option.name}
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
            
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{ t("emp.cancle") }</Button>
          <Button onClick={handleSearch} autoFocus>
          { t("marketer.search") }
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
        </Container>
        </div>
  </>
    )
}

