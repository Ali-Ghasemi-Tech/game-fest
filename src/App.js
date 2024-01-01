import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Index from "./pages/index";
import Contact from "./pages/Contact";
import { StateProvider } from "./StateContext";
import steamProducts from "./products-object/steamProducts";
import originProducts from "./products-object/originProducts";
import keyboardProduct from "./products-object/keyboardProducts";
import playstationProducts from "./products-object/playstationProducts";
import xboxProducts from "./products-object/xboxProducts";
import nintendoProducts from "./products-object/nintendoProducts";
import mouseProduct from "./products-object/mouseProducts";
import controllerCoverProduct from "./products-object/controllercoverProduct";
import consoleStandProduct from "./products-object/consoleStandProduct";

function App() {
  const allList = steamProducts.concat(
    originProducts,
    playstationProducts,
    xboxProducts,
    nintendoProducts,
    keyboardProduct,
    mouseProduct,
    controllerCoverProduct,
    consoleStandProduct
  );

  console.log(allList);
  const [productList] = useState(allList);

  return (
    <StateProvider productList={productList}>
      <BrowserRouter basename="game-fest">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Home cat="all" />} />
          <Route path="/gift-cards">
            <Route path="pc">
              <Route path="steam" element={<Home cat="steam" />} />
              <Route path="origin" element={<Home cat="origin" />} />
            </Route>
            <Route path="console" element={<Home />}>
              <Route path="playstation" element={<Home cat="playstation" />} />
              <Route path="xbox" element={<Home cat="xbox" />} />
              <Route path="nintendo" element={<Home cat="nintendo" />} />
            </Route>
          </Route>
          <Route path="/accessories">
            <Route path="pc" element={<Home cat="pc" />}>
              <Route path="mouse" element={<Home cat="mouse" />} />
              <Route path="keyboard" element={<Home cat="keyboard" />} />
            </Route>
            <Route path="console" element={<Home cat="console" />}>
              <Route
                path="controller-cover"
                element={<Home cat="controller cover" />}
              />
              <Route
                path="console-stand"
                element={<Home cat="console stand" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
