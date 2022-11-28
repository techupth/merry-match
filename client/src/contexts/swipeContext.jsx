import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const SwipeContext = React.createContext();

const SwipeProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [filterData, setFilterData] = useState({
    loading: null,
    data: [],
    err: null,
  });

  const [eachUser, setEachUser] = useState({});
  const [users, setUsers] = useState([]);
  const [merryListUser, setMerryListUser] = useState([]);
  const [matchId, setMatchId] = useState([]);
  const [indexUsers, setIndexUsers] = useState(0);
  const [unMatch, setUnMatch] = useState([1]);
  const [defaultDataToFilter, setDefaultDataToFilter] = useState({});

  const getAllUsers = async () => {
    const result = await axios.get("http://localhost:4001/swipe");
    setUsers(result.data.data);
    return result.data.data;
  };

  const getEachUser = async () => {
    let initialDataToFilter = {};
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);

    const eachUserResult = await axios.get(
      `http://localhost:4001/filter/${userData.user_id}`
    );
    setEachUser(eachUserResult.data.data[0]);

    if (eachUserResult.data.data[0].user_age <= 28) {
      initialDataToFilter = {
        ageRange: [18, eachUserResult.data.data[0].user_age + 10],
        meetingInt: [eachUserResult.data.data[0].meeting_int],
        sexPreference: eachUserResult.data.data[0].sex_pref,
        user_id: eachUserResult.data.data[0].user_id,
      };
    } else if (eachUserResult.data.data[0].user_age >= 45) {
      initialDataToFilter = {
        ageRange: [eachUserResult.data.data[0].user_age - 10, 55],
        meetingInt: [eachUserResult.data.data[0].meeting_int],
        sexPreference: eachUserResult.data.data[0].sex_pref,
        user_id: eachUserResult.data.data[0].user_id,
      };
    } else {
      initialDataToFilter = {
        ageRange: [
          eachUserResult.data.data[0].user_age - 10,
          eachUserResult.data.data[0].user_age + 10,
        ],
        meetingInt: [eachUserResult.data.data[0].meeting_int],
        sexPreference: eachUserResult.data.data[0].sex_pref,
        user_id: eachUserResult.data.data[0].user_id,
      };
    }
    setDefaultDataToFilter(initialDataToFilter);
    return eachUserResult.data.data[0];
  };

  const getDataByFilter = async (data) => {
    try {
      setFilterData({ ...filterData, loading: true });
      const filteredData = await axios.post(
        "http://localhost:4001/filter",
        data
      );
      setFilterData({
        ...filterData,
        data: filteredData.data.data,
        loading: null,
      });
    } catch (err) {
      setFilterData({ ...filterData, err: true });
      console.log(err);
    }
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
    setMatchId(result.data.isMatchId);
    setMerryListUser(result.data.data);
    const matchList = result.data.data;
    const matchId = result.data.isMatchId;

    return { matchList, matchId };
  };

  const postSwipe = async (index, type) => {
    const userId = eachUser.user_id;
    const swipeData = {
      swiper: userId,
      swipe_type: type,
      swipee: filterData.data[index].user_id,
    };
    const response = await axios.post(
      `http://localhost:4001/swipe/`,
      swipeData
    );
  };


  const deleteMatch = async (arr) => {
    const request = arr;
    const response = await axios.delete(
      `http://localhost:4001/swipe/?request=${request}`
    );
  };

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
        postSwipe,
        deleteMatch,
        setUnMatch,
        unMatch,
        defaultDataToFilter,
      }}
    >
      {props.children}
    </SwipeContext.Provider>
  );
};

const useSwipe = () => React.useContext(SwipeContext);

export { SwipeProvider, useSwipe };
