import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [users, setUsers] = useState([]);


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
    const result = await axios.get("http://localhost:4001/users", {
      params: userData,
    });
    //  console.log(result.data)
    setUsers(result.data.data)
    // console.log(userData);
  };



  const merryList = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    const result = await axios.get(
      `http://localhost:4001/swipe/?userId=${userData.user_id}`,
      {
        params: userData,
      }
    );
    console.log("merryList success", result);
    // console.log(result)
    setMatchId(result.data.isMatchId);
    console.log("merryList success", result);
    setMerryListUser(result.data.data);
    const matchList = result.data.data;
    const matchId = result.data.isMatchId;
    return { matchList, matchId };
  };
  console.log(merryListUser);

  return (
    <SwipeContext.Provider
      value={{
        decodeFromToken,
        userData,
        getAllUsers,
        getDataByFilter,
        users,
        merryList,
        decodeFromToken,
        merryListUser,
        filterData,
        eachUser,
        getEachUser,
        matchId,
        filterData,
        eachUser,
        getEachUser,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
