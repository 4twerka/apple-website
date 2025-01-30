import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from 'prop-types';

function Airpods({ setCurrentItem }) {
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
      price: 449,
      img: "/pictures/airpods-max.png",
      id: Math.random()
    },
  ];

  const handleAdd = (item) => {
    setCurrentItem((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-8">
      <section className="w-full flex flex-col justify-between relative">
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
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
                  <div className="w-[240px] mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4 flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-28 h-28 object-contain mb-4"
                      />
                      <h2 className="text-lg font-semibold text-center mb-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-700 text-sm mb-2">
                        {product.price} USD
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <button onClick={() => handleAdd(product)} className="flex-1 bg-dark-custom-purple text-white py-2 rounded-lg hover:bg-light-custom-purple mx-1 transition-all">
                        Buy
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 mx-1 transition-all">
                        Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="hidden md:block w-full">
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {airpods.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-md p-4"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-28 h-28 object-contain mb-4"
                  />
                  <h2 className="text-lg font-semibold text-center mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-700 text-sm mb-2">{product.price} USD</p>
                </div>
                <div className="flex justify-between mt-4">
                  <button onClick={() => handleAdd(product)} className="flex-1 bg-dark-custom-purple text-white py-2 rounded-lg hover:bg-light-custom-purple mx-1 transition-all">
                    Buy
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 mx-1 transition-all">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Compare all AirPods models &gt;
          </a>
        </div>
      </section>
    </div>
  );
}

export default Airpods;