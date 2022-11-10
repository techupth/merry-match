import React, { useState, useEffect, useRef } from "react";
import Countrydata from "../mock-city/countrydata";
import { useAuth } from "../contexts/authentication";
import axios from "axios";
import makeAnimated from "react-select/animated";
import { options, optionsContact } from "./optionSelect";
import Select from "react-select";
import Navbarauthen from "../components/NavbarAuthen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jwtDecode from "jwt-decode";
import EditPageFooter from "../components/editPageComponents/EditPageFooter";

// Modal
import EditModal from "../components/editPageComponents/EditModal";
// Click outside to close hooks
import useClickOutside from "../ulils/hooks/useClickOutside";

const Register = () => {
  const [userData, setUserData] = useState({});
  const [text, setText] = useState("");

  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [sexpref, setSexpref] = useState("");
  const [sexidentity, setSexidentity] = useState("");
  const [racialpref, setRacialpref] = useState("");
  const [meetingint, setMeetingint] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  //hobbies part
  const animatedComponents = makeAnimated();
  const [selectedOption, setSelectedOption] = useState([]);
  const [contact, setContact] = useState([]);

  const [preview, setPreview] = useState(false);

  // preview edited profile pop-up
  const ref = useRef(null);
  useClickOutside(ref, () => setPreview(false));

  const getData = async () => {
    // const name = result.data.data[0].name;
    // const birthday = result.data.data[0].birthday;
    // const username = result.data.data[0].username;
    // const email = result.data.data[0].email;
    // const sex_pref = result.data.data[0].sex_pref;
    // const sex_identity = result.data.data[0].sex_identity;
    // const racial_pref = result.data.data[0].racial_pref;
    // const meeting_int = result.data.data[0].meeting_int;
    // const location = result.data.data[0].location;
    // const city = result.data.data[0].city;
    // const hobbies = result.data.data[0].hobby;
    // const todayDate = new Date(birthday);
    // const formatDate =
    //   todayDate.getDate() < 10
    //     ? `0${todayDate.getDate()}`
    //     : todayDate.getDate();
    // const formatMonth =
    //   todayDate.getMonth() < 10
    //     ? `0${todayDate.getMonth()}`
    //     : todayDate.getMonth();
    // const formattedDate = [
    //   todayDate.getFullYear(),
    //   formatMonth,
    //   formatDate,
    // ].join("-");
    // hobbies.map((item,index)=>{
    //   // console.log(item,index)
    //    const hobbiesItem = JSON.parse(item)
    //    hobbiesObj = hobbiesItem.push
    // })
    // let test = [];
    // options.map((item, index) => {
    //   console.log(item, index);
    //   //  const hobbiesItem = JSON.parse(item)
    //   //  hobbiesObj = hobbiesItem.push
    //   test = item.push;
    // });
    // console.log(test);
    // const hobbiesObj = JSON.parse(hobbies[0]);
    // console.log(hobbiesObj);
    // setName(name);
    // setBirthday(formattedDate);
    // setUsername(username);
    // setEmail(email);
    // setSexpref(sex_pref);
    // setSexidentity(sex_identity);
    // setRacialpref(racial_pref);
    // setMeetingint(meeting_int);
    // setLocation(location);
    // setCity(city);
    // // setHobbies([hobbiesObj])
    // // if(){
    // // }
    // setHobbies(hobbiesObj.value);
  };

  // const checkselect = () => {
  //   options.map((item,index)=>
  //   {
  //   if(item.value === hobbies.value)
  //   console.log("hi")
  //   console.log(item,index)
  //   console.log(item.value)
  //   })
  // }
  // console.log(hobbies[0].value)
  // checkselect()

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = Countrydata.find(
      (country) => country.country_name === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    setLocation(getcountryId);
  };

  // const handlestate = (e) => {
  //   const stateid = e.target.value;
  //   setStateid(stateid);
  // };

  const decodeFromToken = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    setUserData(userData);
    const result = await axios(
      `http://localhost:4001/users/${userData.user_id}`
    );
    setUserData(result.data.data[0]);

    setBirthday(result.data.data[0].birthday);

    // console.log(myDate.toDateString());
  };

  useEffect(() => {
    decodeFromToken();

    let parts = birthday.split("T");
    let strDate = parts[0].split("-");
    console.log(strDate);
    const myDate = new Date(strDate[0], strDate[1] - 1, strDate[2]);
    console.log(myDate);

    if (myDate != "Invalid Date") {
      setStartDate(myDate);
    }
  }, [birthday]);

  return (
    <div className="w-full bg-[#FCFCFE] flex flex-col z-0">
      <Navbarauthen />
      <div className="informationContainer flex justify-center border-solid border-2 border-indigo-600 flex-col items-center justify-center">
        <form>
          {/* start Header */}
          <div className="flex mt-[150px]">
            <div className="">
              <h1 className="text-[46px] text-[#A62D82] font-extrabold">
                Let’s make profile{" "}
              </h1>
              <h1 className="text-[46px] text-[#A62D82] font-extrabold">
                to let others know you
              </h1>
            </div>

            {/* preview modal button */}
            <div className=" flex self-end ml-[80px] z-0">
              <button 
              onClick={()=> setPreview(!preview)}
              className="w-[162px] h-[48px] bg-[#FFE1EA] rounded-full text-[#95002B]">
                Preview Profile
              </button>


              {/* update profile */}
              <button className="w-[162px] h-[48px] bg-[#C70039] ml-[16px] rounded-full text-[#FFFFFF]">
                Update Profile
              </button>
            </div>

          </div>
          {/* End Header */}

          {/* Page 1 */}
          {/* colomn 1 */}

          {/* show preview modal */}
          {preview && <EditModal close={setPreview} />}

          <h4 className="basicInformation text-[#A62D82] mt-[80px] font-bold [text-[24px] z-0">
            Basic Information
          </h4>
          <div className="column1 flex z-0">
            <div className="flex flex-col mr-[12px] mt-[24px]">
              <label for="name">name</label>
              <input
                className="w-[453px] rounded-lg "
                type="text"
                id="name"
                name="firstname"
                placeholder="John Snow"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col ml-[12px] mt-[24px] z-0">
              <label for="birth">Date of birth</label>
              <DatePicker
                className="w-[453px] rounded-lg focus:border-pink-300 focus:border-[2px]"
                selected={startDate}
                onChange={(date) => {
                  console.log(date);
                  setStartDate(date);
                }}
              />
            </div>
          </div>

          {/* colomn2 */}
          <div className="column2 flex">
            <div className="flex flex-col mr-[12px] mt-[40px]">
              <label for="location">Location</label>
              <select
                className="w-[453px] h-[48px] rounded-lg p-[12px]"
                value={location}
                onChange={(e) => {
                  // setLocation(e)
                  handlecounty(e);
                }}
              >
                <option disabled value="">
                  -- Select Country--
                </option>
                {Countrydata.map((getcountry, index) => (
                  <option
                    className=""
                    value={getcountry.country_name}
                    key={index}
                  >
                    {getcountry.country_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col ml-[12px] mt-[40px]">
              <label for="city">City</label>
              <select
                className="w-[453px] h-[48px] rounded-lg p-[12px]"
                value={city}
                onChange={(e) => handlestate(e)}
              >
                {state.map((getstate, index) => (
                  <option value={getstate.state_name} key={index}>
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
                value={username}
                placeholder="At leaset 6 charactor"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
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
                value={email}
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
                className="w-[453px] rounded-lg h-[48px] p-[12px]"
                id="SexualIdentities"
                name="status"
                value={sexidentity}
                onChange={(e) => {
                  setSexidentity(e.target.value);
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="SexualPreferences flex flex-col ml-[12px] mt-[40px]">
              <label for="SexualPreferences">Sexual preferences</label>
              <select
                className="w-[453px] rounded-lg h-[48px] p-[12px]"
                id="SexualPreferences"
                name="SexualPreferences"
                value={sexpref}
                onChange={(e) => {
                  setSexpref(e.target.value);
                }}
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
                className="w-[453px] rounded-lg h-[48px] p-[12px]"
                id="RacialPreferences"
                name="RacialPreferences"
                value={racialpref}
              >
                <option value="Asian">Asian</option>
                <option value="Europe">Europe</option>
              </select>
            </div>

            <div className="MeetingInterests flex flex-col  ml-[12px] mt-[40px]">
              <label for="MeetingInterests">Meeting interests</label>
              <select
                className="w-[453px] h-[48px] rounded-lg p-[12px]"
                id="MeetingInterests"
                name="MeetingInterests"
                value={meetingint}
              >
                <option value="Friend">Friend</option>
                <option value="FWB">FWB</option>
                <option value="ONS">ONS</option>
                <option value="Long-term">Long-term relationship</option>
                <option value="Short-term">Short-term relationship</option>
              </select>
            </div>
          </div>

          <div className="mt-[40px] font-[600]">
            Hobbies / Interests (Maximum 5)
            <Select
              components={animatedComponents}
              defaultValue={[options[0]]}
              // defaultValue={selectedOption}
              // defaultValue={hobbies}
              values={hobbies}
              onChange={setSelectedOption}
              options={options}
              isClearable={true}
              isSearchable={true}
              isDisabled={false}
              isLoading={false}
              isRtl={false}
              closeMenuOnSelect={false}
              isMulti
            />
          </div>

          {/* <div className="mt-[40px]">Hobbies / Interests (Maximum 10)</div>
          <input
            className="w-full rounded-lg "
            type="text"
            onChange={(e)=>{
                setText(e.target.value)
            }}
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
          })} */}
          <div className="flex flex-col mt-[24px]">
            <label for="AboutMe">About me (Maximum 150 characters)</label>
            <textarea
              id="AboutMe"
              name="AboutMe"
              maxlength="150"
              rows="1"
              className="rounded-lg h-[127px] p-[12px]"
            ></textarea>
          </div>

          <h1 className="ProfilePictures text-[#A62D82] mt-[80px]">
            Profile pictures
          </h1>
          <p>Upload at least x photos</p>
          <div className="profileContainer mt-[24px] flex">
            <button
              className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
              type="button"
              onClick={""}
            >
              + <br /> Upload photo{" "}
            </button>
            <button
              className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
              type="button"
              onClick={""}
            >
              + <br /> Upload photo{" "}
            </button>
            <button
              className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
              type="button"
              onClick={""}
            >
              + <br /> Upload photo{" "}
            </button>
            <button
              className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
              type="button"
              onClick={""}
            >
              + <br /> Upload photo{" "}
            </button>

            <button
              className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
              type="button"
              onClick={""}
            >
              + <br /> Upload photo{" "}
            </button>
          </div>
        </form>
        <div className="delete-section flex flex-col justify-end items-end  h-[70px] w-full   ">
          <button className="text-[#646D89] text-[16px] mr-[320px] hover:text-gray-300">
            Delete account
          </button>

          {/* Footer.................................................. */}
        </div>
        <EditPageFooter />
      </div>
    </div>
  );
};

export default Register;
