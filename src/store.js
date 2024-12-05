import { createSlice, createStore } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        mode: Cookies.get("color_mode"),
        language: Cookies.get("lang_mode"),
        token: Cookies.get("token_drop"),
        account: Cookies.get("acc_num_drop"),
        apiURL:""
    },
    reducers: {
        toggleMode : (state)=>{
            if(state.mode==="light")
            {
                Cookies.set("color_mode","dark",{expires: 70})
                state.mode = "dark";
            }
            else
            {
                Cookies.set("color_mode","light",{expires: 70})
                state.mode = "light";
            }
        },
        setLanguage : (state,value)=>{
            Cookies.set("lang_mode",value.payload,{expires: 70})
            state.language = value.payload;
        },
        setAcc : (state,value)=>{
            Cookies.set("acc_num_drop",value.payload,{expires: 70})
            state.account = value.payload;

            if(value.payload===1)
                window.location.href = '/admin';
            else if(value.payload===2)
                window.location.href = '/profile';
        }

    }
})

const store = createStore(modeSlice.reducer);
export const modeActions = modeSlice.actions;

export default store;
