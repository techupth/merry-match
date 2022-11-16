import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [filterData, setFilterData] = useState({});
  const [users, setUsers] = useState([]);

  const decodeFromToken = () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData);
    setUserData(userData);
  };

  const getDataByFilter = async (data) => {
    const filteredData = await axios.post("http://localhost:4001/users", data);
    console.log(filteredData);
    setFilterData(filteredData.data.data);
  };

  const getMeetingIntFilter = async () => {
    const result = await axios.get("http://localhost:4001/users", {
      params: userData,
    });
    //  console.log(result.data)
    setUsers(result.data.data);
    // console.log(userData);
  };

  return (
    <SwipeContext.Provider
      value={{
        userData,
        getMeetingIntFilter,
        getDataByFilter,
        users,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
