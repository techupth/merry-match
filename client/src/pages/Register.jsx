import React, { useState } from "react";
import Countrydata from "../mock-city/countrydata";
import Datepicker from "flowbite-datepicker/Datepicker";

const Register = () => {
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
      {/* start Header */}
      <div className="registerHeaderContainer flex ">
        <div className="registerHeaderContianer-LSide w-1/2 border-solid border-2 border-indigo-600">
          <p>REGISTER</p>
          Join us and start matching
        </div>
        <div className="registerHeaderContianer-RSide w-1/2 border-solid border-2 border-indigo-600">
          <div className="registerPage">
            <div className="page1">1</div>
            <div className="page2">2</div>
            <div className="page3">3</div>
          </div>
        </div>
      </div>
      {/* End Header */}

      <div className="informationContainer flex justify-center border-solid border-2 border-indigo-600 ">
        <form>
          {/* Page 1 */}
          {/* colomn 1 */}
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

          {/* Page 2 */}
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
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
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

        </form>
      </div>
    </div>
  );
};

export default Register;
