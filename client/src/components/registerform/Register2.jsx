import React,{useState} from 'react'
import Countrydata from "../../mock-city/countrydata";

const Register2 = () => {
    const [text, setText] = useState("");
    const [hobbies, setHobbies] = useState([]);
  
    const [countryid, setCountryid] = useState("");
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState("");
  
    const [images, setImages] = useState([]);
    const [imageToRemove, setImageToRemove] = useState(null);
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const newHobbies = [...hobbies, text];
        setHobbies(newHobbies);
        setText("");
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
  
    function handleOpenWiget() {
      let myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dn4jfzbs6",
          uploadPreset: "Merry Match",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setImages((prev) => [
              ...prev,
              { url: result.info.url, publid_id: result.info.public_id },
            ]);
          }
        }
      );
      myWidget.open();
    }
  
    console.log(images);


  return (
    <div>
    <h1 className="basicInformation text-[#A62D82] mt-[80px]">
            Identities and Interests
          </h1>
          {/* column 1 */}
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

          <div className="HobbiesBox flex">
            <input
              className="HobbiesInput w-[45%] rounded-l-lg border-black  "
              type="text"
              value={text}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />

            <div className="StoreInput border-[1px] border-black h-[50px] w-[55%] border-l-none rounded-r-lg">
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
            </div>
          </div>
  </div>
  )
}

export default Register2