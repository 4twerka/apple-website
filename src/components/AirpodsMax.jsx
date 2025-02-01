import { useNavigate } from "react-router-dom";

function AirpodsMax() {
  const navigate = useNavigate();
  const background = "/pictures/bg-airpodsmax.png";

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className="text-center">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-8">
          AirPods Max
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
          <button
            onClick={() => navigate("/airpods-max")}
            className="px-6 sm:px-10 py-3 bg-dark-custom-purple text-white text-lg rounded-full hover:bg-light-custom-purple transition-all min-w-[150px]"
          >
            Buy
          </button>
        </div>
      </section>
    </div>
  );
}

export default AirpodsMax;