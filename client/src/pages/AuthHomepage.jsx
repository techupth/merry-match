import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Navbarauthen from "../components/NavbarAuthen";
import { useAuth } from "../contexts/authentication";
import axios from "axios";

const HomepageAuth = () => {
  const [data, getData] = useState([]);
  const [images, setImages] = useState([]);
  const { state } = useAuth();
  const getPicture = async (e) => {
    try {
      const userId = state.user.user_id;
      const result = await axios.get(`http://localhost:4001/users/${userId}`);
      getData(result.data.data[0]);
      const getPic = result.data.data[0].profile_pics[0]
      const myObj = JSON.parse(getPic);
      console.log(myObj.url);
      setImages(myObj.url);
    } catch (err) {
      console.log(err);
    }
  };
  
  // console.log(data);
  // console.log(images);

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <div>
      {/* must be authenticated navBar */}
      <div className="text-red-400 text-[30px]"> Hi {data.user_id} username : {data.username}</div>
      <img src={images} />
      {/* {data.profile_pics.map((value) => {
        <div>
          <img src={Object.values(value)} />
        </div>;
      })} */}
      {/* <img src="http://dummyimage.com" /> */}
      <Navbarauthen />
      <Home />
    </div>
  );
};

export default HomepageAuth;
