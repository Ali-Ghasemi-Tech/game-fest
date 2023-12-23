import React, { useEffect } from "react";
import "../style/home.css";
import Navbar from "../components/Navbar";
import Layout from "./Layout";
const Home = ({ cat, productList, object }) => {
  useEffect(() => {
    productList(object);
  }, []);
  return (
    <>
      <Navbar />
      <Layout cat={cat} />
    </>
  );
};

export default Home;
