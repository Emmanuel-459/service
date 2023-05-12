import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Journal } from "./Journal/Journal";
import { Receipt } from "./Receipt/Receipt";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Receipt />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    </HashRouter>
  );
}

export { App };
