import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
} from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import { useSwipe } from "../../contexts/swipeContext";
// import jwtDecode from "jwt-decode";

const MatchFilter = () => {
  const {
    getDataByFilter,
    users,
    getAllUsers,
    filterData,
    eachUser,
    getEachUser,
    defaultDataToFilter,
  } = useSwipe();

  // console.log(eachUser)

  // console.log("Match Fileter rendered!")
  const [ageRange, setAgeRange] = useState([
    defaultDataToFilter.ageRange[0],
    eachUser.user_age + 10,
  ]);
  const [meetingIntArr, setMeetingIntArr] = useState([eachUser.meeting_int]);
  const [userData, setUserData] = useState({});
  const [defaultMeet, setDefaultMeet] = useState("");
  const [dataToFilter, setDataToFilter] = useState({
    meetingInt: [eachUser.meeting_int],
    ageRange: [eachUser.user_age - 18, eachUser.user_age + 10],
    sexPreference: eachUser.sex_pref,
    user_id: eachUser.user_id,
  });
  const [defaultCheck, setDefaultCheck] = useState([eachUser.meeting_int]);

  console.log(meetingIntArr);

  const handleAgeRange = (val) => {
    setAgeRange(val);
    // console.log(ageRange);
  };

  const updateAgeRange = useMemo(() => {
    handleAgeRange(ageRange);
    setDataToFilter({
      ...dataToFilter,
      ageRange,
    });
  }, [ageRange]);

  useEffect(() => {
    setUserData(eachUser);
  }, [dataToFilter]);

  useEffect(() => {}, [defaultCheck]);

  return (
    <div className="w-[410px] h-full bg-white z-40">
      <div className="meeting-interest mt-[140px] ml-[18px] h-[80uh] w-[80%]">
        <CheckboxGroup colorScheme="green" defaultValue={defaultCheck}>
          <Text fontWeight={700} color="#191C77" mb={3}>
            Meeting Interests
          </Text>
          <Stack spacing={2} direction="column" fontSize={16}>
            <Checkbox
              color="#646D89"
              value="Friend"
              onChange={(e) => {
                console.log([e.target.value, e.target.checked]);
                // ถ้าไม่มี อยู่แล้ว
                if (!meetingIntArr.includes(e.target.value)) {
                  // ถ้าเป็น true ให้พุช
                  if (e.target.checked === true) {
                    meetingIntArr.push(e.target.value);
                    // ถ้าเป็น false ให้้ filter ออก
                  } else if (e.target.checked === false) {
                    const result = meetingIntArr.filter((interest) => {
                      return interest !== e.target.value;
                    });
                    setMeetingIntArr(result);
                  }
                  setDataToFilter({
                    ...dataToFilter,
                    meetingInt: meetingIntArr,
                  });
                } else {
                  const result = meetingIntArr.filter((interest) => {
                    return interest !== e.target.value;
                  });
                  setMeetingIntArr(result);
                }
                console.log(meetingIntArr);
                console.log("data to filter", dataToFilter);
              }}
            >
              Friend
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="FWB"
              onChange={(e) => {
                console.log([e.target.value, e.target.checked]);
                // ถ้าไม่มี อยู่แล้ว
                if (!meetingIntArr.includes(e.target.value)) {
                  // ถ้าเป็น true ให้พุช
                  if (e.target.checked === true) {
                    meetingIntArr.push(e.target.value);
                    // ถ้าเป็น false ให้้ filter ออก
                  } else if (e.target.checked === false) {
                    const result = meetingIntArr.filter((interest) => {
                      return interest !== e.target.value;
                    });
                    setMeetingIntArr(result);
                  }
                  setDataToFilter({
                    ...dataToFilter,
                    meetingInt: meetingIntArr,
                  });
                } else {
                  const result = meetingIntArr.filter((interest) => {
                    return interest !== e.target.value;
                  });
                  setMeetingIntArr(result);
                }
                console.log(meetingIntArr);
                console.log("data to filter", dataToFilter);
              }}
            >
              FWB
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="ONS"
              onChange={(e) => {
                console.log([e.target.value, e.target.checked]);
                // ถ้าไม่มี อยู่แล้ว
                if (!meetingIntArr.includes(e.target.value)) {
                  // ถ้าเป็น true ให้พุช
                  if (e.target.checked === true) {
                    meetingIntArr.push(e.target.value);
                    // ถ้าเป็น false ให้้ filter ออก
                  } else if (e.target.checked === false) {
                    const result = meetingIntArr.filter((interest) => {
                      return interest !== e.target.value;
                    });
                    setMeetingIntArr(result);
                  }
                  setDataToFilter({
                    ...dataToFilter,
                    meetingInt: meetingIntArr,
                  });
                } else {
                  console.log(meetingIntArr);
                  const result = meetingIntArr.filter((interest) => {
                    return interest !== e.target.value;
                  });
                  setMeetingIntArr(result);
                }
                console.log(meetingIntArr);
                console.log("data to filter", dataToFilter);
              }}
            >
              ONS
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="Long-term"
              onChange={(e) => {
                console.log([e.target.value, e.target.checked]);
                // ถ้าไม่มี อยู่แล้ว
                if (!meetingIntArr.includes(e.target.value)) {
                  // ถ้าเป็น true ให้พุช
                  if (e.target.checked === true) {
                    meetingIntArr.push(e.target.value);
                    // ถ้าเป็น false ให้้ filter ออก
                  } else if (e.target.checked === false) {
                    const result = meetingIntArr.filter((interest) => {
                      return interest !== e.target.value;
                    });
                    setMeetingIntArr(result);
                  }
                  setDataToFilter({
                    ...dataToFilter,
                    meetingInt: meetingIntArr,
                  });
                } else {
                  const result = meetingIntArr.filter((interest) => {
                    return interest !== e.target.value;
                  });
                  setMeetingIntArr(result);
                }
                console.log(meetingIntArr);
                console.log("data to filter", dataToFilter);
              }}
            >
              Long-term Relationship
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="Short-term"
              onChange={(e) => {
                console.log([e.target.value, e.target.checked]);
                // ถ้าไม่มี อยู่แล้ว
                if (!meetingIntArr.includes(e.target.value)) {
                  // ถ้าเป็น true ให้พุช
                  if (e.target.checked === true) {
                    meetingIntArr.push(e.target.value);
                    // ถ้าเป็น false ให้้ filter ออก
                  } else if (e.target.checked === false) {
                    const result = meetingIntArr.filter((interest) => {
                      return interest !== e.target.value;
                    });
                    setMeetingIntArr(result);
                  }
                  setDataToFilter({
                    ...dataToFilter,
                    meetingInt: meetingIntArr,
                  });
                } else {
                  const result = meetingIntArr.filter((interest) => {
                    return interest !== e.target.value;
                  });
                  setMeetingIntArr(result);
                }
                console.log(meetingIntArr);
                console.log("data to filter", dataToFilter);
              }}
            >
              Short-term Relationship
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
      <div className="age-range w-[80%] ml-7">
        <Text fontWeight={700} color="#191C77" mb={3} mt={10}>
          Age Range
        </Text>
        <RangeSlider
          defaultValue={[
            defaultDataToFilter.ageRange[0],
            defaultDataToFilter.ageRange[1],
          ]}
          aria-label={["18", "55"]}
          min={18}
          max={55}
          step={1}
          onChangeEnd={(val) => {
            handleAgeRange(val);
          }}
          mt={7}
        >
          <RangeSliderMark
            defaultValue={defaultDataToFilter.ageRange[0]}
            value={ageRange[0]}
            borderRadius="18"
            textAlign="center"
            bg="#7d2262"
            color="white"
            mt="-10"
            ml="-5"
            w="10"
            fontWeight="700"
          >
            {ageRange[0]}
          </RangeSliderMark>
          <RangeSliderMark
            defaultValue={defaultDataToFilter.ageRange[1]}
            value={ageRange[1]}
            borderRadius="18"
            textAlign="center"
            bg="#7d2262"
            color="white"
            mt="-10"
            ml="-5"
            w="10"
            fontWeight="700"
          >
            {ageRange[1]}
          </RangeSliderMark>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <div className="flex flex-crow justify-center items-center mt-5 border-b border-[#E4E6ED] pb-[60px] mb-[15px]">
          <input
            className="min-age border-[#D6D9E4] text-[#9AA1B9] text-[16px] rounded-[8px] w-[85.5px] h-[48px]"
            type="text"
            value={ageRange[0]}
            onChange={(event) => {
              setAgeRange([event.target.value, ageRange[1]]);
            }}
          />
          <span className="ml-3 mr-3 font-[400] text-1"> - </span>
          <input
            className="max-age border-[#D6D9E4] text-[#9AA1B9] text-[16px] rounded-[8px] w-[85.5px] h-[48px]"
            type="text"
            value={ageRange[1]}
            onChange={(event) => {
              setAgeRange([ageRange[0], event.target.value]);
            }}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <button
          className="text-[#C70039] font-[700] w-[99px] h-[48px] hover:text-[#FF1659] active:text-[#A62D82]"
          onClick={() => {
            setMeetingIntArr(defaultDataToFilter.meetingInt);
            console.log(defaultDataToFilter.meetingInt);
            console.log(meetingIntArr);
            setAgeRange(defaultDataToFilter.ageRange);
            setDataToFilter(defaultDataToFilter);
            setDefaultCheck(meetingIntArr);
            console.log("data to filter after clear", dataToFilter);
          }}
        >
          Clear
        </button>
        <button
          className="bg-[#C70039] rounded-[99px] text-[white] font-[700] w-[99px] h-[48px] hover:bg-[#FF1659] active:text-[#A62D82]"
          onClick={() => {
            getDataByFilter(dataToFilter);
            console.log("Filter data by", dataToFilter);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MatchFilter;
