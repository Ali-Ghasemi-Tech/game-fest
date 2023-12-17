import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter basename="game-fest">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gift-cards">
            <Route path="pc" element={<Home />}>
              <Route path="steam" element={<Home />} />
              <Route path="origin" element={<Home />} />
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
  );
}

export default App;
