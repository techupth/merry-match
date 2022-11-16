import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [users, setUsers]= useState([]);
  const [merryListUser, setMerryListUser]= useState([]);
 


  const decodeFromToken = () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData);
    setUserData(userData);
  };

  const getMeetingIntFilter = async () => {
    const result = await axios.get("http://localhost:4001/users", {
      params: userData,
    });
    setUsers(result.data.data)
  };

  const merryList = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData.user_id)
    const result = await axios.get(`http://localhost:4001/swipe/?userId=${userData.user_id}`, {
      params: userData,
    });
    console.log(result)
    setMerryListUser(result.data.data)
  };

  

  


  return (
    <SwipeContext.Provider
      value={{
        decodeFromToken,
        userData,
        getMeetingIntFilter,
        users,
        merryList,
        merryListUser,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
