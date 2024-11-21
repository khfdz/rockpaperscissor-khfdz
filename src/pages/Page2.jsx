import { useLocation } from "react-router-dom";
import Score from "../components/Score";

const Page2 = () => {
  const location = useLocation(); // Mengambil data yang dikirim melalui navigasi
  const { selectedIcon } = location.state || {}; // Mengambil data ikon yang dikirim

  // Pastikan selectedIcon ada sebelum mencoba untuk menampilkan
  if (!selectedIcon) {
    return <div>Data tidak ditemukan</div>;
  }

  const { icon, bgColor, borderColor, label } = selectedIcon;

  // Fungsi IconWrapper yang sama dengan yang digunakan di Page1
  const IconWrapper = ({ bgColor, borderColor, icon }) => (
    <div className={`${bgColor} rounded-full w-[5rem] h-[5rem] md:w-[15rem] md:h-[15rem] flex items-center justify-center relative`}>
      <div className={`${borderColor} rounded-full w-[4.5rem] h-[4.5rem] md:w-[15rem] md:h-[15rem] md:-mt-[1rem] flex items-center justify-center`}>
        <div className="bg-gray1 rounded-full w-[3.5rem] h-[3.5rem] md:w-[11rem] md:h-[11rem] flex items-center justify-center -mt-[0.5rem]">
          <div className="bg-white rounded-full w-[3rem] h-[3rem] md:w-[11rem] md:h-[11rem] mt-[1rem] flex items-center justify-center">
            <img src={icon} alt="Icon" className="w-[2rem] md:w-[5rem] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-color1 min-h-screen flex flex-col items-center px-4 md:px-28 md:py-4">
      <Score  />

    <div className="mt-8">

    
      {/* Teks di tengah */}
      <div className="flex items-center justify-center mb-6">
       
        {/* Ikon Kiri */}
        <div className="mr-6">
            <p className="mb-8 text-xl text-white">You Picked</p>
          <IconWrapper bgColor={bgColor} borderColor={borderColor} icon={icon} />
        </div>

        {/* Teks You Lose / Play Again */}
        <div className="text-white text-3xl">
            
           <p>You Lose</p> 
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Play Again</button>

            </div>

        {/* Ikon Kanan */}
        <div className="ml-6 ">
            <p className="mb-8 text-xl text-white">The House Picked</p>
          <IconWrapper bgColor={bgColor} borderColor={borderColor} icon={icon} />
        </div>
      </div>

      {/* Tombol Play Again */}
     
    </div>
    </div>
  );
};

export default Page2;
