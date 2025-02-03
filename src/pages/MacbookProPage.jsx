import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MacbookProPage({ setCurrentItem }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemMac = {
    name: "MacBook Air with M1 chip",
    price: 2999,
    img: "/pictures/macbook-air-m1.png",
    id: Math.random(),
  };

  const handleAddMac = () => {
    setCurrentItem([itemMac]);
  };

  return (
    <div className="bg-white text-gray-900">
      <header className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
        <Link
          to="/"
          className="absolute top-4 left-4 z-20 text-white py-2 px-4 rounded-full text-sm transition duration-300"
        >
          <img src="/pictures/apple.png" alt="Home" />
        </Link>
        <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"            
        poster="/pictures/macbook-poster.jpg" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="/pictures/macbook.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {itemMac.name}
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Power. Performance. Precision.
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white mb-6">
            {itemMac.price}$
          </p>
          <Link to="/basket">
            <button
              onClick={handleAddMac}
              className="bg-white text-black py-3 px-8 rounded-full text-sm md:text-base hover:bg-gray-200 transition duration-300"
            >
              Buy Now
            </button>
          </Link>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unleash Your Creativity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/pictures/macbookBg.jpg"
                alt="MacBook Pro"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-10 w-10 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">M3 Pro/Max Chip</h3>
                  <p className="text-gray-700">
                    Experience blazing-fast performance and advanced graphics.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-10 w-10 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">
                    Liquid Retina XDR Display
                  </h3>
                  <p className="text-gray-700">
                    Enjoy stunning visuals with exceptional brightness and contrast.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-10 w-10 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Enhanced Battery Life</h3>
                  <p className="text-gray-700">
                    Work longer without worrying about recharging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Elevate your productivity and creativity with the new MacBook Pro.
          </p>
          <Link to="/">
            <button className="bg-white text-black py-3 px-8 rounded-full text-sm md:text-base hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      <footer className="py-8 bg-gray-100 text-center">
        <p className="text-sm text-gray-600">&copy; 2025 Apple Inc.</p>
      </footer>
    </div>
  );
}

MacbookProPage.propTypes = {
  setCurrentItem: PropTypes.func.isRequired,
};

export { MacbookProPage };