import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';

import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../store";


export default function PositionedMenu() {
    const {setLanguage,toggleMode} = modeActions;
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);
    const language = useSelector((state) => state.language);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <MenuItem   onClick={()=>dispatch(setLanguage("Ar"))}>العربية <TranslateRoundedIcon /> </MenuItem>
                <MenuItem onClick={()=>dispatch(setLanguage("En"))}>English <TranslateRoundedIcon /> </MenuItem>
                {mode==="dark" ?  (
                    <MenuItem onClick={()=>dispatch(toggleMode())}> light mode <WbSunnyRoundedIcon/> </MenuItem>
                ) : (
                    <MenuItem onClick={()=>dispatch(toggleMode())}> dark mode <NightsStaySharpIcon/> </MenuItem>
                )}
            </Menu>
        </div>
    );
}