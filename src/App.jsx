import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recomend from "./components/Recomend";
import Airpods from "./components/Airpods";
import AirpodsMax from "./components/AirpodsMax";
import Footer from "./components/Footer";
import { Basket } from "./pages/Basket";
import { AirpodsMaxPage } from "./pages/AirpodsMaxPage";
import { MacbookProPage } from "./pages/MacbookProPage";

function App() {
  const [currentItem, setCurrentItem] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(currentItem));
  }, [currentItem]);

  const recomendRef = useRef(null);
  const airpodsRef = useRef(null);
  const airpodsMaxRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home 
                currentItem={currentItem} 
                recomendRef={recomendRef} 
                airpodsRef={airpodsRef} 
                airpodsMaxRef={airpodsMaxRef} 
                footerRef={footerRef} 
              />
              <div ref={recomendRef}>
                <Recomend setCurrentItem={setCurrentItem} />
              </div>
              <div ref={airpodsRef}>
                <Airpods setCurrentItem={setCurrentItem} />
              </div>
              <div ref={airpodsMaxRef}>
                <AirpodsMax />
              </div>
              <div ref={footerRef}>
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/basket"
          element={
            <Basket currentItem={currentItem} setCurrentItem={setCurrentItem} />
          }
        />
        <Route path="/airpods-max" element={<AirpodsMaxPage />} />
        <Route path="/macbook-pro" element={<MacbookProPage />} />
      </Routes>
    </Router>
  );
}

export default App;