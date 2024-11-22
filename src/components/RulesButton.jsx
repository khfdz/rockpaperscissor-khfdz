import PropTypes from "prop-types";

const RulesButton = ({ onClick }) => {
  return (
    <button
      className="absolute top-[50vw] right-10 text-white text-sm md:text-xl border border-white rounded-md py-1 px-8"
      onClick={onClick}
    >
      Rules
    </button>
  );
};

RulesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RulesButton;
