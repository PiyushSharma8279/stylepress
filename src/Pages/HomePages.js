import React, { useEffect } from "react";
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import PopularItems from '../Components/Home/PopularItems'
import SingleProduct from '../Components/Home/OurLastItem'
import Testimonials from '../Components/Home/Testimonial'
import Newsletter from '../Components/Home/NewsLetter'
import TrendingItems from '../Components/Home/TrendingItems'
import OverSizedTshirts from '../Components/Home/OverSizedTshirts'

function HomePages() {
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <Header/>
        <Home/>
        <PopularItems/>
        <TrendingItems/>
        <OverSizedTshirts/>
        <SingleProduct/>
        <Testimonials/>
        <Newsletter/>
        </>
    )
}

export default HomePages
