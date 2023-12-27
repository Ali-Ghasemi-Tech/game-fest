import React, { useEffect } from "react";
import "../style/home.css";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
const Home = ({ cat }) => {
  return (
    <>
      <Navbar />
      <Layout cat={cat} />
    </>
  );
};

export default Home;
