import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
