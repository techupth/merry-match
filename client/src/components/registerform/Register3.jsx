import React, { useState } from 'react'
import Countrydata from "../../mock-city/countrydata";

const Register3 = () => {
  const [text, setText] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const [images, setImages] = useState({});
  const [imageToRemove, setImageToRemove] = useState(null);
  console.log(Object.values(images))
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
            prev,
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
      <h1 className="ProfilePictures text-[#A62D82] mt-[80px]">
        Profile pictures
      </h1>
      <p>Upload at least 2 photos</p>

      <div className="profileContainer mt-[24px] flex">

      </div>

      {/* <label for="file-upload" class="custom-file-upload">
            <i className="fa fa-plus"></i> Custom Upload
          </label>
          <input id="file-upload" type="file" /> */}

      <button
        className="profile Pic1 w-[167px] h-[167px] bg-[#F1F2F6] mr-[12px] text-[50px] rounded-lg text-[#7D2262] "
        onClick={() => handleOpenWiget()}
      >
        +
        <p className="text-[#7D2262]">
          {Object.values(images).map((image) => (
            <div className="image-preview flex flex-row items-center justify-center ">
              <img className='flex items-center justify-center m-3' src={image.url} />
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
  )
}

export default Register3