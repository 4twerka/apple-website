import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Basket({ currentItem, setCurrentItem }) {
  const navigate = useNavigate();
  const [value, setValue] = useState(() => {
    const savedPrice = localStorage.getItem("price");
    return savedPrice ? JSON.parse(savedPrice) : {};
  });

  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(value));
  }, [value]);

  Basket.propTypes = {
    currentItem: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
    setCurrentItem: PropTypes.func.isRequired,
  };

  const sum = currentItem.reduce((acc, currentValue) => {
    return acc + currentValue.price * (value[currentValue.id] || 1);
  }, 0);

  const tax = (sum * 8) / 100 | 0;

  const handleDelete = (id) => {
    const result = currentItem.filter((item) => item.id !== id);
    setCurrentItem(result);
  };

  const handleChange = (id, e) => {
    const newValue = Math.max(1, Number(e.target.value));
    setValue((prev) => ({ ...prev, [id]: newValue }));
  };

  const handleDeleteAll = () => {
    setCurrentItem([]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <header className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800">
          Your Basket
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Review your selected items and proceed to checkout.
        </p>
        <button className="text-blue-600 underline">
          <a href="/">Return to main page</a>
        </button>
      </header>

      {currentItem && currentItem.length > 0 ? (
        currentItem.map((item) => (
          <div key={item.name} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4 sm:p-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 sm:ml-6 mt-4 sm:mt-0">
                  <h2 className="text-lg font-medium text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{item.price} USD</p>
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0 sm:ml-auto">
                  <input
                    onChange={(e) => handleChange(item.id, e)}
                    value={value[item.id] || 1}
                    min={1}
                    type="number"
                    className="w-16 text-center border border-gray-300 rounded-md"
                  />
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-8">
          Your basket is empty. Add items to proceed.
        </p>
      )}

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mt-6">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Summary</h2>
        <div className="flex justify-between items-center text-gray-600">
          <p>Subtotal</p>
          <p>${sum}</p>
        </div>
        <div className="flex justify-between items-center text-gray-600 mt-2">
          <p>Tax (8%)</p>
          <p>${tax}</p>
        </div>
        <div className="flex justify-between items-center text-gray-800 font-semibold mt-4">
          <p>Total</p>
          <p>${sum + tax}</p>
        </div>
        {currentItem && currentItem.length > 0 ? (
          <div>
            <button onClick={() => handleDeleteAll()} className='text-red-500'>
              Remove all
            </button>
          </div>
        ) : null}
        <button
          onClick={() => {
            if (currentItem.length > 0) {
              navigate("/final-order", { state: { value } })
            } else {
              alert("You need to add something to your cart");
            }
          }}
          className="w-full bg-blue-600 text-white rounded-md py-3 mt-6 hover:bg-blue-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export { Basket };