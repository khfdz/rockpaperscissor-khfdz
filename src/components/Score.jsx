import { useSelector } from "react-redux";  // Untuk mengambil state dari Redux
import Logo from "/icons/logo-bonus.svg";

const Score = () => {
  // Mengambil nilai score dari Redux store
  const score = useSelector((state) => state.score.score);

  return (
    <div className="p-2 mb-12 md:mb-4 md:p-4 w-[80%] max-w-4xl border md:border-2 border-white rounded-lg mt-2 flex items-center justify-between">
      <div>
        <img src={Logo} alt="logo" className="w-12 h-12 md:w-24 md:h-24" />
      </div>
      <div className="bg-white px-4 py-1 md:px-10 md:py-2 rounded-md text-center">
        <p className="text-blue-800 text-xs md:text-md mb-2 font-bold">SCORE</p>
        <p className="text-gray-500 text-4xl sm:text-5xl md:text-6xl font-bold -mt-2">
          {/* Tampilkan nilai score */}
          {score}
        </p>
      </div>
    </div>
  );
};

export default Score;
