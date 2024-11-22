import PropTypes from 'prop-types';



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

const IconWrapper = ({ bgColor, borderColor, icon, label }) => {
    console.log("IconWrapper Props:", { bgColor, borderColor, icon, label });
  
    return (
      <div className={`${bgColor}  rounded-full w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center relative`}>
        <div className={`${borderColor}   rounded-full w-[4.5rem] h-[4.5rem] md:w-[7rem] md:h-[7rem] md:-mt-[0.5rem] flex items-center justify-center`}>
          <div className="bg-gray1 rounded-full w-[3.5rem] h-[3.5rem] md:w-[5.5rem] md:h-[5.5rem] flex items-center justify-center -mt-[0.2rem]">
            <div className="bg-white rounded-full w-[3rem] h-[3rem] md:w-[5.5rem] md:h-[5.5rem] mt-[0.5rem] flex items-center justify-center">
              <img src={icon} alt={label} className="w-[2rem] md:w-[2.5rem] h-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  

IconWrapper.propTypes = {
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const IconWrapper2 = ({ bgColor, borderColor, icon, label }) => {
    console.log("IconWrapper2 Props:", { bgColor, borderColor, icon, label });
  
    return (
      <div className="w-[6rem] h-[6rem] md:w-[20rem] md:h-[20rem] flex items-center justify-center relative">
        <div className={`${bgColor} rounded-full w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] flex items-center justify-center relative`}>
          <div className={`${borderColor} rounded-full w-[5.5rem] h-[5.5rem] md:w-[15rem] md:h-[15rem] md:-mt-[1rem] flex items-center justify-center`}>
            <div className="bg-gray1 rounded-full w-[4.5rem] h-[4.5rem] md:w-[11rem] md:h-[11rem] flex items-center justify-center -mt-[0.2rem]">
              <div className="bg-white rounded-full w-[4rem] h-[4rem] md:w-[11rem] md:h-[11rem] mt-[1rem] flex items-center justify-center">
                <img src={icon} alt={label} className="w-[2.5rem] md:w-[5rem] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

IconWrapper2.propTypes = {
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const IconPicker = ({ iconsData, onIconClick, useWrapper2 = false }) => {
  // Choose Wrapper based on useWrapper2 prop
  const Wrapper = useWrapper2 ? IconWrapper2 : IconWrapper;
  console.log("iconsData:", iconsData);

  return (
    <div
      className={useWrapper2
        ? "flex items-center justify-center w-full h-full" // Wrapper2 doesn't require grid
        : "grid grid-cols-3 grid-rows-3 gap-[25%] relative w-full h-full"} // Default layout
    >
      {iconsData.map((iconData, index) => (
        <div
          key={index}
          className={
            useWrapper2
              ? "flex items-center justify-center" // Simpler style for Wrapper2
              : `flex items-center justify-center ${getIconPositionClass(index)}` // Style for default Wrapper
          }
          onClick={() => onIconClick(iconData)} // Send icon data to parent
        >
          <Wrapper {...iconData} />
        </div>
      ))}
    </div>
  );
};

IconPicker.propTypes = {
  iconsData: PropTypes.array.isRequired,
  onIconClick: PropTypes.func.isRequired,
  useWrapper2: PropTypes.bool,
};

export default IconPicker;
