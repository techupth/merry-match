import React,{useState} from 'react'
import Countrydata from "../../mock-city/countrydata";

const Register1 = () => {
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
  )
}

export default Register1