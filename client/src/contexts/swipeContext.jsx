import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [filterData, setFilterData] = useState({
    loading : null,
    data : [],
    err : null
  });
  const [eachUser, setEachUser] = useState({});
  const [users, setUsers] = useState([]);
  const [merryListUser, setMerryListUser] = useState([]);
  const [matchId, setMatchId] = useState([]);
  const [indexUsers, setIndexUsers] = useState(0);

  const getAllUsers = async () => {
    const result = await axios.get("http://localhost:4001/swipe");
    // console.log(result.data.data, "get All user");
    setUsers(result.data.data);
    return result.data.data;
  };

  const getEachUser = async () => {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    // console.log(userData.user_id);

    const eachUserResult = await axios.get(
      `http://localhost:4001/filter/${userData.user_id}`
    );
    // console.log(eachUserResult.data.data[0], "get each user");
    setEachUser(eachUserResult.data.data[0]);
    // console.log(
    //   eachUserResult.data.data[0].user_age - 10,
    //   eachUserResult.data.data[0].user_age + 10
    // );
    getDataByFilter({
      ageRange: [
        eachUserResult.data.data[0].user_age - 10,
        eachUserResult.data.data[0].user_age + 10,
      ],
      meetingInt: [eachUserResult.data.data[0].meeting_int],
      sexPreference: eachUserResult.data.data[0].sex_pref,
      user_id: eachUserResult.data.data[0].user_id,
    });
    return eachUserResult.data.data[0];
  };
  // console.log("each User", eachUser);

  const getDataByFilter = async (data) => {
    try {
      console.log(data);
      setFilterData({...filterData, loading : true});
      const filteredData = await axios.post("http://localhost:4001/filter", data);
      // console.log("filter data", filteredData.data.data);
      // setIndexUsers(filteredData.data.data.length)
      setFilterData({...filterData, data : filteredData.data.data, loading : null });
      // console.log(filteredData.data.data)
    } catch (err) {
      setFilterData({...filterData, err : true});
      console.log(err);
    }
  };
  // console.log("Filter Success", filterData);

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
    // console.log("merryList success", result);
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
        indexUsers,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
