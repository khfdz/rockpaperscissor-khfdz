import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pentagon from "/icons/bg-pentagon.svg";
import Rules from "../components/Rules";
import Score from "../components/Score";
import RulesButton from "../components/RulesButton";
import IconPicker from "../components/IconPicker";
import { useDispatch } from "react-redux";
import { incrementScore } from "../redux/scoreSlice"; // Pastikan action incrementScore digunakan

// Import data ikon dari JSON
import iconsData from "../assets/data/iconsData.json";



// Fungsi untuk menentukan pemenang
const determineWinner = (selectedIcon, houseIcon) => {
  if (selectedIcon.id === houseIcon.id) {
    return "tie"; // Seri
  } else if (
    (selectedIcon.id === "scissors" && (houseIcon.id === "paper" || houseIcon.id === "lizard")) ||
    (selectedIcon.id === "paper" && (houseIcon.id === "rock" || houseIcon.id === "spock")) ||
    (selectedIcon.id === "rock" && (houseIcon.id === "scissors" || houseIcon.id === "lizard")) ||
    (selectedIcon.id === "lizard" && (houseIcon.id === "spock" || houseIcon.id === "paper")) ||
    (selectedIcon.id === "spock" && (houseIcon.id === "scissors" || houseIcon.id === "rock"))
  ) {
    return "win"; // Menang
  } else {
    return "lose"; // Kalah
  }
};

// Fungsi untuk mendapatkan ikon acak untuk "House"
const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconsData.length);
  return iconsData[randomIndex];
};

const Page1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showRules, setShowRules] = useState(false);
  const handleShowRules = () => setShowRules(true);
  const handleHideRules = () => setShowRules(false);

  const handleIconClick = (iconData) => {
    const houseIcon = getRandomIcon(); // Mendapatkan icon random untuk "House"
    const result = determineWinner(iconData, houseIcon); // Menentukan pemenang
    
    // Menambahkan delay sebelum update skor
    if (result === "win") {
      setTimeout(() => {
        dispatch(incrementScore(1)); // Menambah 1 pada skor jika menang setelah 4 detik
      }, 3000); // 3000ms = 3 detik
    }

    // Navigasi ke halaman berikutnya, kirim data pemenang, ikon yang dipilih, dan ikon lawan
    navigate("/page2", { state: { selectedIcon: iconData, houseIcon, result } });
  };

  return (
    <div className="bg-color1 w-full h-screen  flex flex-col items-center px-4 md:px-28 md:py-4">
      <Score /> {/* Menampilkan score dari Redux */}

      <div className="relative w-[70vw] md:w-[25vw] aspect-square mt-[4vw] flex items-center justify-center">
        <img
          src={Pentagon}
          alt="Pentagon Background"
          className="absolute w-full h-full object-contain"
        />

        {/* IconPicker Component */}
        <IconPicker iconsData={iconsData} onIconClick={handleIconClick} />
      </div>


        <RulesButton onClick={handleShowRules} />
      {showRules && <Rules onClose={handleHideRules} />}
    </div>
  );
};

export default Page1;
