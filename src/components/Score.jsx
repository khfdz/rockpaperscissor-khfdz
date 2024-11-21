import Logo from "../assets/icons/logo-bonus.svg";

const Rules = () => {
    return (
        <div className="p-2 mb-12 md:mb-4 md:p-2  w-full max-w-4xl border md:border-2 border-white rounded-lg mt- flex items-center justify-between">
        <div>
          <img src={Logo} alt="logo" className="w-12 h-12 md:w-24 md:h-24" />
        </div>
        <div className="bg-white px-4 py-1 md:px-10 md:py-2 rounded-md text-center">
          <p className="text-blue-800 text-xs  md:text-md font-bold">SCORE</p>
          <p className="text-gray-500 text-4xl sm:text-5xl md:text-6xl font-bold -mt-2">
            0
          </p>
        </div>
      </div>
    )

}

export default Rules