import React, { useEffect } from "react";
import "../style/home.css";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
const Home = ({ cat, selectList, object }) => {
  useEffect(() => {
    if (!object) return;
    selectList(object);
  }, [object]);
  return (
    <>
      <Navbar />
      <Layout cat={cat} />
    </>
  );
};

export default Home;
