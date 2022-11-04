import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Countrydata from "../mock-city/Countrydata.json";

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [state, setState] = useState([]);

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
  console.log(images);

  const registerNewUser = async () => {
    await axios.post("http://localhost:4001/auth/register", userInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerNewUser();
    alert("Register Sucessful");
    navigate("/login");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (hobbies.length < 10) {
        const newHobbies = [...hobbies, text];
        setHobbies(newHobbies);
        setText("");
      } else {
        alert("Maximum 10 Hobbies/ Interests");
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

  //   LOG countryid, stateid
  console.log(countryid, stateid);

  function handleRemoveImage(img) {
    setImageToRemove(img.public_id);
    axios
      .delete(`http://localhost:8080/${img.public_id}`)
      .then(() => {
        setImageToRemove(null);
        setImages((prev) =>
          prev.filter((imgs) => imgs.public_id !== img.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

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
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="bg-white flex flex-col items-center justify-center w-[100%] h-[1200px] ">
        <div className="flex justify-center items-center flex-col w-[60%] h-[950px]">
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

          {/* ***** FORM SET UP Container (Delete the border and rendering form input here)  *********************************** */}

          {/* Form 1 /} */}
          {step === 1 && (
            <div className="w-[95%] h-[80%] border-[10px] flex justify-center">
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
                      required
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
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
                      required
                      onChange={(event) => {
                        setBirthday(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="column2 flex">
                  <div className="flex flex-col mr-[12px] mt-[40px]">
                    <label for="location">Location</label>
                    <select
                      className="w-[453px] h-[48px] rounded-lg p-2"
                      onChange={(e) => handlecounty(e)}
                      required
                    >
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
                      className="w-[453px] h-[48px] rounded-lg p-2"
                      onChange={(e) => handlestate(e)}
                      required
                    >
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
                    <label for="username">Username</label>
                    <input
                      className="w-[453px] rounded-lg"
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder="At least 6 characters"
                      required
                    />
                  </div>
                  <div className="flex flex-col ml-[12px] mt-[40px]">
                    <label for="Email">Email</label>
                    <input
                      className="w-[453px] rounded-lg"
                      type="email"
                      id="Email"
                      name="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="name@website.com"
                      required
                    />
                  </div>
                </div>

                <div className="column4 flex">
                  <div className="flex flex-col mr-[12px] mt-[40px]">
                    <label for="Password">Password</label>
                    <input
                      className="w-[453px] rounded-lg"
                      type="password"
                      id="Password"
                      name="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="At least 8 character"
                      required
                      minLength={8}
                    />
                  </div>
                  <div className="flex flex-col ml-[12px] mt-[40px]">
                    <label for="ConfirmPassword">Confirm Password</label>
                    <input
                      className="w-[453px] rounded-lg"
                      type="password"
                      id="ConfirmPassword"
                      name="ConfirmPassword"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      placeholder="At least 8 character"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* {/ Form 2 /} */}
          {step === 2 && (
            <div className="w-[95%] h-[80%] border-[10px] flex justify-center">
              <div>
                <h1 className="basicInformation text-[#A62D82] mt-[80px]">
                  Identities and Interests
                </h1>
                <div className="column1 flex">
                  <div className="SexualIdentities flex flex-col mr-[12px] mt-[40px]">
                    <label for="SexualIdentities">Sexual identities</label>
                    <select
                      className="w-[453px] rounded-lg h-[48px] p-2"
                      id="SexualIdentities"
                      name="status"
                      onChange={(event) => {
                        setSexualIdentities(event.target.value);
                      }}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="SexualPreferences flex flex-col ml-[12px] mt-[40px]">
                    <label for="SexualPreferences">Sexual preferences</label>
                    <select
                      className="w-[453px] rounded-lg h-[48px] p-2"
                      id="SexualPreferences"
                      name="SexualPreferences"
                      value={sexualPreferences}
                      onChange={(event) => {
                        setSexualPreferences(event.target.value);
                      }}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="column2 flex">
                  <div className="RacialPreferences flex flex-col mr-[12px] mt-[40px] ">
                    <label for="RacialPreferences">Racial preferences</label>
                    <select
                      className="w-[453px] rounded-lg h-[48px] p-2"
                      id="RacialPreferences"
                      name="RacialPreferences"
                      value={racialPreferences}
                      onChange={(event) => {
                        setRacialPreferences(event.target.value);
                      }}
                    >
                      <option value="Asian">Asian</option>
                      <option value="Europe">Europe</option>
                    </select>
                  </div>

                  <div className="MeetingInterests flex flex-col  ml-[12px] mt-[40px]">
                    <label for="MeetingInterests">Meeting interests</label>
                    <select
                      className="w-[453px] h-[48px] rounded-lg p-2"
                      id="MeetingInterests"
                      name="MeetingInterests"
                      onChange={(event) => {
                        setMeetingInterests(event.target.value);
                      }}
                    >
                      <option value="Friend">Friend</option>
                      <option value="FWB">FWB</option>
                      <option value="ONS">ONS</option>
                      <option value="Long-term">Long-term relationship</option>
                      <option value="Short-term">
                        Short-term relationship
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-[40px]">
                  Hobbies / Interests (Maximum 10)
                </div>

                <div className="HobbiesBox flex">
                  <input
                    className="HobbiesInput w-[45%] rounded-l-lg border-black  "
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter Your Hobbies / Interests"
                  />

                  <div className="StoreInput border-[1px] border-black h-[60px] w-[55%] border-l-none rounded-r-lg">
                    {hobbies.map((item, index) => {
                      return (
                        <div className="inline-block mt-2 mr-2 px-2 h-[30px] rounded-lg text-center text-[#7D2262] bg-[#F4EBF2]">
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
                </div>
              </div>
            </div>
          )}
          {/* {/ Form 3 */}

          {step === 3 && (
            <div className="w-[95%] h-[80%] border-[10px] flex justify-center">
              <div>
                <h1 className="ProfilePictures text-[#A62D82] mt-[80px]">
                  Profile pictures
                </h1>
                <p>Upload at least 2 photos</p>

                <div className="profileContainer mt-[24px] flex"></div>

                <button
                  className="profile Pic1 w-[167px] h-[167px] bg-[#F1F2F6] mr-[12px] text-[50px] rounded-lg text-[#7D2262]"
                  type="button"
                  onClick={handleOpenWidget}
                >
                  +
                  <p className="text-[#7D2262]">
                    {images.map((image) => (
                      <div className="image-preview flex flex-row items-center justify-center ">
                        <img
                          className="flex items-center justify-center m-3"
                          src={image.url}
                        />
                        {imageToRemove != image.public_id && (
                          <i
                            className="fa fa-plus"
                            onClick={() => handleRemoveImage()}
                          ></i>
                        )}
                      </div>
                    ))}
                  </p>
                </button>
              </div>
            </div>
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
                type=""
                onClick={handleNext}
                class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Next step
              </button>
            )}

            {step === 2 && (
              <button
                type=""
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
                class="mt-[0.5%] text-white bg-[#C70039] hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
