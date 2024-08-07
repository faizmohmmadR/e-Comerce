import { Box, Grid } from "@mui/material";
import React from "react";
import Hero from "./hero/Hero";
import Categories from "./categories/Categories";
import HotDealToday from "./hotDealToday/HotDealToday";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import SpecialOffer from "./specialOffer/SpecialOffer";
import FeaturedBarands from "./featuredBrands/FeaturedBarands";
import PopularProducts from "./popularProducts/PopularProducts";
import TopProducts from "./topProducts/TopProducts";
import PopularReviews from "./popularReviews/PopularReviews";

const HomeIndex = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={11.5}>
        <Hero />
        <Categories />
        <HotDealToday />
        <FeaturedProducts />
        <SpecialOffer />
        <FeaturedBarands />
        <PopularProducts />
        <TopProducts />
        <PopularReviews />
      </Grid>
    </Grid>
  );
};

export default HomeIndex;
