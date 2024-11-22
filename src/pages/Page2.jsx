import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { useEffect, useState } from "react";
import Score from "../components/Score";
import IconPicker from "../components/IconPicker"; // Mengimpor IconPicker
import RulesButton from "../components/RulesButton";
import Rules from "../components/Rules";

const Page2 = () => {
  const { state } = useLocation();
  const { selectedIcon, houseIcon } = state; // Terima state dari Page1
  const [result, setResult] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [isHouseLoading, setIsHouseLoading] = useState(true); // State untuk loading
  const [isPlayerWinner, setIsPlayerWinner] = useState(false); // State untuk menangnya player
  const [isHouseWinner, setIsHouseWinner] = useState(false); // State untuk menangnya house

  // Setup untuk navigate
  const navigate = useNavigate();

  const handleShowRules = () => setShowRules(true);
  const handleHideRules = () => setShowRules(false);

  useEffect(() => {
    // Logika untuk menentukan pemenang
    if (!isHouseLoading) {
      if (selectedIcon.id === houseIcon.id) {
        setResult("It's a tie!");
        setIsPlayerWinner(false);
        setIsHouseWinner(false);
      } else if (
        (selectedIcon.id === "scissors" && (houseIcon.id === "paper" || houseIcon.id === "lizard")) ||
        (selectedIcon.id === "paper" && (houseIcon.id === "rock" || houseIcon.id === "spock")) ||
        (selectedIcon.id === "rock" && (houseIcon.id === "scissors" || houseIcon.id === "lizard")) ||
        (selectedIcon.id === "lizard" && (houseIcon.id === "spock" || houseIcon.id === "paper")) ||
        (selectedIcon.id === "spock" && (houseIcon.id === "scissors" || houseIcon.id === "rock"))
      ) {
        setResult("You win!");
        setIsPlayerWinner(true);
        setIsHouseWinner(false);
      } else {
        setResult("You lose!");
        setIsPlayerWinner(false);
        setIsHouseWinner(true);
      }
    }
  }, [selectedIcon, houseIcon, isHouseLoading]);

  useEffect(() => {
    // Simulasi loading house pick selama 3 detik
    const timeout = setTimeout(() => {
      setIsHouseLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Fungsi untuk kembali ke Page1
  const handlePlayAgain = () => {
    navigate("/", { replace: true }); // Navigasi kembali ke halaman pertama
  };

  return (
    <div className="bg-color1 w-screen h-screen flex flex-col items-center px-4 md:px-28 md:py-4">
      <Score />

      <div className="relative w-full mt-[3vw] flex items-center justify-between">
        {/* Your Pick */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-[8vw] text-white">You Picked</h2>

          <div className="flex items-center justify-center relative">
            {/* Efek animasi jika player menang */}
            {isPlayerWinner && (
              <>
<div className="bg-gray-200 opacity-[1%] rounded-full w-[18rem] h-[18rem] absolute animate-pulse"></div>
<div className="bg-gray-200 opacity-[2%] rounded-full w-[22rem] h-[22rem] absolute animate-pulse"></div>
<div className="bg-gray-200 opacity-[10%] rounded-full w-[26rem] h-[26rem] absolute animate-pulse"></div>
              </>
            )}

            <IconPicker iconsData={[selectedIcon]} onIconClick={() => {}} useWrapper2={true} />
          </div>
        </div>

        {/* Center Result */}
        <div className="flex flex-col mt-[0vw] items-center justify-center">
          <h2 className="text-5xl font-bold text-white">{!isHouseLoading && result}</h2>
          <button className="bg-white text-color1 rounded-md px-4 py-2 mt-4 z-50" onClick={handlePlayAgain}>Play Again</button>
        </div>

        {/* House Pick */}
        <div className="text-center w-[30%] flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-[8vw] text-white">The House Pick</h2>
          {isHouseLoading ? (
            // Animasi loading titik-titik
            <div className="text-white text-4xl font-bold flex space-x-2 animate-bounce">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          ) : (
            <div className="flex items-center justify-center relative">
              {/* Efek animasi jika house menang */}
              {isHouseWinner && (
                <>
                  <div className="bg-gray1 opacity-[8%] rounded-full w-[18rem] h-[18rem] absolute animate-ping"></div>
                  <div className="bg-gray1 opacity-[6%] rounded-full w-[22rem] h-[22rem] absolute animate-ping"></div>
                  <div className="bg-gray1 opacity-[4%] rounded-full w-[26rem] h-[26rem] absolute animate-ping"></div>
                </>
              )}
              <IconPicker iconsData={[houseIcon]} onIconClick={() => {}} useWrapper2={true} />
            </div>
          )}
        </div>
      </div>

      <RulesButton onClick={handleShowRules} />
      {showRules && <Rules onClose={handleHideRules} />}
    </div>
  );
};

export default Page2;
