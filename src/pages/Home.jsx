import React from "react";
import "../style/home.css";
import Navbar from "../components/Navbar";
import Layout from "./Layout";
import steamProducts from "../products-object/steamProducts";
const Home = () => {
  return (
    <>
      <Navbar />
      <Layout productArray={steamProducts} />
    </>
  );
};

export default Home;
