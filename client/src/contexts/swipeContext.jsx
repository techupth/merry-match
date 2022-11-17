import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [filterData, setFilterData] = useState({});
  const [eachUser, setEachUser] = useState({});
  const [users, setUsers] = useState([]);
  const [merryListUser, setMerryListUser] = useState([]);
  const [matchId, setMatchId] = useState([]);

  // const decodeFromToken = () => {
  //   const token = localStorage.getItem("token");
  //   const userData = jwtDecode(token);
  //   console.log(userData);
  //   setUserData(userData);
  // };

  const getAllUsers = async () => {
    const result = await axios.get("http://localhost:4001/swipe");
    setUsers(result.data.data);
    return users;
  };

  const getEachUser = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    const eachUserResult = await axios.get(
      `http://localhost:4001/swipe/${userData.user_id}`
    );
    console.log(eachUserResult.data.data[0], "get each user");
    setEachUser(eachUserResult.data.data[0]);

    return eachUser;
  };

  console.log(eachUser);
  console.log(eachUser.meeting_int);

  const getDataByFilter = async (data) => {
    console.log(data);
    const filteredData = await axios.post("http://localhost:4001/swipe", data);
    setFilterData(filteredData.data.data);
    console.log("Filter Success", filterData);
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
    // console.log("merryList success", result);
    // console.log(result)
    setMatchId(result.data.isMatchId);
    setMerryListUser(result.data.data);
    const matchList = result.data.data;
    const matchId = result.data.isMatchId;
    return { matchList, matchId };
  };

  return (
    <SwipeContext.Provider
      value={{
        // decodeFromToken,
        userData,
        getAllUsers,
        getDataByFilter,
        users,
        merryList,
        merryListUser,
        filterData,
        eachUser,
        getEachUser,
        matchId,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
