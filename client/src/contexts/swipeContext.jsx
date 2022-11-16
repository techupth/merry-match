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
  const [matchId, setMatchId] = useState([]);

  const decodeFromToken = () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData);
    setUserData(userData);
  };

  const getDataByFilter = async (data) => {
    const filteredData = await axios.post("http://localhost:4001/swipe", data);
    setFilterData(filteredData.data.data);
  };

  const getMeetingIntFilter = async () => {
    const result = await axios.get("http://localhost:4001/swipe");
    setUsers(result.data.data);
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
    // console.log(result)
    setMatchId(result.data.isMatchId);
    setMerryListUser(result.data.data);
    const matchList = result.data.data;
    const matchId = result.data.isMatchId;
    return ({ matchList , matchId})
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
        matchId,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
