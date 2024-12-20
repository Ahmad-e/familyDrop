
import { useTranslation } from 'react-i18next';
import DensitySmallRoundedIcon from '@mui/icons-material/DensitySmallRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PublicIcon from '@mui/icons-material/Public';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import { IconButton } from '@mui/material';

export default function Products(){
    const { t } = useTranslation();

    return(
        <div>
            <div className="top_nav_item">
                <span> { t("navBar.family_drop") } </span>
                <IconButton>
                    <DensitySmallRoundedIcon style={{ fontSize:"30px"}} />
                </IconButton>
            </div>

            <div onClick={()=>window.location.href="/employee"} className="nav_item">
                <HomeRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span > { t("navBar.Dashboard") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/products"} className="nav_item">
                <StoreRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span > { t("navBar.Products") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/orders"} className="nav_item">
                <ViewListRoundedIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span > { t("navBar.orders") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/locations"} className="nav_item">
                <PublicIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span > { t("navBar.locations") } </span>
            </div>

            <div onClick={()=>window.location.href="/employee/add_product_order"} className="nav_item">
                <CreateNewFolderIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span > { t("navBar.addproductorder") } </span>
            </div>
            <div onClick={()=>window.location.href="/employee/withdowal_product_order"} className="nav_item">
                <FolderDeleteIcon style={{ fontSize:"28px", margin:"0px 12px" }} />
                <span > { t("navBar.WithdrawalOrder") } </span>
            </div>
        </div>
    )
}