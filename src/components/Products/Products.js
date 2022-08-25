import React from "react";
import { popularProducts } from "../../data";
import Product from "./Product";
import styled from "styled-components";


const Products = () => {
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