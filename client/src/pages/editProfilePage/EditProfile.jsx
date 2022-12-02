import React, { useState, useEffect, useRef } from "react";
import CountryData from "../../utils/mock-city/Countrydata.json";
import axios from "axios";
import makeAnimated from "react-select/animated";
import { options } from "../../utils/optionSelect";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Spinner, Tooltip } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jwtDecode from "jwt-decode";

// Components
import DeleteButton from "../../components/editPageComponents/DeleteButton";
import Footer from "../../components/editPageComponents/Footer";

// Modal
import EditModal from "../../components/editPageComponents/EditModal";

const EditProfile = () => {
  const [userData, setUserData] = useState({});
  const [getData, setGetData] = useState({});
  const [isLoading, setIsLoading] = useState(null);

  const [state, setState] = useState([]);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [sexPref, setSexPref] = useState("");
  const [sexIdentity, setSexIdentity] = useState("");
  const [racialPref, setRacialPref] = useState("");
  const [meetingInt, setMeetingInt] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [aboutMe, setAboutMe] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState("");

  // Photos
  const [Images, setImages] = useState([]);
  //hobbies part
  const animatedComponents = makeAnimated();
  const [contact, setContact] = useState("----contact---");

  // Delete button
  const [deleteAccount, setDeleteAccount] = useState(false);

  // Preview modal
  const [preview, setPreview] = useState(false);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // const navigate = useNavigate();

  console.log(location);
  console.log(city);

  const decodeFromToken = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);

    setIsLoading("loading");
    try {
      const result = await axios.get(
        `http://localhost:4001/users/${userData.user_id}`
      );
      setGetData(result.data.data[0]);
      setName(result.data.data[0].name);
      setUsername(result.data.data[0].username);
      setEmail(result.data.data[0].email);
      setSexIdentity(result.data.data[0].sex_identity);
      setSexPref(result.data.data[0].sex_pref);
      setRacialPref(result.data.data[0].racial_pref);
      setMeetingInt(result.data.data[0].meeting_int);
      setLocation(result.data.data[0].location);
      setCity(result.data.data[0].city);
      setAboutMe(result.data.data[0].about_me);
      setContact(result.data.data[0].contact);
      setDate(result.data.data[0].birthday);
      // console.log(result.data.data[0])
      // Photo

      const newItemImage = [];
      if (result.data.data[0].profile_pics[0] !== undefined) {
        const Photo1 = result.data.data[0].profile_pics[0];
        newItemImage.push(Photo1);
      }

      if (result.data.data[0].profile_pics[1] !== undefined) {
        const Photo2 = result.data.data[0].profile_pics[1];
        newItemImage.push(Photo2);
      }
      if (result.data.data[0].profile_pics[2] !== undefined) {
        const Photo3 = result.data.data[0].profile_pics[2];
        newItemImage.push(Photo3);
      }
      if (result.data.data[0].profile_pics[3] !== undefined) {
        const Photo4 = result.data.data[0].profile_pics[3];
        newItemImage.push(Photo4);
      }
      if (result.data.data[0].profile_pics[4] !== undefined) {
        const Photo5 = result.data.data[0].profile_pics[4];
        newItemImage.push(Photo5);
      }
      setImages(newItemImage);

      setIsLoading("data");
    } catch (err) {
      console.log(err);
      setIsLoading("error");
    }
  };

  let maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 55);

  const handleCountry = (data) => {
    const getCountryId = data;
    const getStateData = CountryData.find(
      (country) => country.country_name === getCountryId
    ).states;
    setCity(getStateData[0].state_name);
    setState(getStateData);
    setLocation(getCountryId);
  };

  const handleNationState = (e) => {
    const nationStateId = e.target.value;
    setCity(nationStateId);
  };

  // Update Profile
  const updateUserData = {
    user_id: getData.user_id,
    name,
    birthday: birthday,
    location: location,
    city: city,
    sex_identity: sexIdentity,
    sex_pref: sexPref,
    racial_pref: racialPref,
    meeting_int: meetingInt,
    about_me: aboutMe,
    hobby: hobbies,
    profile_pics: Images,
    contact: contact,
  };

  const updateUserProfile = async (updateUserData) => {
    try {
      await axios.put(
        `http://localhost:4001/users/${getData.user_id}`,
        updateUserData
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (event, userData) => {
    event.preventDefault();
    updateUserProfile(updateUserData);
    localStorage.setItem("profileImg", Images[0]);
    localStorage.setItem("profileName", name);
  };

  const handleHobbie = (data) => {
    const hobbiesArr = [];
    if (data !== undefined) {
      for (let i = 0; i < data.length; i++) {
        const obj = JSON.parse(data[i]);
        hobbiesArr.push(obj);
      }
    }

    setHobbies(hobbiesArr);
  };

  const handleDate = (data) => {
    let parts = data.split("T");
    let strDate = parts[0].split("-");
    const myDate = new Date(strDate[0], strDate[1] - 1, Number(strDate[2]) + 1);
    if (myDate != "Invalid Date") {
      setStartDate(myDate);
    }

    handleBirtday(myDate);
  };

  const handleOpenWidget = () => {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dn4jfzbs6",
        uploadPreset: "Merry Match",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [...prev, result.info.url]);
        }
      }
    );
    myWidget.open();
  };

  const deleteImage = (item) => {
    const imageDelete = Images.filter((value, i) => {
      return i !== item;
    });
    setImages(imageDelete);
  };

  const handleBirtday = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();

    const birthday = `${year}-${month}-${day}`;

    setBirthday(birthday);
  };

  const handleClickScroll = () => {
    const element = document.getElementById("prev");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    decodeFromToken();

    handleDate(date);
    handleHobbie(getData.hobby);
    if (getData.location !== undefined) {
      handleCountry(location);
    }
  }, [date]);

  return (
    <div className="w-full bg-[#FCFCFE] flex flex-col">
      {/* show preview modal */}
      {preview && (
        <EditModal close={() => setPreview(!preview)} data={updateUserData} />
      )}
      {isLoading === "loading" ? (
        <div className="flex items-center justify-center mt-[500px] text-[100px]">
          <Spinner
            thickness="7px"
            speed="0.65s"
            emptyColor="gray.200"
            color="pink"
            size="xl"
          />
        </div>
      ) : isLoading === "data" ? (
        <div className="informationContainer flex flex-col items-center justify-start">
          <form className="w-[640px]   md:w-[800px]  lg:w-[930px]">
            {/* start Header */}
            <div className="flex mt-[150px]">
              <div className="">
                <h1 className="text-[46px] text-[#A62D82] font-extrabold leading-[125%]">
                  Let’s make profile{" "}
                </h1>
                <h1 className="text-[46px] text-[#A62D82] font-extrabold leading-[125%]">
                  to let others know you
                </h1>
              </div>

              {/* preview modal button */}
              <div className=" flex self-end ml-[80px] z-0">
                <Tooltip label="View profile" bg="gray.400">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setPreview(!preview);
                      handleClickScroll();
                    }}
                    className="w-[162px] h-[48px] bg-[#FFE1EA] rounded-full text-[#C70039] font-[700] hover:bg-[#C70039] hover:text-[#FFE1EA]"
                  >
                    Preview Profile
                  </button>
                </Tooltip>
                {/* update profile */}
                <Tooltip label="Update Profile" bg="gray.400">
                  <button
                    className="w-[162px] h-[48px] bg-[#C70039] ml-[16px] rounded-full text-[#FFFFFF] font-[700] hover:bg-[#FFE1EA] hover:text-[#C70039]"
                    onClick={(event) => {
                      handleUpdate(event, updateUserData);
                      alert("Updated Sucessfully!");
                      window.location.reload();
                      // navigate("/");
                    }}
                  >
                    Update Profile
                  </button>
                </Tooltip>
              </div>
            </div>
            {/* End Header */}

            {/* Page 1 */}
            {/* colomn 1 */}

            <h4 className="basicInformation text-[#A62D82] mt-[80px] font-bold text-[24px] z-0">
              Basic Information
            </h4>
            <div className="column1 flex z-0">
              <div className="flex flex-col mr-[12px] mt-[24px]">
                <label htmlFor="name">Name</label>
                <input
                  className="w-[453px] rounded-lg border-[#D6D9E4] border-[1px] "
                  type="text"
                  id="name"
                  name="firstname"
                  placeholder="John Snow"
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col ml-[12px] mt-[24px] z-0">
                <label htmlFor="birth">Date of birth</label>
                <DatePicker
                  className="w-[453px] rounded-lg focus:border-pink-300 focus:border-[2px] border-[#D6D9E4] border-[1px]"
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  maxDate={maxDate}
                  minDate={minDate}
                  onChange={(date) => {
                    setStartDate(date);
                    handleBirtday(date);
                  }}
                />
              </div>
            </div>

            {/* colomn2 */}
            <div className="column2 flex">
              <div className="flex flex-col mr-[12px] mt-[40px]">
                <label htmlFor="location">Location</label>
                <select
                  className="w-[453px] h-[48px] rounded-lg p-[12px] border-[#D6D9E4] border-[1px]"
                  onChange={(e) => {
                    handleCountry(e.target.value);
                  }}
                  value={location}
                >
                  <option disabled value="">
                    -- Select Country--
                  </option>
                  {CountryData.map((getCountry, index) => (
                    <option key={index}>{getCountry.country_name}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col ml-[12px] mt-[40px]" id="prev">
                <label htmlFor="city">City</label>
                <select
                  className="w-[453px] h-[48px] rounded-lg p-[12px] border-[#D6D9E4] border-[1px]"
                  onChange={(e) => {
                    handleNationState(e);
                  }}
                  value={city}
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
                  className="w-[453px] rounded-lg text-[#9AA1B9] border-[#D6D9E4] border-[1px]"
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="At leaset 6 charactor"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  disabled
                />
              </div>
              <div className="flex flex-col ml-[12px] mt-[40px]">
                <label htmlFor="Email">Email</label>
                <input
                  className="w-[453px] rounded-lg text-[#9AA1B9] border-[#D6D9E4] border-[1px]"
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="name@website.com"
                  value={email}
                  disabled
                />
              </div>
            </div>

            {/* Page 2 */}
            <h1 className="basicInformation text-[#A62D82] mt-[80px] font-bold text-[24px]">
              Identities and Interests:
            </h1>
            {/* colomn1 */}
            <div className="column1 flex">
              <div className="SexualIdentities flex flex-col mr-[12px] mt-[40px]">
                <label htmlFor="SexualIdentities">Sexual identities</label>
                <select
                  className="w-[453px] rounded-lg h-[48px] p-[12px] border-[#D6D9E4] border-[1px]"
                  id="SexualIdentities"
                  name="status"
                  value={sexIdentity}
                  onChange={(e) => {
                    setSexIdentity(e.target.value);
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="LGBTQ+">LGBTQ+</option>
                </select>
              </div>

              <div className="SexualPreferences flex flex-col ml-[12px] mt-[40px]">
                <label htmlFor="SexualPreferences">Sexual preferences</label>
                <select
                  className="w-[453px] rounded-lg h-[48px] p-[12px] border-[#D6D9E4] border-[1px]"
                  id="SexualPreferences"
                  name="SexualPreferences"
                  value={sexPref}
                  onChange={(e) => {
                    setSexPref(e.target.value);
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="LGBTQ+">LGBTQ+</option>
                </select>
              </div>
            </div>

            {/* colomn2 */}
            <div className="column2 flex">
              <div className="RacialPreferences flex flex-col mr-[12px] mt-[40px] ">
                <label htmlFor="RacialPreferences">Racial preferences</label>
                <select
                  className="w-[453px] rounded-lg h-[48px] p-[12px] border-[#D6D9E4] border-[1px]"
                  id="RacialPreferences"
                  name="RacialPreferences"
                  value={racialPref}
                  onChange={(e) => {
                    setRacialPref(e.target.value);
                  }}
                >
                  <option value="Asian">Asian</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>

              <div className="MeetingInterests flex flex-col  ml-[12px] mt-[40px]">
                <label htmlFor="MeetingInterests">Meeting interests</label>
                <select
                  className="w-[453px] h-[48px] rounded-lg p-[12px] border-[#D6D9E4] border-[1px]"
                  id="MeetingInterests"
                  name="MeetingInterests"
                  value={meetingInt}
                  onChange={(e) => {
                    setMeetingInt(e.target.value);
                  }}
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
                isOptionDisabled={() => hobbies.length >= 5}
                closeMenuOnSelect={false}
                value={hobbies}
                isMulti
              />
            </div>
            <div className="flex flex-col mt-[24px]">
              <label htmlFor="AboutMe">About me (Maximum 150 characters)</label>
              <textarea
                id="AboutMe"
                name="AboutMe"
                maxLength="150"
                rows="1"
                className="rounded-lg h-[127px] p-[12px] border-[#D6D9E4] border-[1px]"
                value={aboutMe}
                onChange={(event) => {
                  setAboutMe(event.target.value);
                }}
              ></textarea>
            </div>

            <div className="flex flex-col mt-[24px]">
              <label htmlFor="Contact" className="font-[600]">
                Contact (Maximum 150 characters)
              </label>
              <textarea
                id="Contact"
                name="Contact"
                maxLength="150"
                value={contact}
                rows="1"
                className="rounded-lg h-[100px] p-[12px] border-[#D6D9E4]"
                onChange={(event) => {
                  setContact(event.target.value);
                }}
              ></textarea>
            </div>

            <h1 className="ProfilePictures text-[#A62D82] mt-[80px] font-bold text-[24px] z-0">
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
                    onClick={handleOpenWidget}
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
                    onClick={handleOpenWidget}
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
                    onClick={handleOpenWidget}
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
                    onClick={handleOpenWidget}
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
                    onClick={handleOpenWidget}
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
          {deleteAccount && (
            <DeleteButton close={setDeleteAccount} userId={getData.user_id} />
          )}

          <div className="delete-section flex flex-col justify-end items-end  h-[70px] w-full   ">
            <button
              className="text-[#646D89] text-[16px] mr-[320px] hover:text-gray-300 z-0 relative"
              onClick={() => setDeleteAccount(!deleteAccount)}
            >
              Delete account
            </button>
          </div>
          <Footer />
        </div>
      ) : isLoading === "error" ? (
        <div>Error</div>
      ) : (
        <div className=" flex items-center justify-center ">hello</div>
      )}
    </div>
  );
};

export default EditProfile;
