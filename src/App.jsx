import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Recomend from './components/Recomend'
import Airpods from './components/Airpods'
import AirpodsMax from './components/AirpodsMax'
import Footer from './components/Footer'
import { Basket } from './pages/Basket'

function App() {
  const [currentItem, setCurrentItem] = useState([]);

  return (
    <>
      <Home />
      <Recomend setCurrentItem={setCurrentItem} />
      <Airpods />
      <AirpodsMax />
      <Footer />
      <Basket currentItem={currentItem} />
    </>
  );
}

export default App;