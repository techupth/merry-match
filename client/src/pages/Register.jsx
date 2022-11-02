import React from "react";
import { useState } from "react";

function Register() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step !== 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center w-[100%] h-[895px] ">
      <div className="flex justify-center items-center flex-col w-[60%] h-[950px] ] ">
        {/* **************************** Basic Information ******************************************************************** */}

        <div className="flex w-[95%] h-[20%]">
          <div>
            <p className="text-[80%] text-[#7B4429] mb-[1%]">REGISTER</p>
            <h1 className="text-[250%] text-[#A62D82] leading-[95%] drop-shadow-md font-[800]">
              Join us and start <br /> matching{" "}
            </h1>
          </div>

          <div className=" ">
            {step === 1 && (
              <div className="w-[70vh] h-[100%] flex flex-row items-center ml-[20%]">
                {/* BOX Content */}
                <div className="w-[30vh] h-[60%] shrink border-[3px] ml-1 mr-1 border-[#A62D82] rounded-3xl relative">
                  <p className="absolute left-[6%] bottom-1 text-[60px] text-[#A62D82]">
                    1
                  </p>
                  <p className="absolute left-[90px] bottom-9">Step 1/3</p>
                  <p className="absolute right-4 bottom-4 text-[#A62D82]">
                    Basic Information
                  </p>
                </div>

                <div className="w-[10vh] h-[60%]  border-[3px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]">
                  <p className="bottom-1 text-[60px]">2</p>
                </div>

                <div className="w-[10vh] h-[60%]  border-[3px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]">
                  <p className="bottom-1 text-[60px]">3</p>
                </div>
              </div>
            )}{" "}
            {step === 2 && (
              <div className="w-[70vh] h-[100%] flex flex-row items-center ml-[20%]">
                <div className="w-[10vh] h-[60%]  border-[3px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]">
                  {" "}
                  <p className="bottom-1 text-[60px]">1</p>
                </div>
                {/* BOX Content */}
                <div className="w-[30vh] h-[60%] shrink border-[3px] ml-1 mr-1 border-[#A62D82] rounded-3xl relative">
                  <p className="absolute left-[3%] bottom-0 text-[60px] text-[#A62D82]">
                    2
                  </p>
                  <p className="absolute left-[90px] bottom-9">Step 2/3</p>
                  <p className="absolute right-4 bottom-4 text-[17px] text-[#A62D82]">
                    Identities and Interests
                  </p>
                </div>

                <div className="w-[10vh] h-[60%]  border-[3px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]">
                  {" "}
                  <p className="bottom-1 text-[60px]">3</p>
                </div>
              </div>
            )}{" "}
            {step === 3 && (
              <div className="w-[70vh] h-[100%] flex flex-row items-center ml-[20%]">
                <div className="w-[10vh] h-[60%]  border-[3px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]">
                  {" "}
                  <p className="bottom-1 text-[60px]">1</p>
                </div>
                <div className="w-[10vh] h-[60%]  border-[3px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]">
                  {" "}
                  <p className="bottom-1 text-[60px]">2</p>
                </div>
                {/* BOX Content */}
                <div className="w-[30vh] h-[60%] shrink border-[3px] ml-1 mr-1 border-[#A62D82] rounded-3xl relative">
                  <p className="absolute left-[8%] bottom-1 text-[60px] text-[#A62D82]">
                    3
                  </p>
                  <p className="absolute left-[90px] bottom-9">Step 3/3</p>
                  <p className="absolute right-9 bottom-4 text-[#A62D82]">
                    Upload Photos
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ***** FORM SET UP Container (Delete the border and rendering form input here)  *********************************** */}

        {/* Form 1 /} */}
        {step === 1 && (
          <div className="w-[95%] h-[80%] border-[10px] border-sky-500"></div>
        )}

        {/* {/ Form 2 /} */}
        {step === 2 && (
          <div className="w-[95%] h-[80%] border-[10px] border-green-500"></div>
        )}
        {/* {/ Form 3 */}

        {step === 3 && (
          <div className="w-[95%] h-[80%] border-[10px] border-orange-500"></div>
        )}

        {/* *************************** Button ********************************************************************** */}

        {/* Counter x/3, Button Next, Button Submit */}
        <div className=" w-[100%] mt-[2%] space-x-6 flex flex-row justify-end content-end">
          <p className="flex justify-start items-start content-start mt-[1.5%] mr-[70%]">
            {step === 1 && "1/3"} {step === 2 && "2/3"} {step === 3 && "3/3"}
          </p>

          {/* Go Back button */}
          <button
            onClick={handleBack}
            type="button"
            className="text-[#C70039] hover:text-black "
          >
            🡐 Back
          </button>

          {/* Go Next button */}
          {step === 1 && (
            <button
              type="button"
              onClick={handleNext}
              class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Next step
            </button>
          )}

          {step === 2 && (
            <button
              type="button"
              onClick={handleNext}
              class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800  rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Next step
            </button>
          )}
          {/* Submit button */}
          {step === 3 && (
            <button
              type="submit"
              onClick=""
              class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
