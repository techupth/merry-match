import React, { useState, useEffect, useRef } from "react";
import CountryData from "../../utils/mock-city/Countrydata.json";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import makeAnimated from "react-select/animated";
import { options, optionsContact } from "../../utils/optionSelect";
import Select from "react-select";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jwtDecode from "jwt-decode";
import { da } from "date-fns/locale";
import { set } from "date-fns";

// Components
import DeleteButton from "../../components/editPageComponents/DeleteButton";
import NavbarAuthen from "../../components/Navbar/NavbarAuthen";
import EditPageFooter from "../../components/editPageComponents/EditPageFooter";

// Modal
import EditModal from "../../components/editPageComponents/EditModal";
// Click outside to close hooks
import useClickOutside from "../../utils/hooks/useClickOutside";

const Register = () => {
  const [userData, setUserData] = useState({});
  const [text, setText] = useState("");

  const [countryId, setCountryId] = useState("");
  const [state, setState] = useState([]);
  const [nationStateId, setNationStateId] = useState("");

  const [name, setName] = useState(""); //ใช้
  const [username, setUsername] = useState(""); //ใช้
  const [birthday, setBirthday] = useState(""); //ใช้
  const [email, setEmail] = useState(""); //ใช้
  const [sexpref, setSexpref] = useState(""); //ใช้
  const [sexidentity, setSexidentity] = useState(""); //ใช้
  const [racialpref, setRacialpref] = useState(""); //ใช้
  const [meetingint, setMeetingint] = useState(""); //ใช้
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  // Photos
  const [Images, setImages] = useState([]);

  //hobbies part
  const animatedComponents = makeAnimated();
  const [contact, setContact] = useState([]);

  // Delete button
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [preview, setPreview] = useState(false);

  // preview edited profile pop-up
  const ref = useRef(null);
  useClickOutside(ref, () => setPreview(false));

  const handleCountry = (e) => {
    const getCountryId = e.target.value;
    const getStateData = CountryData.find(
      (country) => country.country_name === getCountryId
    ).states;
    setState(getStateData);
    setCountryId(getCountryId);
    setLocation(getCountryId);
  };
  console.log(city);
  console.log(location);

  const handleNationState = (e) => {
    const nationStateId = e.target.value;
    setNationStateId(nationStateId);
  };

  const decodeFromToken = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    setUserData(userData);
    const result = await axios(
      `http://localhost:4001/users/${userData.user_id}`
    );
    setUserData(result.data.data[0]);
    setBirthday(result.data.data[0].birthday);
    setName(result.data.data[0].name);
    setUsername(result.data.data[0].username);
    setEmail(result.data.data[0].email);
    setSexidentity(result.data.data[0].sex_identity);
    setSexpref(result.data.data[0].sex_pref);
    setRacialpref(result.data.data[0].racial_pref);
    setMeetingint(result.data.data[0].meeting_int);
    setLocation(result.data.data[0].location);
    setCity(result.data.data[0].city);

    // Photo
    const newItemImage = [];
    if (result.data.data[0].profile_pics[0] !== undefined) {
      const Photo1 = JSON.parse(result.data.data[0].profile_pics[0]);
      newItemImage.push(Photo1.url);
    }

    if (result.data.data[0].profile_pics[1] !== undefined) {
      const Photo2 = JSON.parse(result.data.data[0].profile_pics[1]);
      newItemImage.push(Photo2.url);
    }
    if (result.data.data[0].profile_pics[2] !== undefined) {
      const Photo3 = JSON.parse(result.data.data[0].profile_pics[2]);
      newItemImage.push(Photo3.url);
    }
    if (result.data.data[0].profile_pics[3] !== undefined) {
      const Photo4 = JSON.parse(result.data.data[0].profile_pics[3]);
      newItemImage.push(Photo4.url);
    }
    if (result.data.data[0].profile_pics[4] !== undefined) {
      const Photo5 = JSON.parse(result.data.data[0].profile_pics[4]);
      newItemImage.push(Photo5.url);
    }
    setImages(newItemImage);
  };

  const handleHobbie = (data) => {
    console.log(data);
    const hobbiesArr = [];
    if (data !== undefined) {
      for (let i = 0; i < data.length; i++) {
        const obj = JSON.parse(data[i]);
        hobbiesArr.push(obj);
      }
    }
    setHobbies(hobbiesArr);
  };

  // console.log(hobbies);

  const handleDate = (data) => {
    let parts = birthday.split("T");
    let strDate = parts[0].split("-");
    const myDate = new Date(strDate[0], strDate[1] - 1, strDate[2]);
    if (myDate != "Invalid Date") {
      setStartDate(myDate);
    }
  };

  // console.log(Images);
  // let result = []
  // result.push(images1,images2)

  //function upload Photo
  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dn4jfzbs6",
        uploadPreset: "Merry Match",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    myWidget.open();
  }
  // End Function upload Photo

  //Function delete image
  function deleteImage(item) {
    console.log(item);
    const imageDelete = Images.filter((value, i) => {
      return i !== item;
    });
    setImages(imageDelete);
  }

  useEffect(() => {
    decodeFromToken();
    handleDate(birthday);
    handleHobbie(userData.hobby);
  }, [birthday]);

  return (
    <div className="w-full bg-[#FCFCFE] flex flex-col">
      <NavbarAuthen />
      <div className="informationContainer flex  border-solid border-2 border-indigo-600 flex-col items-center justify-center">
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
                onClick={() => setPreview(!preview)}
                className="w-[162px] h-[48px] bg-[#FFE1EA] rounded-full text-[#95002B]"
              >
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
              <label htmlFor="name">name</label>
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
              <label htmlFor="birth">Date of birth</label>
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
              <label htmlFor="location">Location</label>
              <select
                className="w-[453px] h-[48px] rounded-lg p-[12px]"
                value={location}
                onChange={(e) => {
                  handleCountry(e);
                }}
              >
                <option disabled value="">
                  -- Select Country--
                </option>
                {CountryData.map((getCountry, index) => (
                  <option
                    className=""
                    value={getCountry.country_name}
                    key={index}
                  >
                    {getCountry.country_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col ml-[12px] mt-[40px]">
              <label htmlFor="city">City</label>
              <select
                className="w-[453px] h-[48px] rounded-lg p-[12px]"
                value={city}
                defaultValue={city}
                onChange={(e) => {
                  handleNationState(e);
                }}
              >
                {state.map((getStateData, index) => (
                  <option value={getStateData.state_name} key={index}>
                    {getStateData.state_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* colomn 3 */}
          <div className="column3 flex">
            <div className="flex flex-col mr-[12px] mt-[40px]">
              <label htmlFor="username">Username</label>
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
              <label htmlFor="Email">Email</label>
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
          <h1 className="basicInformation text-[#A62D82] mt-[80px] font-bold">
            Identities and Interests
          </h1>
          {/* colomn1 */}
          <div className="column1 flex">
            <div className="SexualIdentities flex flex-col mr-[12px] mt-[40px]">
              <label htmlFor="SexualIdentities">Sexual identities</label>
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
              <label htmlFor="SexualPreferences">Sexual preferences</label>
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
              <label htmlFor="RacialPreferences">Racial preferences</label>
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
              <label htmlFor="MeetingInterests">Meeting interests</label>
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
              onChange={setHobbies}
              options={options}
              isClearable={true}
              isSearchable={true}
              isDisabled={false}
              isLoading={false}
              isRtl={false}
              closeMenuOnSelect={false}
              value={hobbies}
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
            <label htmlFor="AboutMe">About me (Maximum 150 characters)</label>
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
            {/* img Box1 */}
            <div className="mt-[24px]">
              {Images.length < 1 ? (
                <button
                  className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                  type="button"
                  onClick={""}
                >
                  + <br /> Upload photo{" "}
                </button>
              ) : (
                <div className="relative w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                  <img
                    src={Images[0]}
                    className="w-full h-full rounded-lg object-cover"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                    <button
                      type="button"
                      className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                      onClick={() => {
                        deleteImage(0);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* img Box2 */}
            <div className="mt-[24px]">
              {Images.length < 2 ? (
                <button
                  className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                  type="button"
                  onClick={""}
                >
                  + <br /> Upload photo{" "}
                </button>
              ) : (
                <div className="relative w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                  <img
                    src={Images[1]}
                    className="w-full h-full rounded-lg object-cover"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                    <button
                      type="button"
                      className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                      onClick={() => {
                        deleteImage(1);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* img Box3 */}
            <div className="mt-[24px]">
              {Images.length < 3 ? (
                <button
                  className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                  type="button"
                  onClick={""}
                >
                  + <br /> Upload photo{" "}
                </button>
              ) : (
                <div className="relative w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                  <img
                    src={Images[2]}
                    className="w-full h-full rounded-lg object-cover"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                    <button
                      type="button"
                      className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                      onClick={() => {
                        deleteImage(2);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* img Box4 */}
            <div className="mt-[24px]">
              {Images.length < 4 ? (
                <button
                  className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                  type="button"
                  onClick={""}
                >
                  + <br /> Upload photo{" "}
                </button>
              ) : (
                <div className="relative w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                  <img
                    src={Images[3]}
                    className="w-full h-full rounded-lg object-cover"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                    <button
                      type="button"
                      className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                      onClick={() => {
                        deleteImage(3);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* img Box5 */}
            <div className="mt-[24px]">
              {Images.length < 5 ? (
                <button
                  className=" w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                  type="button"
                  onClick={""}
                >
                  + <br /> Upload photo{" "}
                </button>
              ) : (
                <div className="relative w-[167px] h-[167px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                  <img
                    src={Images[4]}
                    className="w-full h-full rounded-lg object-cover"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                    <button
                      type="button"
                      className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                      onClick={() => {
                        deleteImage(4);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* End Box5 */}
          </div>
        </form>

        {/* Delete button */}
        {deleteAccount && <DeleteButton close={setDeleteAccount} />}

        <div className="delete-section flex flex-col justify-end items-end  h-[70px] w-full   ">
          <button
            className="text-[#646D89] text-[16px] mr-[320px] hover:text-gray-300 z-0 relative"
            onClick={() => setDeleteAccount(!deleteAccount)}
          >
            Delete account
          </button>
        </div>
        <div className="footer-sections bg-[#F6F7FC] w-full mt-[60px] ">
          <div className="footer-wrapper flex flex-col justify-center items-center">
            <div className="footer-content flex justify-center items-center flex-col">
              <img
                className=" w-[50%] mt-8"
                src="/asset/header/header-merrymatch-logo.svg"
                alt="merry match logo"
              />
              {/* <div className="homepage-footer-logo flex flex-row text-[50px] mb-7 mt-7">
              <h1 className="text-black bg-transparent mr-3">Merry</h1>
              <h1 className="text-[#C70039] bg-transparent font-[800]">
                Match
              </h1>
            </div> */}
              <div className="text text-[#646D89] bg-transparent text-[20px] font-[600] mb-8">
                New generation of online dating website for everyone
              </div>
            </div>
            <div className=" bg-gray-200 w-[300px] p-[1px] mt-5 xl:w-[1100px] sm:w-[700px] "></div>
            <div className="bottom flex justify-center items-center  flex-col mt-[20px]">
              <p className="text-[#9AA1B9] text-[14px]">
                copyright ©2022 merrymatch.com All rights reserved
              </p>
              <div className="flex flex-row mt-[20px] mb-10">
                <svg
                  className="mr-[16px]"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#A62D82" />
                  <path
                    d="M24.0002 16.3608C19.7813 16.3608 16.3613 19.7808 16.3613 23.9997C16.3613 27.8123 19.1549 30.9725 22.807 31.5462V26.2074H20.8667V23.9997H22.807V22.3169C22.807 20.4026 23.9467 19.3454 25.6922 19.3454C26.5279 19.3454 27.4018 19.4943 27.4018 19.4943V21.3735H26.4393C25.4898 21.3735 25.1942 21.9624 25.1942 22.5667V23.9997H27.3124L26.974 26.2074H25.1942V31.5462C28.8456 30.9733 31.6391 27.8115 31.6391 23.9997C31.6391 19.7808 28.2192 16.3608 24.0002 16.3608Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="mr-[16px]"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#A62D82" />
                  <path
                    d="M24.0002 16.3608C26.0757 16.3608 26.3347 16.3685 27.149 16.4067C27.9625 16.4449 28.5163 16.5724 29.0037 16.7619C29.5079 16.9559 29.9326 17.2187 30.3573 17.6426C30.7457 18.0245 31.0463 18.4864 31.2381 18.9963C31.4267 19.4829 31.5551 20.0374 31.5933 20.851C31.6292 21.6653 31.6391 21.9242 31.6391 23.9997C31.6391 26.0752 31.6315 26.3342 31.5933 27.1485C31.5551 27.962 31.4267 28.5158 31.2381 29.0032C31.0468 29.5133 30.7462 29.9753 30.3573 30.3568C29.9753 30.7451 29.5134 31.0457 29.0037 31.2376C28.5171 31.4263 27.9625 31.5546 27.149 31.5928C26.3347 31.6287 26.0757 31.6386 24.0002 31.6386C21.9247 31.6386 21.6658 31.631 20.8515 31.5928C20.0379 31.5546 19.4841 31.4263 18.9967 31.2376C18.4867 31.0462 18.0247 30.7456 17.6431 30.3568C17.2546 29.975 16.9541 29.5131 16.7624 29.0032C16.5729 28.5166 16.4454 27.962 16.4072 27.1485C16.3713 26.3342 16.3613 26.0752 16.3613 23.9997C16.3613 21.9242 16.369 21.6653 16.4072 20.851C16.4454 20.0367 16.5729 19.4836 16.7624 18.9963C16.9535 18.4861 17.2542 18.0241 17.6431 17.6426C18.0248 17.254 18.4868 16.9534 18.9967 16.7619C19.4841 16.5724 20.0372 16.4449 20.8515 16.4067C21.6658 16.3708 21.9247 16.3608 24.0002 16.3608ZM24.0002 20.1803C22.9872 20.1803 22.0157 20.5827 21.2995 21.299C20.5832 22.0153 20.1808 22.9867 20.1808 23.9997C20.1808 25.0127 20.5832 25.9842 21.2995 26.7005C22.0157 27.4168 22.9872 27.8192 24.0002 27.8192C25.0132 27.8192 25.9847 27.4168 26.701 26.7005C27.4173 25.9842 27.8197 25.0127 27.8197 23.9997C27.8197 22.9867 27.4173 22.0153 26.701 21.299C25.9847 20.5827 25.0132 20.1803 24.0002 20.1803ZM28.9655 19.9893C28.9655 19.7361 28.8649 19.4932 28.6858 19.3141C28.5068 19.1351 28.2639 19.0345 28.0106 19.0345C27.7574 19.0345 27.5145 19.1351 27.3354 19.3141C27.1564 19.4932 27.0558 19.7361 27.0558 19.9893C27.0558 20.2426 27.1564 20.4854 27.3354 20.6645C27.5145 20.8436 27.7574 20.9442 28.0106 20.9442C28.2639 20.9442 28.5068 20.8436 28.6858 20.6645C28.8649 20.4854 28.9655 20.2426 28.9655 19.9893ZM24.0002 21.7081C24.608 21.7081 25.1909 21.9495 25.6207 22.3793C26.0504 22.809 26.2919 23.3919 26.2919 23.9997C26.2919 24.6075 26.0504 25.1904 25.6207 25.6202C25.1909 26.05 24.608 26.2914 24.0002 26.2914C23.3924 26.2914 22.8095 26.05 22.3798 25.6202C21.95 25.1904 21.7086 24.6075 21.7086 23.9997C21.7086 23.3919 21.95 22.809 22.3798 22.3793C22.8095 21.9495 23.3924 21.7081 24.0002 21.7081Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#A62D82" />
                  <path
                    d="M31.7627 19.1539C31.1795 19.4119 30.5611 19.5813 29.9279 19.6566C30.5953 19.2574 31.0949 18.6291 31.3334 17.8889C30.707 18.2617 30.0203 18.5229 29.3045 18.6643C28.8237 18.1498 28.1865 17.8087 27.4918 17.6938C26.7971 17.5789 26.0839 17.6968 25.4631 18.0291C24.8423 18.3613 24.3487 18.8894 24.059 19.5311C23.7693 20.1729 23.6997 20.8924 23.8611 21.5777C22.5908 21.5141 21.3481 21.184 20.2137 20.6089C19.0793 20.0338 18.0785 19.2265 17.2763 18.2395C16.9924 18.7272 16.8432 19.2817 16.844 19.846C16.844 20.9536 17.4077 21.9322 18.2648 22.5051C17.7576 22.4891 17.2615 22.3521 16.818 22.1056V22.1453C16.8182 22.883 17.0734 23.5979 17.5405 24.1689C18.0076 24.7399 18.6578 25.1317 19.3809 25.278C18.91 25.4056 18.4163 25.4244 17.9371 25.333C18.141 25.968 18.5383 26.5233 19.0735 26.9212C19.6086 27.3191 20.2548 27.5397 20.9216 27.5521C20.2589 28.0726 19.5002 28.4573 18.6887 28.6843C17.8772 28.9113 17.0289 28.9762 16.1924 28.8752C17.6527 29.8143 19.3527 30.3129 21.0889 30.3113C26.9655 30.3113 30.1792 25.443 30.1792 21.221C30.1792 21.0835 30.1754 20.9445 30.1693 20.8085C30.7948 20.3564 31.3346 19.7964 31.7635 19.1547L31.7627 19.1539Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
