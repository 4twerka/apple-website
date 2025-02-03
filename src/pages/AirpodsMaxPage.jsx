import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AirpodsMaxPage({ setCurrentItem }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemAirpods = {
    name: "AirPods Max",
    price: 599,
    img: "/pictures/airpods-max.png",
    id: Math.random(),
  };

  const handleAddAirpods = () => {
    setCurrentItem([itemAirpods])
  }

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
        poster="/pictures/bg-airpodsmax.png"
        disablePictureInPicture
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="/pictures/airpodsmax.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {itemAirpods.name}
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Experience immersive, high-fidelity audio.
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white mb-6">
            {itemAirpods.price}$
          </p>
          <Link to="/basket">
            <button onClick={handleAddAirpods} className="bg-white text-black py-3 px-8 rounded-full text-sm md:text-base hover:bg-gray-200 transition duration-300">
              Buy Now
            </button>
          </Link>
        </div>
      </header>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Redefine Your Audio Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/pictures/girl-with-max.jpg"
                alt="AirPods Max"
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
                      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Adaptive EQ</h3>
                  <p className="text-gray-700">
                    Automatically tunes music to the shape of your ear for a rich, consistent listening experience.
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
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Active Noise Cancellation</h3>
                  <p className="text-gray-700">
                    Blocks external noise to immerse you fully in your favorite tracks.
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
                      d="M9 19V6l12-2v13"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Spatial Audio</h3>
                  <p className="text-gray-700">
                    Creates a theater-like experience for your favorite movies and shows.
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
            Ready to Elevate Your Sound?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Discover the perfect blend of design and performance with AirPods Max.
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

AirpodsMaxPage.propTypes = {
  setCurrentItem: PropTypes.func.isRequired,
};

export { AirpodsMaxPage };