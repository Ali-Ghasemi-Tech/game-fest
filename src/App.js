import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { StateProvider } from "./StateContext";
import steamProducts from "./products-object/steamProducts";
import originProducts from "./products-object/originProducts";

function App() {
  const [productList, setProductList] = useState([]);
  console.log(productList);
  function setList(list) {
    setProductList(list);
  }
  useEffect(() => {
    setTimeout(() => {
      setList(productList);
    }, 0);
  }, [productList]);

  return (
    <StateProvider productList={productList}>
      <BrowserRouter basename="game-fest">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" />
            <Route path="/gift-cards">
              <Route path="pc">
                <Route
                  path="steam"
                  element={
                    <Home productList={setList} object={steamProducts} />
                  }
                />
                <Route
                  path="origin"
                  element={
                    <Home productList={setList} object={originProducts} />
                  }
                />
              </Route>
              <Route path="console" element={<Home />}>
                <Route path="playstation" element={<Home />} />
                <Route path="xbox" element={<Home />} />
                <Route path="nintendo" element={<Home />} />
              </Route>
            </Route>
            <Route path="/accessories">
              <Route path="pc" element={<Home />}>
                <Route path="mouse" element={<Home />} />
                <Route path="keyboard" element={<Home />} />
              </Route>
              <Route path="console" element={<Home />}>
                <Route path="controller-cover" element={<Home />} />
                <Route path="console-stand" element={<Home />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
