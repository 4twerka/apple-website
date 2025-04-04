import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from 'prop-types';

function Airpods({ setCurrentItem, setIsAdded }) {
  Airpods.propTypes = {
    setCurrentItem: PropTypes.func.isRequired,
    currentItem: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
    )
  };

  const airpods = [
    {
      name: "AirPods 2nd generation",
      price: 129,
      img: "/pictures/airpods2.png",
      id: Math.random()
    },
    {
      name: "AirPods 3rd generation",
      price: 169,
      img: "/pictures/airpods3.png",
      id: Math.random()
    },
    {
      name: "AirPods Pro 2nd generation",
      price: 249,
      img: "/pictures/airpodspro.png",
      label: "New",
      id: Math.random()
    },
    {
      name: "AirPods Max",
      price: 549,
      img: "/pictures/airpods-max.png",
      id: Math.random()
    },
  ];

  const handleAdd = (item) => {
    setCurrentItem((prevItems) => [...prevItems, item]);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-8">
      <section className="w-full flex flex-col justify-between relative">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Which AirPods are right for you?
          </h1>
        </div>
        <div className="block md:hidden w-full">
          <div className="container mx-auto">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="custom-swiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {airpods.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[260px] mx-auto bg-white border border-gray-300 rounded-xl shadow-lg p-6 flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-32 h-32 object-contain mb-6"
                      />
                      <h2 className="text-xl font-semibold text-center mb-3">
                        {product.name}
                      </h2>
                      <p className="text-gray-700 text-base mb-3">
                        {product.price} USD
                      </p>
                    </div>
                    <div className="flex justify-between mt-6">
                      <button
                        onClick={() => handleAdd(product)}
                        className="flex-1 bg-dark-custom-purple text-white py-3 rounded-lg hover:bg-light-custom-purple mx-1 transition-all"
                      >
                        Buy
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 mx-1 transition-all">
                        <a href="https://www.apple.com">Details</a>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-8">
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full">
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {airpods.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl shadow-lg p-6"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-32 h-32 object-contain mb-6"
                  />
                  <h2 className="text-xl font-semibold text-center mb-3">
                    {product.name}
                  </h2>
                  <p className="text-gray-700 text-base mb-3">
                    {product.price} USD
                  </p>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => handleAdd(product)}
                    className="flex-1 bg-dark-custom-purple text-white py-3 rounded-lg hover:bg-light-custom-purple mx-1 transition-all"
                  >
                    Buy
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 mx-1 transition-all">
                    <a href="https://www.apple.com">Details</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.apple.com/airpods/compare/"
            className="text-blue-600 hover:underline text-base font-medium whitespace-nowrap"
          >
            Compare all AirPods models &gt;
          </a>
        </div>
      </section>
    </div>
  );  
}

export default Airpods;