import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recomend from "./components/Recomend";
import Airpods from "./components/Airpods";
import AirpodsMax from "./components/AirpodsMax";
import Footer from "./components/Footer";
import { Basket } from "./pages/Basket";

function App() {
  const [currentItem, setCurrentItem] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(currentItem));
  }, [currentItem]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home currentItem={currentItem}/>
            <Recomend setCurrentItem={setCurrentItem} />
            <Airpods setCurrentItem={setCurrentItem} />
            <AirpodsMax />
            <Footer />
          </>
        } />
        <Route path="/basket" element={<Basket currentItem={currentItem} setCurrentItem={setCurrentItem} />} />
      </Routes>
    </Router>
  );
}

export default App;