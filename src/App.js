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


import EmployeeApp from './employee/App';
import EmployeeHome from './employee/home';

import MerchantAdd from './merchant/App';
import MerchantHome from './merchant/home';


import MarketerApp from './marketer/App'
import MarketerHome from './marketer/home';

import AdminApp from './admin/App';
import AdminHome from './admin/home';



import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "./store";


import "@fontsource/cairo";
import "@fontsource/cairo/400.css";



function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const mode = useSelector((state) => state.mode);
  const language = useSelector((state) => state.language);


  return (
    <ThemeProvider theme={ mode==="dark" ? darkTheme : lightTheme}>
      <div dir={language==="Ar" ? ("rtl") :("ltr") }  className={"text-xl App "+mode}>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Signin />} />
              <Route path="register" element={<Register />} />

              
              <Route path="admin" element={<AdminApp />} >
                <Route path="" element={<AdminHome />} />
              </Route>

              
              <Route path="employee" element={<EmployeeApp />} >
                <Route path="" element={<EmployeeHome />} />
              </Route>


              <Route path="marketer" element={<MarketerApp />} >
                <Route path="" element={<MarketerHome />} />
              </Route>


              <Route path="merchant" element={<MerchantAdd />} >
                <Route path="" element={<MerchantHome />} />
              </Route>


            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
