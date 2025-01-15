import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LogoutIcon from '@mui/icons-material/Logout';

import { useDispatch , useSelector } from 'react-redux';
import {modeActions} from "../store";
import { useTranslation } from 'react-i18next';

export default function PositionedMenu() {
    const { t , i18n } = useTranslation();
    const {setLanguage,toggleMode,logout} = modeActions;
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);
    var account=useSelector((state) => state.account);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const changeLanguage=(lang)=>{
        i18n.changeLanguage(lang);
        dispatch(setLanguage(lang));
    }

    const logOut=()=>{
        dispatch(logout())
    }

    return (
        <div>
            <button
                onClick={handleClick}
                className='setting_button'
            >
                <SettingsIcon style={{ fontSize:"30px" }} />
            </button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem   onClick={()=>changeLanguage("Ar")}>العربية <TranslateRoundedIcon /> </MenuItem>
                <MenuItem onClick={()=>changeLanguage("En")}>English <TranslateRoundedIcon /> </MenuItem>
                {mode==="dark" ?  (
                    <MenuItem onClick={()=>dispatch(toggleMode())}>{ t("header.lm") } <WbSunnyRoundedIcon/> </MenuItem>
                ) : (
                    <MenuItem onClick={()=>dispatch(toggleMode())}> { t("header.dm") } <NightsStaySharpIcon/> </MenuItem>
                )}
                 <MenuItem hidden={!(account ==='1'  || account==="2" || account ==='3'  || account==="4")} onClick={()=>logOut()}> { t("header.logOut") } <LogoutIcon /> </MenuItem>
            </Menu>
        </div>
    );
}