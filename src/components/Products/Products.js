import React, { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import Product from "./Product";
import styled from "styled-components";
import axios from "axios";


const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res)
            } catch (err) {

            }
        }
        getProducts();
    }, [cat])

    return (
        <Container className="pa4 flex justify-between flex-wrap">
            {
                popularProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))
            }
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "pa4 flex justify-between flex-wrap"
})``;

export default Products