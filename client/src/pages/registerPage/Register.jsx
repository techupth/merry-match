import React from "react";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import Countrydata from "../../utils/mock-city/Countrydata.json";
// import Hobbies, { } from "./hobbieData.";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { options, optionsContact } from "../../utils/optionSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";

const Register = () => {
  const navigate = useNavigate();
  const { register, checkRegister, msg, setMsg } = useAuth();

  registerLocale("enUS", enUS);

  const [step, setStep] = useState(1);
  const [state, setState] = useState([]);
  const [usernameError, setUsernameError] = useState("* Required");
  const [emailError, setEmailError] = useState("* Required");
  const [passwordLengthError, setPasswordLengthError] = useState("* Required");
  const [passwordMatchError, setPasswordMatchError] = useState("* Required");

  // states of form 1
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [countryid, setCountryid] = useState("");
  const [nationStateId, setNationStateId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // date picker
  const [startDate, setStartDate] = useState(new Date());

  //hobbies part
  const animatedComponents = makeAnimated();
  const [selectedOption, setSelectedOption] = useState([]);

  // states of form 2
  const [sexualIdentities, setSexualIdentities] = useState("");
  const [sexualPreferences, setSexualPreferences] = useState("");
  const [racialPreferences, setRacialPreferences] = useState("");
  const [meetingInterests, setMeetingInterests] = useState("");
  const [text, setText] = useState([]);
  const [contact, setContact] = useState([]);
  //states of form 3
  const [images, setImages] = useState([]);

  const [imageToRemove, setImageToRemove] = useState(null);
  const userInfo = {
    name,
    birthday: birthday,
    location: countryid,
    city: nationStateId,
    username,
    email,
    password,
    confirm_password: confirmPassword,
    sex_identity: sexualIdentities,
    sex_pref: sexualPreferences,
    racial_pref: racialPreferences,
    meeting_int: meetingInterests,
    hobby: selectedOption,
    profile_pics: images,
    contact,
  };
  console.log(userInfo);

  const registerNewUser = async () => {
    await axios.post("http://localhost:4001/auth/register", userInfo, {
      headers: { "Content-Types": "multipart/form-data" },
    });
  };

  const handleBirtday = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    const birthday = `${year}-${month}-${day}`;
    setBirthday(birthday);
  };

  //GetAgeuser
  const userYear = startDate.getFullYear();

  const now = new Date().getFullYear();

  const Age = now - userYear;

  let maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 55);

  const handleSubmit = async (event) => {
    event.preventDefault();
    checkNoNull();
    registerNewUser();
    // alert("Register Successfully!");
    navigate("/login");
  };

  useEffect(() => {
    validateEmail();
    validateUsername();
    validatePasswordMatch();
  }, [username, email, confirmPassword]);

  const checkNoNull = () => {
    if (
      name == "" ||
      birthday == "" ||
      countryid == "" ||
      nationStateId == "" ||
      username == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      sexualIdentities == "" ||
      sexualPreferences == "" ||
      racialPreferences == "" ||
      meetingInterests == "" ||
      contact == ""
    ) {
      alert("Please complete all answers!");
      setStep(1);
      return false;
    }
  };

  const validateEmail = () => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
      setEmailError("");
    } else if (!email.match(mailFormat)) {
      setEmailError("* Invalid email address!");
    } else {
      setEmailError("");
    }
  };

  const validateUsername = () => {
    if (userInfo.username.length == "") {
      setUsernameError("");
    } else if (userInfo.username.length <= 5) {
      setUsernameError("* Username must be at least 6 characters");
    } else {
      setUsernameError("");
    }
  };

  const validatePasswordLength = (e) => {
    if (password.length < 7) {
      setPasswordLengthError("* Password must be at least 8 characters");
    } else {
      setPasswordLengthError("");
    }
    e.preventDefault();
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

  const handleCountry = (e) => {
    const getCountryId = e.target.value;
    const getStateData = Countrydata.find(
      (country) => country.country_name === getCountryId
    ).states;
    setState(getStateData);
    setCountryid(getCountryId);
  };

  const handleState = (e) => {
    const nationStateId = e.target.value;
    setNationStateId(nationStateId);
  };

  const handleRemoveImage = (i) => {
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
          setImages((prev) => [...prev, result.info.url]);
        }
      }
    );
    myWidget.open();
  }

  const handleStateWidget = () => {
    handleOpenWidget();

    if (images.length > 1) {
      setWidget === false;
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
        <div className="bg-[url('/asset/register/register-section-bg.svg')] bg-no-repeat bg-cover flex flex-col items-center justify-center w-[100%] h-[100vh]">
          <div className="flex justify-center items-center flex-col w-[80%] h-[950px]">
            {/* **************************** Basic Information ******************************************************************** */}

            <div className="flex flex-row items-center justify-evenly w-[90vw] h-[20%] mt-[150px] mb-[2%]">
              <div className=" flex flex-col items-start justify-center">
                <p className="text-[90%] text-[#7B4429] mb-[1%]">REGISTER</p>
                <h1 className="text-[250%] text-[#A62D82] leading-[125%] drop-shadow-md font-[800] w-[100%]">
                  Join us and start <br /> matching{" "}
                </h1>
              </div>

              <div className=" ">
                {step === 1 && (
                  <div className="w-[430px] h-[80px] flex flex-row items-center ml-[30%] ">
                    {/* BOX Content */}
                    <div className="w-[246px] h-[80px] shrink border-[1px] ml-1 mr-1 border-[#A62D82] rounded-3xl flex flex-row items-center justify-evenly">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className="text-[24px] text-[#A62D82] font-[700]">
                          1
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-start">
                        <p className="text-[#646D89] text-[12px]">Step 1/3</p>
                        <p className="text-[#A62D82] font-[800] text-[16px]">
                          Basic Information
                        </p>
                      </div>
                    </div>

                    <div className="w-[80px] h-[80px] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className="text-[24px] text-[#9aa1b9] font-[700]">
                          2
                        </p>
                      </div>
                    </div>

                    <div className="w-[80px] h-[80px] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className="text-[24px] text-[#9aa1b9] font-[700]">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                )}{" "}
                {step === 2 && (
                  <div className="w-[472px] h-[80px] flex flex-row items-center ml-[30%]">
                    <div className="w-[80px] h-[80px] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB] flex flex-col justify-center items-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col justify-center items-center ">
                        <p className="text-[24px] font-[700] text-[#9aa1b9]">
                          1
                        </p>
                      </div>
                    </div>
                    {/* BOX Content */}
                    <div className="w-[266px] h-[80px] shrink border-[1px] ml-1 mr-1 border-[#A62D82] rounded-3xl flex flex-row items-center justify-evenly">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col justify-center items-center">
                        <p className=" text-[24px] text-[#A62D82] font-[700]">
                          2
                        </p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="text-[#646D89] text-[12px]">Step 2/3</p>
                        <p className="text-[16px] text-[#A62D82] font-[800]">
                          Identities and Interests
                        </p>
                      </div>
                    </div>

                    <div className="w-[80px] h-[80px] border-[1px] ml-1 mr-1 border-[#E4E6ED] rounded-3xl text-center text-[#C8CCDB] flex flex-col justify-center items-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col justify-center items-center">
                        <p className="text-[24px] font-[700] text-[#9aa1b9]">
                          3
                        </p>
                      </div>
                    </div>
                    {/* <Register2 /> */}
                  </div>
                )}{" "}
                {step === 3 && (
                  <div className="w-[409px] h-[80px] flex flex-row items-center ml-[20%]">
                    <div className="w-[80px] h-[80px] border-[1px] ml-1 mr-1 rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className="text-[24px] font-[700] text-[#9aa1b9]">
                          1
                        </p>
                      </div>
                    </div>
                    <div className="w-[80px] h-[80px]  border-[1px] ml-1 mr-1  rounded-3xl text-center text-[#C8CCDB]  flex flex-col items-center justify-center">
                      {" "}
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className="text-[24px] font-[700] text-[#9aa1b9]">
                          2
                        </p>
                      </div>
                    </div>
                    {/* BOX Content */}
                    <div className="w-[225px] h-[80px] shrink border-[1px] ml-1 mr-1 border-[#A62D82] rounded-3xl relative flex flex-row items-center justify-evenly">
                      <div className=" bg-[#F1F2F6] w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center">
                        <p className="text-[24px] text-[#A62D82] font-[700]">
                          3
                        </p>
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <p className="text-[#646D89] text-[12px]">Step 3/3</p>
                        <p className="text-[#A62D82] text-[16px] font-[800]">
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
              <div className="w-[105%] h-[80%] flex justify-center">
                <div className="flex flex-col  w-[full]">
                  <h1 className="basicInformation text-[#A62D82] mt-[20px] font-[800] text-[24px]">
                    Basic Information
                  </h1>
                  <div className="column1 flex">
                    <div className="flex flex-col mr-[12px] mt-[24px]">
                      <label htmlFor="name" className="font-[600] ">
                        Name
                      </label>
                      <input
                        className="w-[453px] rounded-lg border-[#D6D9E4]  focus:border-pink-300"
                        type="text"
                        id="name"
                        value={name}
                        name="firstname"
                        placeholder="John"
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

                      <DatePicker
                        className="w-[453px] rounded-lg border-[#D6D9E4] focus:border-pink-300"
                        selected={startDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                          setStartDate(date);
                          handleBirtday(date);
                        }}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDate={maxDate}
                        minDate={minDate}
                      />

                      {/* .............. */}

                      {/* ............... */}
                    </div>
                  </div>

                  <div className="column2 flex">
                    <div className="flex flex-col mr-[12px] mt-[40px]">
                      <label htmlFor="location" className="font-[600]">
                        Location
                      </label>
                      <select
                        className="w-[453px] h-[48px] border-[#D6D9E4] rounded-lg p-2"
                        onChange={(e) => handleCountry(e)}
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
                        onChange={(e) => handleState(e)}
                        value={nationStateId}
                        required
                      >
                        <option disabled value="">
                          -- Select City --
                        </option>
                        {state.map((getStateData, index) => (
                          <option value={getStateData.state_name} key={index}>
                            {getStateData.state_name}
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
                          validatePasswordLength(event);
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
              <div className="w-[95%] h-[55%] border-[10px] border-[#fcfcfe] flex justify-center mb-[5%]">
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
                        <option value="LGBTQ+">LGBTQ+</option>
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
                        <option value="LGBTQ+">LGBTQ+</option>
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
                      className="text-[#7D2262] bg-[#F4EBF2]"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      isClearable={true}
                      isSearchable={true}
                      isDisabled={false}
                      isLoading={false}
                      isRtl={false}
                      closeMenuOnSelect={false}
                      isOptionDisabled={() => selectedOption.length >= 5}
                      isMulti
                    />
                  </div>

                  <div className="column1 flex">
                    <div className="flex flex-col mr-[12px] mt-[24px]">
                      <label htmlFor="name" className="font-[600] ">
                        Contact Information
                      </label>
                      <input
                        className="w-[930px] h-[36px] rounded-lg border-[#D6D9E4]"
                        type="text"
                        id="name"
                        value={contact}
                        name="contact"
                        placeholder="Ex Line:ID"
                        required
                        onChange={(event) => {
                          setContact(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* {/ Form 3 */}

            {step === 3 && (
              <div className="w-[80%] h-[50%] flex flex-col justify-start items-center mb-[10%] mt-[-2%]">
                <div className=" w-[100%] h-[20%] flex flex-col justify-center items-start mt-[3%]">
                  <h1 className="ProfilePictures text-[#A62D82] font-[800] text-[24px] ">
                    Profile pictures <br />
                  </h1>

                  <p>Upload at least 2 photos</p>
                </div>

                <div className="w-[100%] h-[100%] flex justify-center flex-row items-start">
                  {/* Images uploader */}

                  {/* 1 ** */}
                  <div className="mt-[24px]">
                    {images.length < 1 ? (
                      <button
                        className=" w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                        type="button"
                        onClick={handleOpenWidget}
                      >
                        + <br /> Upload photo{" "}
                      </button>
                    ) : (
                      <div className="relative w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                        <img
                          src={images[0]}
                          className="w-full h-full rounded-lg object-cover"
                          alt=""
                        />
                        <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                          <button
                            type="button"
                            className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                            onClick={() => {
                              handleRemoveImage(0);
                            }}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2 ** */}
                  <div className="mt-[24px]">
                    {images.length < 2 ? (
                      <button
                        className=" w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                        type="button"
                        onClick={handleOpenWidget}
                      >
                        + <br /> Upload photo{" "}
                      </button>
                    ) : (
                      <div className="relative w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                        <img
                          src={images[1]}
                          className="w-full h-full rounded-lg object-cover"
                          alt=""
                        />
                        <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                          <button
                            type="button"
                            className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                            onClick={() => {
                              handleRemoveImage(1);
                            }}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* 3 ** */}
                  <div className="mt-[24px]">
                    {images.length < 3 ? (
                      <button
                        className=" w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                        type="button"
                        onClick={handleOpenWidget}
                      >
                        + <br /> Upload photo{" "}
                      </button>
                    ) : (
                      <div className="relative w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                        <img
                          src={images[2]}
                          className="w-full h-full rounded-lg object-cover"
                          alt=""
                        />
                        <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                          <button
                            type="button"
                            className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                            onClick={() => {
                              handleRemoveImage(2);
                            }}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* 4 ** */}
                  <div className="mt-[24px]">
                    {images.length < 4 ? (
                      <button
                        className=" w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                        type="button"
                        onClick={handleOpenWidget}
                      >
                        + <br /> Upload photo{" "}
                      </button>
                    ) : (
                      <div className="relative w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                        <img
                          src={images[3]}
                          className="w-full h-full rounded-lg object-cover"
                          alt=""
                        />
                        <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                          <button
                            type="button"
                            className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                            onClick={() => {
                              handleRemoveImage(3);
                            }}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* 5 ** */}
                  <div className="mt-[24px]">
                    {images.length < 5 ? (
                      <button
                        className=" w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]  items-center justify-center  "
                        type="button"
                        onClick={handleOpenWidget}
                      >
                        + <br /> Upload photo{" "}
                      </button>
                    ) : (
                      <div className="relative w-[200px] h-[200px] mr-[0.75rem] flex space-x-2 rounded-lg text-[#7D2262] text-[1rem] font-[500] bg-[#F1F2F6]">
                        <img
                          src={images[4]}
                          className="w-full h-full rounded-lg object-cover"
                          alt=""
                        />
                        <div className="absolute bottom-0 right-[-10px] top-[-12px]">
                          <button
                            type="button"
                            className="w-[24px] h-[24px] text-white text-[12px] rounded-full bg-[#7D2262] "
                            onClick={() => {
                              handleRemoveImage(4);
                            }}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* *************************** Button ********************************************************************** */}

          {/* Counter x/3, Button Next, Button Submit */}
          <div className=" w-[100vw] h-[10vh] mt-5 border-t border-[#E4E6ED] bg-[white] mb-5 pb-10 flex flex-col items-center justify-center">
            <div className=" w-[100vw]">
              <div className=" w-[100%] mt-[2%] flex flex-row justify-center content-end bg-[white]">
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
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    disabled={
                      name == "" ||
                      birthday == "" ||
                      countryid == "" ||
                      nationStateId == "" ||
                      username == "" ||
                      email == "" ||
                      password == "" ||
                      confirmPassword == "" ||
                      sexualIdentities == "" ||
                      sexualPreferences == "" ||
                      racialPreferences == "" ||
                      meetingInterests == "" ||
                      contact == "" ||
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
      </form>
    </div>
  );
};

export default Register;
