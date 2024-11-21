import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pentagon from "../assets/icons/bg-pentagon.svg";
import Icon1 from "../assets/icons/icon-scissors.svg";
import Icon2 from "../assets/icons/icon-paper.svg";
import Icon3 from "../assets/icons/icon-rock.svg";
import Icon4 from "../assets/icons/icon-lizard.svg";
import Icon5 from "../assets/icons/icon-spock.svg";
import Rules from "../components/Rules";
import Score from "../components/Score";

const Page1 = () => {
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi
  const handleShowRules = () => setShowRules(true);
  const handleHideRules = () => setShowRules(false);

  // Data untuk ikon yang digunakan
  const iconsData = [
    { id: "scissors", icon: Icon1, label: "Scissors", bgColor: "bg-yellow2", borderColor: "bg-yellow1" },
    { id: "paper", icon: Icon2, label: "Paper", bgColor: "bg-blue2", borderColor: "bg-blue1" },
    { id: "rock", icon: Icon3, label: "Rock", bgColor: "bg-red2", borderColor: "bg-red1" },
    { id: "lizard", icon: Icon4, label: "Lizard", bgColor: "bg-purple2", borderColor: "bg-purple1" },
    { id: "spock", icon: Icon5, label: "Spock", bgColor: "bg-cyan2", borderColor: "bg-cyan1" },
  ];

  // Fungsi untuk navigasi ke Page2 dengan mengirimkan komponen wrapper beserta ikon
  const handleIconClick = (iconData) => {
    navigate("/page2", { state: { selectedIcon: iconData } }); // Mengirimkan data ikon dan wrapper-nya
  };

  return (
    <div className="bg-color1 min-h-screen flex flex-col items-center px-4 md:px-28 md:py-4">
      <Score />

      {/* Pentagon Container */}
      <div className="relative w-[70vw] md:w-[25vw] aspect-square mt-[4vw] flex items-center justify-center">
        {/* Background Pentagon */}
        <img
          src={Pentagon}
          alt="Pentagon Background"
          className="absolute w-full h-full object-contain"
        />

        {/* Icons Container */}
        <div className="grid grid-cols-3 grid-rows-3 gap-[25%] relative w-full h-full">
          {iconsData.map((iconData, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${getIconPositionClass(index)}`}
              onClick={() => handleIconClick(iconData)} // Menangani klik pada ikon
            >
              <IconWrapper {...iconData} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-full">
        <button
          className="absolute -bottom-10 -right-20 text-white text-sm md:text-xl border border-white rounded-md py-1 px-8"
          onClick={handleShowRules}
        >
          Rules
        </button>
      </div>

      {showRules && <Rules onClose={handleHideRules} />}
    </div>
  );
};

/**
 * Reusable Icon Wrapper Component
 */
const IconWrapper = ({ bgColor, borderColor, icon, label }) => {
  return (
    <div className={`${bgColor} rounded-full w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center relative`}>
      <div className={`${borderColor} rounded-full w-[4.5rem] h-[4.5rem] md:w-[7rem] md:h-[7rem] md:-mt-[0.5rem] flex items-center justify-center`}>
        <div className="bg-gray1 rounded-full w-[3.5rem] h-[3.5rem] md:w-[5.5rem] md:h-[5.5rem] flex items-center justify-center -mt-[0.2rem]">
          <div className="bg-white rounded-full w-[3rem] h-[3rem] md:w-[5.5rem] md:h-[5.5rem] mt-[0.5rem] flex items-center justify-center">
            <img src={icon} alt={label} className="w-[2rem] md:w-[2.5rem] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Menentukan posisi grid berdasarkan index
 */
const getIconPositionClass = (index) => {
  switch (index) {
    case 0: return "col-span-3 row-span-1"; // Scissors (Top)
    case 1: return "md:mr-[50%] md:-mt-[5vw] col-span-1 row-span-1"; // Lizard (Left Middle)
    case 2: return "md:ml-[50%] md:-mt-[5vw] col-start-3 row-span-1"; // Spock (Right Middle)
    case 3: return "md:-mr-[5vw] md:-mt-[1vw] col-span-1 row-start-3"; // Rock (Bottom Left)
    case 4: return "md:-ml-[5vw] md:-mt-[1vw] col-start-3 row-start-3"; // Paper (Bottom Right)
    default: return "";
  }
};

export default Page1;
