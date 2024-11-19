import Logo from "../assets/icons/logo-bonus.svg";

const Rules = () => {
    return (
        <div className="p-2 mb-12 md:mb-4 md:p-4 w-full max-w-4xl border md:border-2 border-white rounded-lg mt-4 flex items-center justify-between">
        <div>
          <img src={Logo} alt="logo" className="w-12 h-12 md:w-32 md:h-32" />
        </div>
        <div className="bg-white px-4 py-1 md:px-14 md:py-6 rounded-md text-center">
          <p className="text-blue-800 text-xs  md:text-xl font-bold">SCORE</p>
          <p className="text-gray-500 text-4xl sm:text-5xl md:text-7xl font-bold -mt-2">
            0
          </p>
        </div>
      </div>
    )

}

export default Rules