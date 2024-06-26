import React from 'react';
import { useSelector } from 'react-redux';

import Products from "../Products/Products";
import Poster from './Poster/Poster';



const Home = () => {
    const { list } = useSelector((products) => products);
    return(
        <>
            <Poster />
            <Products products={list} amount={4} title="Trending" />
            
        </>
    );
};

export default Home;