import { useState } from "react";
import Pentagon from "../assets/icons/bg-pentagon.svg";
import Icon1 from "../assets/icons/icon-scissors.svg";
import Icon2 from "../assets/icons/icon-paper.svg";
import Icon3 from "../assets/icons/icon-rock.svg";
import Icon4 from "../assets/icons/icon-lizard.svg";
import Icon5 from "../assets/icons/icon-spock.svg";
import Rules from "../components/Rules";
import Score from "../components/Score";

const Welcome = () => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules(true);
  };

  const handleHideRules = () => {
    setShowRules(false);
  };

  return (
    <div className="bg-color1 min-h-screen flex flex-col items-center px-4 md:px-28 md:py-4 ">

    <Score />

      <div className="">
        <img
          src={Pentagon}
          alt="pentagon"
          className="mt-[14vw] md:mt-[10vw] w-[70%] h-auto md:w-[100%] md:h-auto block mx-auto"
        />
      </div>

      <div className="flex md:-mt-[33vw] -mt-[70vw]">
        <div className="bg-yellow2 rounded-full w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center relative">
          <div className="bg-yellow1 rounded-full w-[5rem] h-[5rem] -mt-[0.4rem] md:w-[7rem] md:h-[7rem] md:-mt-[0.6rem] flex items-center justify-center relative">
            <div className="bg-gray1 rounded-full w-[3.8rem] h-[3.8rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center relative">
              <div className="bg-white rounded-full w-[3.8rem] h-[3.8rem] md:w-[5rem] md:h-[5rem] absolute top-[53%] left-[50%] md:top-[54%] md:left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                <img
                  src={Icon1}
                  alt="icon1"
                  className="md:w-[2.6rem] w-[1.8rem] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-[0vw] -ml-[55vw] md:mt-[0vw] md:-ml-[25vw]">
        <div className="bg-cyan2 rounded-full w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center relative">
          <div className="bg-cyan1 rounded-full w-[5rem] h-[5rem] -mt-[0.4rem] md:w-[7rem] md:h-[7rem] md:-mt-[0.6rem] flex items-center justify-center relative">
            <div className="bg-gray1 rounded-full w-[3.8rem] h-[3.8rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center relative">
              <div className="bg-white rounded-full w-[3.8rem] h-[3.8rem] md:w-[5rem] md:h-[5rem] absolute top-[53%] left-[50%] md:top-[54%] md:left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                <img
                  src={Icon5}
                  alt="icon2"
                  className="w-[1.8rem] md:w-[2.3rem] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex -mt-[25vw] ml-[55vw] md:-mt-[10vw] md:ml-[25vw]">
        <div className="bg-blue2 rounded-full w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center relative">
          <div className="bg-blue1 rounded-full w-[5rem] h-[5rem] -mt-[0.4rem] md:w-[7rem] md:h-[7rem] md:-mt-[0.6rem] flex items-center justify-center relative">
            <div className="bg-gray1 rounded-full w-[3.8rem] h-[3.8rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center relative">
              <div className="bg-white rounded-full w-[3.8rem] h-[3.8rem] md:w-[5rem] md:h-[5rem] absolute top-[53%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                <img
                  src={Icon2}
                  alt="icon3"
                  className="w-[1.8rem] md:w-[2.5rem] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-[8vw] ml-[40vw] md:mt-[5vw] md:ml-[20vw]">
        <div className="bg-red2 rounded-full w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center relative">
          <div className="bg-red1 rounded-full w-[5rem] h-[5rem] -mt-[0.4rem] md:w-[7rem] md:h-[7rem] md:-mt-[0.6rem] flex items-center justify-center relative">
            <div className="bg-gray1 rounded-full w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center relative">
              <div className="bg-white rounded-full w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem] absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                <img
                  src={Icon3}
                  alt="icon3"
                  className="w-[1.8rem] md:w-[2.5rem] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex -mt-[24vw] -ml-[40vw] md:-mt-[10.5vw] md:-ml-[20vw]">
        <div className="bg-purple2 rounded-full w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center relative">
          <div className="bg-purple1 rounded-full w-[5rem] h-[5rem] -mt-[0.4rem] md:w-[7rem] md:h-[7rem] md:-mt-[0.6rem] flex items-center justify-center relative">
            <div className="bg-gray1 rounded-full w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center relative">
              <div className="bg-white rounded-full w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem] absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                <img
                  src={Icon4}
                  alt="icon4"
                  className="w-[1.8rem] md:w-[2.5rem] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center md:relative">
        <button
          className="text-white text-sm md:text-xl border border-white rounded-md py-1 px-8 mt-12 md:mt-4 md:absolute md:top-8 md:-right-16"
          onClick={handleShowRules}
        >
          Rules
        </button>
      </div>

      {showRules && <Rules onClose={handleHideRules} />}
    </div>
  );
};

export default Welcome;
