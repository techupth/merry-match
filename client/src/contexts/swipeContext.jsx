import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [eachUser, setEachUser] = useState({});
  const [users, setUsers] = useState([]);
  const [merryListUser, setMerryListUser] = useState([]);
  const [matchId, setMatchId] = useState([]);

  const getAllUsers = async () => {
    const result = await axios.get("http://localhost:4001/swipe");
    // console.log(result.data.data, "get All user");
    setUsers(result.data.data);
    return result.data.data;
  };

  const getEachUser = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData.user_id);

    const eachUserResult = await axios.get(
      `http://localhost:4001/filter/${userData.user_id}`
    );
    console.log(eachUserResult.data.data[0], "get each user");
    setEachUser(eachUserResult.data.data[0]);
    return eachUser;
  };
  console.log("each User", eachUser);

  const getDataByFilter = async (data) => {
    // console.log(data);
    const filteredData = await axios.post("http://localhost:4001/filter", data);
    console.log("filter data", filteredData.data.data);
    setFilterData(filteredData.data.data);
    // return filterData;
  };
  console.log("Filter Success", filterData);

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
  // console.log(merryListUser);

  return (
    <SwipeContext.Provider
      value={{
        userData,
        getAllUsers,
        getDataByFilter,
        users,
        merryList,
        merryListUser,
        eachUser,
        matchId,
        filterData,
        getEachUser,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
