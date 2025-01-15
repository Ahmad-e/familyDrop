import { createSlice, createStore } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        mode: (Cookies.get("color_mode") ? (Cookies.get("color_mode")) : "light" ),
        language: (Cookies.get("lang_mode") ? (Cookies.get("lang_mode")) :"En" ),
        token: Cookies.get("token_drop"),
        account: Cookies.get("acc_num_drop"),
        id: Cookies.get("iD_drop"),
        apiURL:"https://api.familydroop.com/api/"
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
        setAccount : (state,value)=>{
            Cookies.set("acc_num_drop",value.payload,{expires: 70})
            state.account = value.payload;

            if(value.payload===1)
                window.location.href = '/admin';
            else if(value.payload===2)
                window.location.href = '/employee';
            if(value.payload===3)
                window.location.href = '/marketer';
            else if(value.payload===4)
                window.location.href = '/merchant';
        },
        setUserId : (state,value)=>{
            Cookies.set("iD_drop",value.payload,{expires: 70})
            state.id = value.payload;
        },
        setToken : (state,value)=>{
            Cookies.set("token_drop",value.payload,{expires: 70})
            state.token = value.payload;
        },
        logout : (state)=>{
            Cookies.set("token_drop", undefined ,{expires: 70})
            state.token = undefined

            Cookies.set("iD_drop",undefined,{expires: 70})
            state.id = undefined;

            Cookies.set("acc_num_drop",undefined,{expires: 70})
            state.account = undefined;

            window.location.href="/"

        }

    }
})

const store = createStore(modeSlice.reducer);
export const modeActions = modeSlice.actions;

export default store;
