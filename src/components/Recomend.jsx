import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import PropTypes from 'prop-types';


function Recomend({ setCurrentItem }) {
  Recomend.propTypes = {
    setCurrentItem: PropTypes.func.isRequired,
  };
  

  const cards = [
    {
      name: "Apple Macbook Pro 14",
      price: 1999,
      img: "/pictures/macbook-pro-14.png",
      id: Math.random()
    },
    {
      name: "MacBook Air with M2 chip",
      price: 2399,
      img: "/pictures/macbook-air-m2.png",
      id: Math.random()
    },
    {
      name: "MacBook Air with M1 chip",
      price: 2999,
      img: "/pictures/macbook-air-m1.png",
      id: Math.random()
    },
    {
      name: "Apple MacBook Pro 13",
      price: 2999,
      img: "/pictures/macbook-pro-13.png",
      id: Math.random()
    },
  ];

  const desktopCards = [
    {
      name: "Apple IMac 24 M1 chip",
      price: 1449,
      img: "https://content.rozetka.com.ua/goods/images/big/173875037.jpg",
      id: Math.random()
    },
    {
      name: "Apple IMac 24 M3 chip",
      price: 1899,
      img: "https://i.moyo.ua/img/products/5565/26_600.jpg",
      id: Math.random()
    },
    {
      name: "Apple IMac 24 M1 256gb",
      price: 1359,
      img: "https://content2.rozetka.com.ua/goods/images/big/173875373.jpg",
      id: Math.random()
    },
    {
      name: "Apple IMac 24 M4 chip",
      price: 1999,
      img: "https://content1.rozetka.com.ua/goods/images/big/485317855.jpg",
      id: Math.random()
    },
  ]

  const [isDesktop, setIsDesktop] = useState(false);

  const handleMenu = () => {
    setIsDesktop(true);
  }

  const handleMenuLaptop = () => {
    setIsDesktop(false);
  }

  const hanldeAdd = (item) => {
    setCurrentItem((prevItems) => [...prevItems, item]);
  };  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Which Mac is right for you?</h2>
        <div className="flex justify-center space-x-4 text-base sm:text-lg font-medium">
          <button
            onClick={handleMenuLaptop}
            className={isDesktop ? "text-gray-400 hover:text-black transition" : "border-b-2 border-black pb-1"}
          >
            Notebook
          </button>
          <button
            onClick={handleMenu}
            className={isDesktop ? "border-b-2 border-black pb-1" : "text-gray-400 hover:text-black transition"}
          >
            Desktop
          </button>
        </div>
      </div>
  
      {isDesktop ? (
        <div className="w-full max-w-xl md:hidden">
          <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={20} slidesPerView={1}>
            {desktopCards.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="p-8 border rounded-lg shadow-md bg-white text-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <p className="text-base font-semibold mb-2">{item.name}</p>
                  <span className="block text-lg font-bold mb-4">{item.price} USD</span>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => hanldeAdd(item)}
                      className="px-4 py-2 bg-dark-custom-purple text-white rounded-2xl shadow-md transition hover:bg-light-custom-purple"
                    >
                      Buy
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-dark-custom-purple border border-dark-custom-purple rounded-2xl shadow-md transition hover:bg-gray-300">
                      Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-6">
            <div className="swiper-pagination" />
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl md:hidden">
          <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={20} slidesPerView={1}>
            {cards.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="p-8 border rounded-lg shadow-md bg-white text-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <p className="text-base font-semibold mb-2">{item.name}</p>
                  <span className="block text-lg font-bold mb-4">{item.price} USD</span>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => hanldeAdd(item)}
                      className="px-4 py-2 bg-dark-custom-purple text-white rounded-2xl shadow-md transition hover:bg-light-custom-purple"
                    >
                      Buy
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-dark-custom-purple border border-dark-custom-purple rounded-2xl shadow-md transition hover:bg-gray-300">
                      Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-6">
            <div className="swiper-pagination" />
          </div>
        </div>
      )}
  
      {isDesktop ? (
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {desktopCards.map((item, index) => (
            <div
              key={item.name}
              className={`p-6 border rounded-lg shadow-md bg-white text-center ${
                index === desktopCards.length - 1 ? "lg:col-span-3 lg:justify-self-center" : ""
              }`}
            >
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover mb-4 rounded" />
              <p className="text-base font-semibold mb-2">{item.name}</p>
              <span className="block text-lg font-bold mb-4">{item.price} USD</span>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => hanldeAdd(item)}
                  className="px-4 py-2 bg-dark-custom-purple text-white rounded-2xl shadow-md transition hover:bg-light-custom-purple"
                >
                  Buy
                </button>
                <button className="px-4 py-2 bg-gray-200 text-dark-custom-purple border border-dark-custom-purple rounded-2xl shadow-md transition hover:bg-gray-300">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {cards.map((item, index) => (
            <div
              key={item.name}
              className={`p-6 border rounded-lg shadow-md bg-white text-center ${
                index === cards.length - 1 ? "lg:col-span-3 lg:justify-self-center" : ""
              }`}
            >
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover mb-4 rounded" />
              <p className="text-base font-semibold mb-2">{item.name}</p>
              <span className="block text-lg font-bold mb-4">{item.price} USD</span>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => hanldeAdd(item)}
                  className="px-4 py-2 bg-dark-custom-purple text-white rounded-2xl shadow-md transition hover:bg-light-custom-purple"
                >
                  Buy
                </button>
                <button className="px-4 py-2 bg-gray-200 text-dark-custom-purple border border-dark-custom-purple rounded-2xl shadow-md transition hover:bg-gray-300">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
  
      <div className="mt-8 flex justify-center gap-6 whitespace-nowrap">
        <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
          Compare all Mac models
        </a>
        <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
          Shop Mac
        </a>
      </div>
    </div>
  );  
}

export default Recomend;