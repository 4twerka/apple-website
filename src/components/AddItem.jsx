import { CheckCircle } from "lucide-react";
import PropTypes from "prop-types"; 

function AddItem({isAdded}) {
    return (
        <div
      className={`fixed z-50 top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-xl items-center space-x-3 border border-gray-200
      transition-opacity transition-transform duration-300 ease-in-out
      ${isAdded ? "flex opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
        <CheckCircle className="text-green-500" />
        <span className="text-gray-700 font-medium">Item added to cart</span>
      </div>
    );
}

AddItem.propTypes = {
    isAdded: PropTypes.bool.isRequired,
  };

export { AddItem }