import * as React from 'react';
import { useTranslation } from 'react-i18next';
import DensitySmallRoundedIcon from '@mui/icons-material/DensitySmallRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PublicIcon from '@mui/icons-material/Public';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';


import ColorLensIcon from '@mui/icons-material/ColorLens';

import { IconButton } from '@mui/material';

export default function Products(){
    const { t } = useTranslation();

    const [open,setOpen] = React.useState(false)

    return(
        <>
        <div className={ (open ? ("open_Admin_nav") :("close_Admin_nav")) + ' Admin_nav'}>
            <div style={!open ? {display:"block"} :{}} className="top_nav_item">
                <span hidden={!open}> { t("navBar.family_drop") } </span>
                <IconButton onClick={()=>setOpen(!open)}>
                    <DensitySmallRoundedIcon style={{ fontSize:"30px" ,textAlign:"center" }} />
                </IconButton>
            </div>

            <div onClick={()=>window.location.href="/employee"} className="nav_item">
                <HomeRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.Dashboard") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/products"} className="nav_item">
                <StoreRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.Products") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/productSetting"} className="nav_item">
                <ColorLensIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.productSetting") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/orders"} className="nav_item">
                <ViewListRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.orders") } </span>
            </div>

            <div onClick={()=>window.location.href="/employee/users"} className="nav_item">
                <GroupRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.users") } </span>
            </div>
            
            <div onClick={()=>window.location.href="/employee/locations"} className="nav_item">
                <PublicIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.locations") } </span>
            </div>

            <div onClick={()=>window.location.href="/employee/add_product_order"} className="nav_item">
                <CreateNewFolderIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.addproductorder") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/withdowal_product_order"} className="nav_item">
                <FolderDeleteIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.WithdrawalOrder") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/withdowal_money_order"} className="nav_item">
                <PaidRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span hidden={!open} > { t("navBar.WithdrawalMonyOrder") } </span>
            </div>
        </div>
        </>
    )
}