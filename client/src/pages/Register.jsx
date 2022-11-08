import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import Countrydata from "../mock-city/Countrydata.json";
// import Hobbies, { } from "./hobbieData.";
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { options, optionsContact } from './optionSelect'

function Register() {
  const navigate = useNavigate();
  const { register, checkRegister, msg } = useAuth();

  const [step, setStep] = useState(1);
  const [state, setState] = useState([]);
  const [usernameError, setUsernameError] = useState("* Required");
  const [emailError, setEmailError] = useState("* Required");
  const [passwordLengthError, setPasswordLengthError] = useState("* Required");
  const [passwordMatchError, setPasswordMatchError] = useState("* Required");
  const [errorInputMsg, setErrorInputMsg] = useState(null);

  // states of form 1
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [countryid, setCountryid] = useState("");
  const [stateid, setStateid] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //hobbies part
  const animatedComponents = makeAnimated();
  const [selectedOption, setSelectedOption] = useState([]);
  const [contact, setContact] = useState([]);


  // states of form 2
  const [sexualIdentities, setSexualIdentities] = useState("");
  const [sexualPreferences, setSexualPreferences] = useState("");
  const [racialPreferences, setRacialPreferences] = useState("");
  const [meetingInterests, setMeetingInterests] = useState("");
  const [text, setText] = useState([]);

  //states of form 3
  const [images, setImages] = useState([]);

  const [imageToRemove, setImageToRemove] = useState(null);

  const userInfo = {
    name,
    birthday,
    location: countryid,
    city: stateid,
    username,
    email,
    password,
    confirm_password: confirmPassword,
    sex_identity: sexualIdentities,
    sex_pref: sexualPreferences,
    racial_pref: racialPreferences,
    meeting_int: meetingInterests,
    hobby: hobbies,
    profile_pics: images,
  };

  console.log(userInfo);
  console.log(msg);
  // console.log(images);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkNoNull()) {
      console.log("no null");
      const registerResult = await register(userInfo);
      console.log("regis");
      console.log(registerResult);
    }
  };

  useEffect(() => {
    validatePasswordMatch();
    validateEmail();
    validateUsername();
  }, [confirmPassword, email, username]);

  const checkNoNull = () => {
    if (
      name == "" ||
      birthday == "" ||
      countryid == "" ||
      stateid == "" ||
      username == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      sexualIdentities == "" ||
      sexualPreferences == "" ||
      racialPreferences == "" ||
      meetingInterests == ""
    ) {
      // alert("Please complete all answers!");
      setStep(1);
      return false;
    }
  };

  const validateEmail = () => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailFormat)) {
      setEmailError("* Invalid email address!");
    } else {
      setEmailError("");
    }
  };

  const validateUsername = () => {
    if (userInfo.username.length <= 5) {
      setUsernameError("* Username must be at least 6 characters");
    } else {
      setUsernameError("");
    }
  };

  const validatePasswordLength = () => {
    if (password.length <= 7) {
      setPasswordLengthError("* Password must be at least 8 characters");
    } else {
      setPasswordLengthError("");
    } preventDefault
  };

  const validatePasswordMatch = () => {
    if (confirmPassword !== userInfo.password) {
      setPasswordMatchError("* Password doesn't match");
    } else {
      setPasswordMatchError("");
    }
  };

  // input box function
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (hobbies.length < 10) {
        const newHobbies = [...hobbies, text];
        setHobbies(newHobbies);
        setText("");
      } else {
        // alert("Maximum 10 Hobbies/ Interests");
      }
    }
  };
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const deleteHobbies = (key, event) => {
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
      (country) => country.country_name === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    setStateid(stateid);
  };

  const handleRemoveImage = (i) => {
    console.log(i);

    const imageId = i;

    const imageDelete = images.filter((value, i) => {
      return i !== imageId;
    });

    setImages(imageDelete);
  };

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

  const handleStateWiged = () => {
    handleOpenWidget();

    if (images.length > 1) {
      setWiged === false;
    }
  };

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
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="bg-[url('/asset/register/register-section-bg.svg')] bg-no-repeat bg-cover flex flex-col items-center justify-center w-[100%] h-[1000px] ">
          <div className="flex justify-center items-center flex-col w-[80%] h-[950px]">
            {/* **************************** Basic Information ******************************************************************** */}

            <div className="flex w-[95%] h-[20%] mt-[150px]">
              <div className="ml-[8%] mt-[2%] flex flex-col items-start justify-center">
                <p className="text-[90%] text-[#7B4429] mb-[1%]">REGISTER</p>
                <h1 className="text-[250%] text-[#A62D82] leading-[125%] drop-shadow-md font-[800] w-[100%]">
                  Join us and start <br /> matching{" "}
                </h1>
              </div>

              <div className=" ">
                {step === 1 && (
                  <div className="w-[50vh] h-[100%] flex flex-row items-center ml-[35%]">
                    {/* BOX Content */}
                    <div className="w-[30vh] h-[50%] shrink border-[1px] ml-1 mr-1 border-[#A62D82] rounded-3xl flex flex-row items-center justify-evenly">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className=" bottom-1 text-[30px] text-[#A62D82] font-[700]">
                          1
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-start">
                        <p className="text-[#646D89]">Step 1/3</p>
                        <p className="text-[#A62D82] font-[800]">
                          Basic Information
                        </p>
                      </div>
                    </div>

                    <div className="w-[10vh] h-[50%] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl">
                        <p className="text-[30px] font-[700]">2</p>
                      </div>
                    </div>

                    <div className="w-[10vh] h-[50%] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl ">
                        <p className="text-[30px] font-[700]">3</p>
                      </div>
                    </div>
                  </div>
                )}{" "}
                {step === 2 && (
                  <div className="w-[55vh] h-[100%] flex flex-row items-center ml-[20%]">
                    <div className="w-[10vh] h-[50%] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB] flex flex-col justify-center items-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl ">
                        <p className="bottom-1 text-[30px]">1</p>
                      </div>
                    </div>
                    {/* BOX Content */}
                    <div className="w-[40vh] h-[50%] shrink border-[1px] ml-1 mr-1 border-[#A62D82] rounded-3xl flex flex-row items-center justify-evenly">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col justify-center items-center">
                        <p className=" text-[30px] text-[#A62D82] font-[700]">
                          2
                        </p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="">Step 2/3</p>
                        <p className="text-[17px] text-[#A62D82] font-[700]">
                          Identities and Interests
                        </p>
                      </div>
                    </div>

                    <div className="w-[10vh] h-[50%] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB] flex flex-col justify-center items-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl">
                        <p className="bottom-1 text-[30px]">3</p>
                      </div>
                    </div>
                    {/* <Register2 /> */}
                  </div>
                )}{" "}
                {step === 3 && (
                  <div className="w-[50vh] h-[100%] flex flex-row items-center ml-[40%]">
                    <div className="w-[10vh] h-[50%] border-[1px] ml-1 mr-1 rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl ">
                        <p className="text-[30px] font-[700]">1</p>
                      </div>
                    </div>
                    <div className="w-[10vh] h-[50%]  border-[1px] ml-1 mr-1  rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl">
                        <p className="text-[30px] font-[700]">2</p>
                      </div>
                    </div>
                    {/* BOX Content */}
                    <div className="w-[30vh] h-[50%] shrink border-[1px] ml-1 mr-1 border-[#A62D82] rounded-3xl relative flex flex-row items-center justify-evenly">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className="text-[30px] text-[#A62D82] font-[700]">
                          3
                        </p>
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <p className="">Step 3/3</p>
                        <p className="text-[#A62D82] font-[700]">
                          Upload Photos
                        </p>
                      </div>
                    </div>
                    {/* <Register3 /> */}
                  </div>
                )}
              </div>
            </div>

            {/* ***** FORM SET UP Container (Delete the border and rendering form input here)  *********************************** */}

            {/* Form 1 /} */}
            {step === 1 && (
              <div className="w-[95%] h-[80%] flex justify-center">
                <div>
                  <h1 className="basicInformation text-[#A62D82] mt-[20px] font-[800] text-[24px]">
                    Basic Information
                  </h1>
                  <div className="column1 flex">
                    <div className="flex flex-col mr-[12px] mt-[24px]">
                      <label htmlFor="name" className="font-[600] ">
                        Name
                      </label>
                      <input
                        className="w-[453px] rounded-lg border-[#D6D9E4]"
                        type="text"
                        id="name"
                        value={name}
                        name="firstname"
                        placeholder="John Snow"
                        required
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="flex flex-col ml-[12px] mt-[24px]">
                      <label htmlFor="birth" className="font-[600]">
                        Date of birth
                      </label>
                      <input
                        className="w-[453px] rounded-lg border-[#D6D9E4]"
                        type="date"
                        id="birth"
                        name="birthday"
                        value={birthday}
                        placeholder="01/01/2020"
                        required
                        onChange={(event) => {
                          setBirthday(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="column2 flex">
                    <div className="flex flex-col mr-[12px] mt-[40px]">
                      <label htmlFor="location" className="font-[600]">
                        Location
                      </label>
                      <select
                        className="w-[453px] h-[48px] border-[#D6D9E4] rounded-lg p-2"
                        onChange={(e) => handlecounty(e)}
                        value={countryid}
                        required
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
                      <label htmlFor="city" className="font-[600]">
                        City
                      </label>
                      <select
                        className="w-[453px] h-[48px] border-[#D6D9E4] rounded-lg p-2"
                        onChange={(e) => handlestate(e)}
                        value={stateid}
                        required
                      >
                        <option disabled value="">
                          -- Select City --
                        </option>
                        {state.map((getstate, index) => (
                          <option value={getstate.state_name} key={index}>
                            {getstate.state_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="column3 flex">
                    <div className="flex flex-col mr-[12px] mt-[40px]">
                      <label htmlFor="username" className="font-[600]">
                        Username
                      </label>
                      <input
                        className="w-[453px] rounded-lg border-[#D6D9E4]
                    "
                        type="text"
                        id="username"
                        name="username"
                        value={userInfo.username}
                        placeholder="At least 6 characters"
                        minLength={6}
                        required
                        onChange={(event) => {
                          setUsername(event.target.value);
                          validateUsername();
                          const inputData = { username: event.target.value };
                          setTimeout(() => {
                            checkRegister(inputData);
                          }, 500);
                        }}
                      />
                      <div className="text-[#C70039]">{usernameError}</div>
                      {msg.username === "*This Username is already taken." && (
                        <div className="text-[#C70039]">{msg.username}</div>
                      )}
                    </div>
                    <div className="flex flex-col ml-[12px] mt-[40px]">
                      <label htmlFor="Email" className="font-[600]">
                        Email
                      </label>
                      <input
                        className="w-[453px] rounded-lg border-[#D6D9E4]"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          validateEmail();
                          const inputData = { email: event.target.value };
                          setTimeout(() => {
                            checkRegister(inputData);
                          }, 500);
                          if (event.target.value == "") {
                            setMsg({ ...msg, email: "" });
                          }
                        }}
                        placeholder="name@website.com"
                        required
                      />
                      <div className="text-[#C70039]">
                        {emailError}
                        {msg.email === "*This Email is already taken." && (
                          <div className="text-[#C70039]">{msg.email}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="column4 flex">
                    <div className="flex flex-col mr-[12px] mt-[40px]">
                      <label htmlFor="Password" className="font-[600]">
                        Password
                      </label>
                      <input
                        className="w-[453px] rounded-lg border-[#D6D9E4]
                    "
                        type="password"
                        id="Password"
                        name="Password"
                        value={userInfo.password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                          validatePasswordLength();
                        }}
                        placeholder="At least 8 characters"
                        required
                        minLength={8}
                      />
                      <div className="text-[#C70039]">
                        {passwordLengthError}
                      </div>
                    </div>
                    <div className="flex flex-col ml-[12px] mt-[40px]">
                      <label htmlFor="ConfirmPassword" className="font-[600]">
                        Confirm Password
                      </label>
                      <input
                        className="w-[453px] rounded-lg border-[#D6D9E4]
                    "
                        type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        value={confirmPassword}
                        onChange={(event) => {
                          setConfirmPassword(event.target.value);
                          validatePasswordMatch();
                        }}
                        placeholder="At least 8 characters"
                        required
                        minLength={8}
                      />
                      <div className="text-[#C70039]">{passwordMatchError}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* {/ Form 2 /} */}
            {step === 2 && (
              <div className="w-[95%] h-[55%] border-[10px] border-[#fcfcfe] flex justify-center">
                <div>
                  <h1 className="basicInformation text-[#A62D82] mt-[20px] font-[800] text-[24px]">
                    Identities and Interests
                  </h1>
                  <div className="column1 flex">
                    <div className="SexualIdentities flex flex-col mr-[12px] mt-[40px]">
                      <label htmlFor="SexualIdentities" className="font-[600]">
                        Sexual identities
                      </label>
                      <select
                        className="w-[453px] rounded-lg border-[#D6D9E4]
                     h-[48px] p-2"
                        id="SexualIdentities"
                        name="status"
                        value={sexualIdentities}
                        onChange={(event) => {
                          setSexualIdentities(event.target.value);
                        }}
                      >
                        <option disabled value="">
                          -- Select your Sexual Identity --
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Intersex">Non-Binary</option>
                      </select>
                    </div>

                    <div className="SexualPreferences flex flex-col ml-[12px] mt-[40px]">
                      <label htmlFor="SexualPreferences" className="font-[600]">
                        Sexual preferences
                      </label>
                      <select
                        className="w-[453px] rounded-lg border-[#D6D9E4]
                     h-[48px] p-2"
                        id="SexualPreferences"
                        name="SexualPreferences"
                        value={sexualPreferences}
                        onChange={(event) => {
                          setSexualPreferences(event.target.value);
                        }}
                      >
                        <option disabled value="">
                          -- Select your Sexual Preference --
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Intersex">Intersex</option>
                      </select>
                    </div>
                  </div>

                  <div className="column2 flex">
                    <div className="RacialPreferences flex flex-col mr-[12px] mt-[40px] ">
                      <label htmlFor="RacialPreferences" className="font-[600]">
                        Racial preferences
                      </label>
                      <select
                        className="w-[453px] rounded-lg border-[#D6D9E4]
                     h-[48px] p-2"
                        id="RacialPreferences"
                        name="RacialPreferences"
                        value={racialPreferences}
                        onChange={(event) => {
                          setRacialPreferences(event.target.value);
                        }}
                      >
                        <option disabled value="">
                          -- Select your Racial Preference --
                        </option>
                        <option value="American Indian">American Indian</option>
                        <option value="Asian">Asian</option>
                        <option value="White">White</option>
                        <option value="African American">
                          African American
                        </option>
                        <option value="Hispanic or Latino">
                          Hispanic or Latino
                        </option>
                      </select>
                    </div>

                    <div className="MeetingInterests flex flex-col  ml-[12px] mt-[40px]">
                      <label htmlFor="MeetingInterests" className="font-[600]">
                        Meeting interests
                      </label>
                      <select
                        className="w-[453px] h-[48px] border-[#D6D9E4] rounded-lg p-2"
                        id="MeetingInterests"
                        name="MeetingInterests"
                        value={meetingInterests}
                        onChange={(event) => {
                          setMeetingInterests(event.target.value);
                        }}
                      >
                        <option disabled value="">
                          -- Select your Meeting Interest--
                        </option>
                        <option value="Friend">Friend</option>
                        <option value="FWB">FWB</option>
                        <option value="ONS">ONS</option>
                        <option value="Long-term">
                          Long-term relationship
                        </option>
                        <option value="Short-term">
                          Short-term relationship
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-[40px] font-[600]">
                    Hobbies / Interests (Maximum 5)
                    <Select
                      components={animatedComponents}
                      defaultValue={selectedOption}
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

                  <div className="mt-[40px] font-[600]">
                    Contact
                    <Select
                      components={animatedComponents}
                      defaultValue={contact}
                      onChange={setContact}
                      options={optionsContact}
                      isClearable={true}
                      isSearchable={true}
                      isDisabled={false}
                      isLoading={false}
                      isRtl={false}
                      closeMenuOnSelect={false}
                      isMulti
                    />
                  </div>

                  {/* <div className="HobbiesBox flex">
                    <input
                      className="HobbiesInput w-[45%] rounded-l-lg border-[#D6D9E4]  "
                      type="text"
                      value={text}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Enter Your Hobbies / Interests"
                    />
                  


                    <div className="StoreInput border-[1px] h-[60px] w-[55%] border-l-none border-[#D6D9E4] rounded-r-lg">
                      {hobbies.map((item, index) => {
                        return (
                          <div
                            className="inline-block mt-2 mr-2 px-2 h-[30px] rounded-lg text-center text-[#7D2262] bg-[#F4EBF2]"
                            key={index}
                          >
                            {item}
                            <button
                              className="ml-[12px]"
                              onClick={() => {
                                deleteHobbies(index, event);
                              }}
                            >
                              x
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div> */}
                </div>
              </div>
            )}
            {/* {/ Form 3 */}

            {step === 3 && (
              <div className="w-[100%] h-[50%] flex flex-col justify-start items-center">
                <div className=" w-[100%] h-[20%] flex flex-col justify-center items-start mt-[3%]">
                  <h1 className="ProfilePictures text-[#A62D82] font-[800] text-[24px] ">
                    Profile pictures <br />
                  </h1>
                  <p className="font-[400]">Upload at least 2 photos</p>
                </div>

                <div className="w-[100%] h-[80%] flex justify-center flex-row">
                  {/* Images uploader */}

                  {/* 1 ** */}
                  {images.length < 1 ? (
                    <button
                      className="mt-[3%] w-[20%] h-[60%] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500]"
                      type="button"
                      onClick={handleStateWiged}
                    >
                      + <br /> Upload photo{" "}
                    </button>
                  ) : (
                    <p className="w-[35%] h-[60%] flex relative rounded-md overflow-hidden justify-center z-10">
                      <img
                        src={images[0].url}
                        alt="pic-1"
                        className=" mt-3 ml-3 w-auto h-auto rounded-md overflow-hidden z-0 "
                      />
                      <button
                        type="button"
                        className="sticky right-[10%] top-[1%] z-20 w-[30px] h-[30px] flex justify-center items-center text-white text-[20px] rounded-full bg-[#7D2262] overflow-hidden"
                        onClick={() => handleRemoveImage(0)}
                      >
                        X
                      </button>
                    </p>
                  )}

                  {/* 2 ** */}
                  {images.length < 2 ? (
                    <button
                      className="mt-[3%] w-[20%] h-[60%] mr-[0.75rem] flex space-x-2 text-[1rem] font-[500] rounded-lg text-[#7D2262]  "
                      type="button"
                      onClick={handleStateWiged}
                    >
                      + <br /> Upload photo{" "}
                    </button>
                  ) : (
                    <p className="w-[35%] h-[60%] flex  relative rounded-lg overflow-hidden justify-center z-10">
                      <img
                        src={images[1].url}
                        alt="pic-1"
                        className=" mt-3 ml-3  w-auto h-auto rounded-lg overflow-hidden z-10 "
                      />
                      <button
                        type="button"
                        className="sticky right-[10%] top-[1%] z-20 w-[30px] h-[30px] flex justify-center items-center text-white text-[20px] rounded-full bg-[#7D2262] overflow-hidden"
                        onClick={() => handleRemoveImage(1)}
                      >
                        X
                      </button>
                    </p>
                  )}
                  {/* 3 ** */}
                  {images.length < 3 ? (
                    <button
                      className="mt-[3%] w-[20%] h-[60%] mr-[0.75rem] flex space-x-2 text-[1rem] font-[500] rounded-lg text-[#7D2262]  "
                      type="button"
                      onClick={handleStateWiged}
                    >
                      + <br /> Upload photo{" "}
                    </button>
                  ) : (
                    <p className="w-[35%] h-[60%] flex  relative rounded-lg overflow-hidden justify-center z-10">
                      <img
                        src={images[2].url}
                        alt="pic-1"
                        className=" mt-3 ml-3  rounded-lg overflow-hidden z-10 "
                      />
                      <button
                        type="button"
                        className="sticky right-[10%] top-[1%] z-20 w-[30px] h-[30px] flex justify-center items-center text-white text-[20px] rounded-full bg-[#7D2262] overflow-hidden"
                        onClick={() => handleRemoveImage(2)}
                      >
                        X
                      </button>
                    </p>
                  )}
                  {/* 4 ** */}
                  {images.length < 4 ? (
                    <button
                      className="mt-[3%] w-[20%] h-[60%] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] "
                      type="button"
                      onClick={handleStateWiged}
                    >
                      + <br /> Upload photo{" "}
                    </button>
                  ) : (
                    <p className="w-[35%] h-[60%] flex  relative rounded-lg overflow-hidden justify-center z-10">
                      <img
                        src={images[3].url}
                        alt="pic-1"
                        className=" mt-3 ml-3 rounded-lg overflow-hidden z-10 "
                      />
                      <button
                        type="button"
                        className="sticky right-[10%] top-[1%] z-20 w-[30px] h-[30px] flex justify-center items-center text-white text-[20px] rounded-full bg-[#7D2262] overflow-hidden"
                        onClick={() => handleRemoveImage(3)}
                      >
                        X
                      </button>
                    </p>
                  )}
                  {/* 5 ** */}
                  {images.length < 5 ? (
                    <button
                      className="mt-[3%] w-[20%] h-[60%] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] "
                      type="button"
                      onClick={handleStateWiged}
                    >
                      + <br /> Upload photo{" "}
                    </button>
                  ) : (
                    <p className="w-[35%] h-[60%] flex  relative rounded-lg overflow-hidden justify-center z-10">
                      <img
                        src={images[4].url}
                        alt="pic-1"
                        className=" mt-3 ml-3 rounded-lg overflow-hidden z-10 "
                      />
                      <button
                        type="button"
                        className="sticky right-[10%] top-[1%] z-20 w-[30px] h-[30px] flex justify-center items-center text-white text-[20px] rounded-full bg-[#7D2262] overflow-hidden"
                        onClick={() => handleRemoveImage(4)}
                      >
                        X
                      </button>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* *************************** Button ********************************************************************** */}

          {/* Counter x/3, Button Next, Button Submit */}
          <div className=" w-[175vh] h-[10%] border-t border-[#E4E6ED] bg-[white] mb-5 flex flex-col items-center justify-center">
            <div className=" w-[100vh]">
              <div className=" w-[100%] mt-[2%] flex flex-row justify-center content-end mr-[30%] bg-[white]">
                <p className="flex justify-start items-start content-start mt-[1.5%] mr-[70%]">
                  {step === 1 && "1/3"} {step === 2 && "2/3"}{" "}
                  {step === 3 && "3/3"}
                </p>

                {/* Go Back button */}
                <button
                  onClick={handleBack}
                  type="button"
                  className="text-[#C70039] hover:text-black font-[800] "
                >
                  🡐 Back
                </button>

                {/* Go Next button */}
                {step === 1 && (
                  <button
                    type=""
                    onClick={handleNext}
                    className="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800  font-[800] rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-5"
                  >
                    Next step
                  </button>
                )}

                {step === 2 && (
                  <button
                    type=""
                    onClick={handleNext}
                    className="mt-[0.5%] text-white  font-[800] bg-[#C70039] hover:bg-red-800 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-5"
                  >
                    Next step
                  </button>
                )}
                {/* Submit button */}
                {step === 3 && (
                  <button
                    type="submit"
                    disabled={
                      passwordLengthError !== "" ||
                      passwordMatchError !== "" ||
                      usernameError !== "" ||
                      emailError !== ""
                    }
                    className="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800 font-[700] rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 disabled:bg-[#F1F2F6] disabled:text-[#646D89] ml-5"
                  >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form >
    </div >
  );
}

export default Register;
