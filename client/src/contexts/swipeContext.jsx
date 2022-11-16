import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [filterData, setFilterData] = useState({});
  const [users, setUsers] = useState([]);
  const [merryListUser, setMerryListUser] = useState([]);

  const decodeFromToken = () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData);
    setUserData(userData);
  };

  const getDataByFilter = async (data) => {
    console.log(data);
    const filteredData = await axios.post("http://localhost:4001/swipe", data);
    setFilterData(filteredData.data.data);
    console.log("Filter Success", filterData);
  };

  const getMeetingIntFilter = async () => {
    const result = await axios.get("http://localhost:4001/swipe");
    // console.log(result.data.data);
    setUsers(result.data.data);
    // console.log(userData);
  };

  const merryList = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData.user_id);
    const result = await axios.get(
      `http://localhost:4001/swipe/?userId=${userData.user_id}`,
      {
        params: userData,
      }
    );
    console.log(result);
    setMerryListUser(result.data.data);
  };

  return (
    <SwipeContext.Provider
      value={{
        decodeFromToken,
        userData,
        getMeetingIntFilter,
        getDataByFilter,
        users,
        merryList,
        decodeFromToken,
        merryListUser,
        filterData,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
