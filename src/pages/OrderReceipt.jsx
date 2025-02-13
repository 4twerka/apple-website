import { useNavigate } from "react-router-dom";

function OrderReceipt() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold text-gray-800">Your Order is Ready!</h2>
                <p className="mt-1 text-2xl font-bold text-gray-900 tracking-widest">{Math.random()}</p>
                <p className="text-gray-600 mt-2">Thank you for your purchase.</p>

                <button 
                    onClick={() => navigate("/")} 
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export { OrderReceipt };
