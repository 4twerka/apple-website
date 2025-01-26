import React, { useState } from "react";
import Recomend from "./Recomend";

function Home() {
  const navigation = [
    { name: "Store" },
    { name: "Mac" },
    { name: "AirPods" },
    { name: "Only On Apple" },
    { name: "Support" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-4 relative z-50">

        <div>
          <img src="/pictures/apple.png" alt="Apple" className="h-6" />
        </div>

        <button
          onClick={handleMenu}
          className="sm:hidden flex justify-center items-center w-8 h-8 relative z-50"
          aria-label="Toggle menu"
        >
          <div className="relative w-8 h-8">

            <span
              className={`block absolute h-1 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                isOpen ? "transform rotate-45 top-1/2 -translate-y-1/2" : "top-0"
              }`}
            ></span>

            <span
              className={`block absolute h-1 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
              }`}
            ></span>

            <span
              className={`block absolute h-1 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                isOpen ? "transform -rotate-45 bottom-1/2 translate-y-1/2" : "bottom-0"
              }`}
            ></span>
          </div>
        </button>

        <ul className="hidden sm:flex space-x-8 text-sm">
          {navigation.map((item) => (
            <li key={item.name} className="hover:underline cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center space-x-8">
          <button>
            <img src="/pictures/search.png" alt="Search" className="h-5" />
          </button>
          <button>
            <img src="/pictures/shop.png" alt="Shop" className="h-5" />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-40">
          <ul className="flex flex-col space-y-6 text-xl items-center">
            {navigation.map((item) => (
              <li
                key={item.name}
                onClick={() => setIsOpen(false)}
                className="hover:underline cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-6">
            <button onClick={() => setIsOpen(false)}>
              <img src="/pictures/search.png" alt="Search" className="h-8" />
            </button>
            <button onClick={() => setIsOpen(false)}>
              <img src="/pictures/shop.png" alt="Shop" className="h-8" />
            </button>
          </div>
        </div>
      )}

      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('/pictures/macbook-air-2020.png')",
          }}
        ></div>
        <div className="relative z-10 px-4 sm:px-8 text-white max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            The New MacBook Pro 14
          </h1>
          <p className="text-base sm:text-xl mb-8">
            Enjoy pure picture quality with Mini-LED technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-dark-custom-purple text-white rounded-full shadow-lg hover:bg-light-custom-purple text-lg sm:text-xl">
              Buy
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto border border-light-custom-purple text-light-custom-purple rounded-full transition-all duration-500 hover:bg-light-custom-purple hover:text-white text-lg sm:text-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
