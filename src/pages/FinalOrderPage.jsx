import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function FinalOrderPage({ currentItem, setCurrentItem }) {
    const navigate = useNavigate();

    FinalOrderPage.propTypes = {
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

    const sum = currentItem.reduce((acc, currentValue) => acc + currentValue.price, 0);
    const tax = (sum * 8) / 100 | 0;

    const handleOrderConfirm = (e) => {
        e.preventDefault();
        setCurrentItem([]);
        setTimeout(() => {
            navigate("/");
        }, 1500)
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center p-4">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ordering</h2>

                <div className="bg-gray-200 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">Your order:</h3>
                    <div className="mt-3 space-y-3">
                        {currentItem.map((item) => (
                            <div key={item.id} className="flex items-center bg-white shadow-sm p-3 rounded-md">
                                <img src={item.img} alt="order" className="w-16 h-16 object-contain rounded-md mr-4 border"/>
                                <div className="flex-1">
                                    <p className="text-gray-800 font-medium">{item.name}</p>
                                    <p className="text-gray-600 text-sm">{item.price} USD</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <form className="space-y-4" onSubmit={handleOrderConfirm}>
                    <div className="bg-gray-100 p-4 rounded-md mt-4 flex justify-between items-center shadow-sm">
                        <span className="text-lg font-semibold text-gray-700">Total:</span>
                        <span className="text-xl font-bold text-blue-600 bg-blue-100 px-4 py-2 rounded-md">${sum + tax}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input required type="text" placeholder="Name" className="w-full outline-none p-2 border border-gray-300 rounded-md" />
                        <input required type="text" placeholder="Surname" className="w-full outline-none p-2 border border-gray-300 rounded-md" />
                    </div>
                    <input required type="tel" placeholder="Phone number" className="w-full outline-none p-2 border border-gray-300 rounded-md" />
                    <input required type="email" placeholder="Email" className="w-full outline-none p-2 border border-gray-300 rounded-md" />
                    <input required type="text" placeholder="Shipping addresses" className="w-full outline-none p-2 border border-gray-300 rounded-md" />
                    
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Confirm order
                    </button>
                </form>
            </div>
        </div>
    );
}

export { FinalOrderPage };