import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import CardsCarousel from "./components/CardsCarousel/CardsCarousel";
import Subscripe from "./components/Subscripe/Subscripe";
import { useLoaderData, Await, defer } from "react-router-dom";

function Home() {
  const { products } = useLoaderData();
  return (
    <>
      <Await resolve={products}>
        {(products) => (
          <Layout>
            <HeroCarousel />
            <CardsCarousel products={products} />
            <Subscripe />
          </Layout>
        )}
      </Await>
    </>
  );
}

export default Home;

export const getHomeData = async () => {
  const response = await fetch(`${process.env.REACT_APP_SERVER}/products`);
  if (response.ok) {
    const data = await response.json();
    let products = data["data"];
    return defer({ products });
  }
};
