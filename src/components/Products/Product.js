import React from "react";
import "./Product.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = ({ item }) => {
    return (
        <div className="product relative flex justify-center items-center ma1">
            <div className="circle bg-white absolute"></div>
            <img className="h-75 z-2" src={item.img} />
            <div>
                <div>
                    <ShoppingCartOutlinedIcon />
                </div>
                <div>
                    <SearchOutlinedIcon />
                </div>
                <div>
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Product