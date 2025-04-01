import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

function Home({ currentItem, recomendRef, airpodsRef, airpodsMaxRef, footerRef }) {
  Home.propTypes = {
    currentItem: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
    recomendRef: PropTypes.object,
    airpodsRef: PropTypes.object,
    airpodsMaxRef: PropTypes.object,
    footerRef: PropTypes.object,
  };

  const navigation = [
    { name: "Mac", ref: recomendRef },
    { name: "AirPods", ref: airpodsRef },
    { name: "Only On Apple", ref: airpodsMaxRef },
    { name: "Support", ref: footerRef },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-4 py-3 sm:px-8 sm:py-4 relative z-50">
        <div className="flex-shrink-0">
          <img src="/pictures/apple.png" alt="Apple" className="h-5 sm:h-5" />
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
                isOpen
                  ? "transform -rotate-45 bottom-1/2 translate-y-1/2"
                  : "bottom-0"
              }`}
            ></span>
          </div>
        </button>

        <ul className="hidden sm:flex space-x-6 text-sm">
          {navigation.map((item) => (
            <li
              key={item.name}
              onClick={() => handleScroll(item.ref)}
              className="hover:underline cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center">
          <Link to="/basket" className="relative inline-block">
            <img src="/pictures/shop.png" alt="Shop" className="h-5 sm:h-6" />
            {currentItem.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {currentItem.length}
              </span>
            )}
          </Link>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-10 z-40">
          <ul className="flex flex-col space-y-6 text-2xl items-center">
            {navigation.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  handleScroll(item.ref);
                  setIsOpen(false);
                }}
                className="hover:underline cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <Link
              to="/basket"
              className="relative inline-block"
              onClick={() => setIsOpen(false)}
            >
              <img src="/pictures/shop.png" alt="Shop" className="h-6" />
              {currentItem.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {currentItem.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}

      <section className="relative h-screen flex items-center justify-center text-center">
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover bg-[url('/pictures/macbookForPhone.jpg')] sm:bg-[url('/pictures/macbook-air-2020.png')]"
          ></div>
        <div className="relative z-10 px-4 sm:px-8 text-white max-w-md sm:max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            The New MacBook Pro 14
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-8">
            Enjoy pure picture quality with Mini-LED technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/macbook-pro" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3 bg-dark-custom-purple text-white rounded-full shadow-xl text-lg font-bold transition-all duration-300 hover:bg-light-custom-purple sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl">
                Buy
              </button>
            </Link>
            <Link to="/macbook-pro" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3 border border-light-custom-purple text-light-custom-purple rounded-full shadow-xl text-lg font-bold transition-all duration-300 hover:bg-light-custom-purple hover:text-white sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;