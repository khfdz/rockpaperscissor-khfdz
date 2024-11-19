import PropTypes from "prop-types";
import Image1 from "../assets/icons/image-rules-bonus.svg";
import IconClose from "../assets/icons/icon-close.svg";


const Rules = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[50%] h-auto rounded-lg p-3 md:p-6 flex flex-col items-center">
                <div className="flex items-center justify-between w-full">
                <p className="mb-2 text-sm md:text-3xl font-bold text-color3">RULES</p>
                <img src={IconClose} alt="close" className="cursor-pointer -mt-[0.5rem] w-[0.8rem] md:w-[2rem] md:-mt-[0.5rem]" onClick={onClose} />
                </div>
                <img onClick={onClose} src={Image1} alt="rules" className=" mb-4" />                
            </div>
        </div>
    );
};

// Menambahkan PropTypes untuk validasi props
Rules.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Rules;
