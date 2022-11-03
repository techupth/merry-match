import React, { useState } from "react";
import Countrydata from "../mock-city/countrydata";


const Register = () => {
  const [step,setStep]= useState(1)

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

  const [text, setText] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newHobbies = [...hobbies, text];
      setHobbies(newHobbies);
      setText("")
    }
  };
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const deleteHobbies = (key) => {
    event.preventDefault();
    console.log("test click");
    const temp = hobbies.filter((value, index) => {
      return index !== key;
    });

    setHobbies(temp);
  };

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = Countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    setStateid(stateid);
  };



  return (
    <div className="w-full bg-[#FCFCFE]">

        <div className="flex w-full ">
          <div className="w-1/2">
            <div className="flex flex-col items-center">
            <p className="text-[80%] text-[#7B4429] mb-[1%]">REGISTER</p>
            <h1 className="text-[250%] text-[#A62D82] leading-[95%] drop-shadow-md font-[800]">
              Join us and start <br /> matching{" "}
            </h1>
            </div>
          </div>

          <div className="w-1/2">
            {step === 1 && (
              <div className=" flex flex-row items-center">
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
                {/* <Register2 /> */}
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
                {/* <Register3 /> */}
              </div>
            )}
          </div>
        </div>

      {/* End Header */}


      <div className="informationContainer flex justify-center border-solid border-2 border-indigo-600 ">
        <form>
          {/* Page 1 */}
          {/* colomn 1 */}
          {step === 1 ?  
          <div>
          <h1 className="basicInformation text-[#A62D82] mt-[80px] ">
            Basic Information
          </h1>
          <div className="column1 flex">
            <div className="flex flex-col mr-[12px] mt-[24px]">
              <label for="name">Name</label>
              <input
                className="w-[453px] rounded-lg "
                type="text"
                id="name"
                name="firstname"
                placeholder="John Snow"
              />
            </div>
            <div className="flex flex-col ml-[12px] mt-[24px]">
              <label for="birth">Date of birth</label>
              <input
                className="w-[453px] rounded-lg"
                type="date"
                id="birth"
                name="birthday"
                placeholder="01/01/2020"
              />
            </div>
          </div>
          {/* colomn2 */}
          <div className="column2 flex">
            <div className="flex flex-col mr-[12px] mt-[40px]">
              <label for="location">Location</label>
              <select
                className="w-[453px] h-[48px] rounded-lg"
                onChange={(e) => handlecounty(e)}
              >
                {Countrydata.map((getcountry, index) => (
                  <option value={getcountry.country_id} key={index}>
                    {getcountry.country_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col ml-[12px] mt-[40px]">
              <label for="city">City</label>
              <select
                className="w-[453px] h-[48px] rounded-lg"
                onChange={(e) => handlestate(e)}
              >
                {state.map((getstate, index) => (
                  <option value={getstate.state_id} key={index}>
                    {getstate.state_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
               {/* colomn 3 */}
               <div className="column3 flex">
            <div className="flex flex-col mr-[12px] mt-[40px]">
              <label for="username">Username</label>
              <input
                className="w-[453px] rounded-lg"
                type="text"
                id="username"
                name="username"
                placeholder="At leaset 6 charactor"
              />
            </div>
            <div className="flex flex-col ml-[12px] mt-[40px]">
              <label for="Email">Email</label>
              <input
                className="w-[453px] rounded-lg"
                type="email"
                id="Email"
                name="Email"
                placeholder="name@website.com"
              />
            </div>
          </div>
          {/* colomn 4 */}
          <div className="column4 flex">
            <div className="flex flex-col mr-[12px] mt-[40px]">
              <label for="Password">Password</label>
              <input
                className="w-[453px] rounded-lg"
                type="password"
                id="Password"
                name="Password"
                placeholder="At leaset 8 charactor"
              />
            </div>
            <div className="flex flex-col ml-[12px] mt-[40px]">
              <label for="ConfirmPassword">Confirm Password</label>
              <input
                className="w-[453px] rounded-lg"
                type="password"
                id="ConfirmPassword"
                name="ConfirmPassword"
                placeholder="At leaset 8 charactor"
              />
            </div>
          </div>
          </div>
          :null}
         

          {/* Page 2 */}
          {step === 2 ? 
          <div>
          <h1 className="basicInformation text-[#A62D82] mt-[80px]">
            Identities and Interests
          </h1>
          {/* colomn1 */}
          <div className="column1 flex">
            <div className="SexualIdentities flex flex-col mr-[12px] mt-[40px]">
              <label for="SexualIdentities">Sexual identities</label>
              <select
                className="w-[453px] rounded-lg h-[48px]"
                id="SexualIdentities"
                name="status"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="SexualPreferences flex flex-col ml-[12px] mt-[40px]">
              <label for="SexualPreferences">Sexual preferences</label>
              <select
                className="w-[453px] rounded-lg h-[48px]"
                id="SexualPreferences"
                name="SexualPreferences"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* colomn2 */}
          <div className="column2 flex">
            <div className="RacialPreferences flex flex-col mr-[12px] mt-[40px] ">
              <label for="RacialPreferences">Racial preferences</label>
              <select
                className="w-[453px] rounded-lg h-[48px]"
                id="RacialPreferences"
                name="RacialPreferences"
              >
                <option value="Male">Asian</option>
                <option value="Female">Europe</option>
              </select>
            </div>

            <div className="MeetingInterests flex flex-col  ml-[12px] mt-[40px]">
              <label for="MeetingInterests">Meeting interests</label>
              <select
                className="w-[453px] h-[48px] rounded-lg"
                id="MeetingInterests"
                name="MeetingInterests"
              >
                <option value="Friend">Friend</option>
                <option value="FWB">FWB</option>
                <option value="ONS">ONS</option>
                <option value="Long-term">Long-term relationship</option>
                <option value="Short-term">Short-term relationship</option>
              </select>
            </div>
          </div>
          <div className="mt-[40px]">Hobbies / Interests (Maximum 10)</div>
          <input
            className="w-full rounded-lg "
            type="text"
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}>
          </input>
          {hobbies.map((item, index) => {
            return (
              <div className="inline-block mt-2 mr-2 px-2 h-[30px] rounded-lg text-center text-[#7D2262] bg-[#F4EBF2]">
                {item}
                <button
                className="ml-[12px]"
                  onClick={() => {
                    deleteHobbies(index);
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
          </div> :null }
          
          {/* Page3 */}
          {step === 3 ?
          <div>
            <h1 className="ProfilePictures text-[#A62D82] mt-[80px]">
             Profile pictures
          </h1>
          <p>Upload at least x photos</p>
          <div className="profileContainer mt-[24px] flex">
          <div className="profile Pic1 w-[167px] h-[167px] bg-[#d908ac] mr-[12px]">xx</div>
          <div className="profile Pic2 w-[167px] h-[167px] bg-[#d908ac] mr-[12px]">xx</div>
          <div className="profile Pic3 w-[167px] h-[167px] bg-[#d908ac] mr-[12px]">xx</div>
          <div className="profile Pic4 w-[167px] h-[167px] bg-[#d908ac] mr-[12px]">xx</div>
          <div className="profile Pic5 w-[167px] h-[167px] bg-[#d908ac] mr-[12px]">xx</div>
          </div>
          </div>:null} 


          <div className=" mt-[2%] space-x-6 flex flex-row justify-end content-end">
          <p className="flex justify-start items-start content-start mt-[1.5%] mr-[70%]">
            {step === 1 && "1/3"} {step === 2 && "2/3"} {step === 3 && "3/3"}
          </p>

          {/* Go Back button */}
       
          {/* Go Next button */}
          {step === 1 && (
            <div>
              <button
              onClick={handleBack}
              type="button"
              className="text-[#C8CCDB] invisible  mr-[32px]" 
            >
              🡐 Back
            </button>

            <button
              type="button"
              onClick={handleNext}
              class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Next step
            </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <button
              onClick={handleBack}
              type="button"
              className="text-[#C70039] hover:text-black mr-[32px]" 
            >
              🡐 Back
            </button>
            
            <button
              type="button"
              onClick={handleNext}
              class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800  rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Next step
            </button>
            </div>
          )}
          {/* Submit button */}
          {step === 3 && (
            <div> 
              <button
              onClick={handleBack}
              type="button"
              className="text-[#C70039] hover:text-black mr-[32px]" 
            >
              🡐 Back
            </button>

            <button
              type="submit"
              onClick=""
              class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Submit
            </button>
            </div>
          )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
