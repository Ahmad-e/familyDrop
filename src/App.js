import 'bootstrap/dist/css/bootstrap.min.css';
import "./users/style.css";
import 'animate.css';
import './component/style.css';
import './marketer/style.css'
import './App.css';


import NavBar from './component/navbar';
import Footer from './component/footer';
import LandingPage from './users/home';
import Register from './users/auth/register';
import Signin from './users/auth/signIn';
import AboutUs from './users/aboutUs';

import EmployeeApp from './employee/App';
import EmployeeHome from './employee/home';
import EmployeeLocations from './employee/locations'
import EmployeeProducts from './employee/products'
import EmployeeOrder from './employee/orders'
import EmployeeA_P_Order from './employee/addProductOrders'
import EmployeeW_P_Order from './employee/withdrowalOrder';
import UserInfo from './employee/userInfo'
import Users from './employee/users'


import MerchantAdd from './merchant/App';
import MerchantHome from './merchant/home';
import MerchantProducts from './merchant/products'
import MerchantOrders from './merchant/orders'
import WithdrawOrder from './merchant/withdrawalOrder'
import WithdrowalmonyOrder from './employee/withdrowalmonyOrder'

import MarketerApp from './marketer/App'
import MarketerHome from './marketer/home';
import Orders from './marketer/orders'
import OrderData from './marketer/orderDate'
import Basket from './marketer/basket';
import Products from './marketer/products';


import AdminApp from './admin/App';
import AdminHome from './admin/home';
import AdminEmployee from './admin/employees';
import AdminLocations from './employee/locations';
import AdminSetting from './admin/setting'



import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "./store";


import "@fontsource/cairo";
import "@fontsource/cairo/400.css";
import ProductInfo from './marketer/productInfo';
import EmployeeCountries from './employee/Countries';
import EmployeeCities from './employee/Cities';
import EmployeeAddresses from './employee/Addresses';
import AdminCountries from './employee/Countries';
import AdminCities from './employee/Cities';
import AdminAddresses from './employee/Addresses';
import ReceiveMoney from './merchant/ReceiveMoney';
import ProductSetting from './employee/productSetting'


import Err404 from './errors/err404'


function App() {

  const darkTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Cairo',
        textTransform: 'none',
        fontSize: 15,
      },
    },
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Cairo',
        textTransform: 'none',
        fontSize: 16,
      },
    },
    
    palette: {
      mode: 'light',
    },
  });
  const mode = useSelector((state) => state.mode);
  const language = useSelector((state) => state.language);


  return (
    <ThemeProvider theme={ mode==="dark" ? darkTheme : lightTheme}>
      <div dir={language==="Ar" ? ("rtl") :("ltr") }  className={"text-lg App "+mode}>
        <BrowserRouter>
        <NavBar />
        <div className='padding-top'>
          <Routes>
            <Route>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Signin />} />
              <Route path="register" element={<Register />} />

              <Route path="about_us" element={<AboutUs />} />
              
              <Route path="admin" element={<AdminApp />} >
                <Route path="" element={<AdminHome />} />
                <Route path="employees" element={<AdminEmployee />} />
                <Route path="products" element={<EmployeeProducts />} />
                <Route path="orders" element={<EmployeeOrder />} />
                <Route path="locations" element={<AdminLocations />}>
                  <Route path="countries" element={<AdminCountries/>}/>
                  <Route path="Cities" element={<AdminCities/>}/>
                  <Route path="addresses" element={<AdminAddresses/>}/>
                </Route>
                <Route path="add_product_order" element={<EmployeeA_P_Order />} />
                <Route path="withdowal_product_order" element={<EmployeeW_P_Order />} />
                <Route path="withdowal_money_order" element={<WithdrowalmonyOrder />} />
                <Route path="users" element={<Users />} />
                <Route path="userInfo/:id" element={<UserInfo />} />
                <Route path="productSetting" element={<ProductSetting />} />
                <Route path="setting" element={<AdminSetting />} />
              </Route>

              
              <Route path="employee" element={<EmployeeApp />} >

                <Route path="" element={<EmployeeHome />} />
                <Route path="products" element={<EmployeeProducts />} />
                <Route path="orders" element={<EmployeeOrder />} />
                <Route path="locations" element={<EmployeeLocations />} >
                  <Route path="countries" element={<EmployeeCountries/>}/>
                  <Route path="cities/:id" element={<EmployeeCities/>}/>
                  <Route path="cities" element={<EmployeeCities/>}/>
                  <Route path="addresses/:id" element={<EmployeeAddresses/>}/>
                  <Route path="addresses" element={<EmployeeAddresses/>}/>
                </Route>
                <Route path="add_product_order" element={<EmployeeA_P_Order />} />
                <Route path="withdowal_product_order" element={<EmployeeW_P_Order />} />
                <Route path="withdowal_money_order" element={<WithdrowalmonyOrder />} />
                <Route path="users" element={<Users />} />
                <Route path="userInfo/:id" element={<UserInfo />} />
                <Route path="productSetting" element={<ProductSetting />} />
                
              </Route>

              <Route path="products" element={<Products />} />
              <Route path="productInfo/:id" element={<ProductInfo/>}/>
              
              <Route path="marketer" element={<MarketerApp />} >
                <Route path="" element={<MarketerHome />} />
                <Route path="products" element={<Products />} />
                <Route path="basket" element={<Basket />} />
                <Route path="orders" element={<Orders />} />
                <Route path="order/:id" element={<OrderData />} />
                <Route path="productInfo/:id" element={<ProductInfo/>}/>
                <Route path='receiveMoney' element={<ReceiveMoney/>} />
              </Route>


              <Route path="merchant" element={<MerchantAdd />} >
                <Route path="" element={<MerchantHome />} />
                <Route path="products" element={<MerchantProducts />} />
                <Route path="orders" element={<MerchantOrders />} />
                <Route path="withdrawOrder" element={<WithdrawOrder />} />
                <Route path='receiveMoney' element={<ReceiveMoney/>} />
              </Route>
              <Route path="*" element={<Err404 />} />
            </Route>
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
