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
  const [ageRange, setAgeRange] = useState([
    defaultDataToFilter.ageRange[0],
    defaultDataToFilter.ageRange[1],
  ]);
  const [meetingIntArr, setMeetingIntArr] = useState([eachUser.meeting_int]);
  // const [userData, setUserData] = useState({});
  const [defaultMeet, setDefaultMeet] = useState("");
  const [dataToFilter, setDataToFilter] = useState({
    meetingInt: [eachUser.meeting_int],
    ageRange,
    sexPreference: eachUser.sex_pref,
    user_id: eachUser.user_id,
  });
  const [defaultCheck, setDefaultCheck] = useState([eachUser.meeting_int]);

  // ------- function ---------

  const handleAgeRange = (val) => {
    setAgeRange(val);
  };

  const updateAgeRange = useMemo(() => {
    handleAgeRange(ageRange);
    setDataToFilter({
      ...dataToFilter,
      ageRange,
    });
  }, [ageRange]);

  const updateMeetingInterest = useMemo(() => {
    setMeetingIntArr(meetingIntArr);
    setDataToFilter({
      ...dataToFilter,
      meetingInt: meetingIntArr,
    });
  }, [meetingIntArr]);

  const updateDefaultCheck = () => {
    setDefaultCheck(meetingIntArr);
  };

  const handleCheckbox = (e) => {
    console.log([e.target.value, e.target.checked]);
    if (!meetingIntArr.includes(e.target.value)) {
      if (e.target.checked) {
        setMeetingIntArr([...meetingIntArr, e.target.value]);
      }
    } else if (meetingIntArr.includes(e.target.value)) {
      if (!e.target.checked) {
        const newMeetingIntArr = meetingIntArr.filter((interest) => {
          return interest !== e.target.value;
        });
        setMeetingIntArr(newMeetingIntArr);
      }
    }
    console.log("datofilter in fx", dataToFilter);
  };

  // ---------- useEffect ---------

  useEffect(() => {
    updateDefaultCheck();
  }, [meetingIntArr]);

  return (
    <div className="w-[410px] h-full bg-white z-40">
      <div className="meeting-interest mt-[140px] ml-[18px] h-[80uh] w-[80%]">
        <CheckboxGroup
          colorScheme="green"
          defaultValue={defaultCheck}
          // isChecked={meetingIntArr}
        >
          <Text fontWeight={700} color="#191C77" mb={3}>
            Meeting Interests
          </Text>
          <Stack spacing={2} direction="column" fontSize={16}>
            <Checkbox
              color="#646D89"
              value="Friend"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            >
              Friend
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="FWB"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            >
              FWB
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="ONS"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            >
              ONS
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="Long-term"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            >
              Long-term Relationship
            </Checkbox>
            <Checkbox
              color="#646D89"
              value="Short-term"
              onChange={(e) => {
                handleCheckbox(e);
              }}
            >
              Short-term Relationship
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
      <div className="age-range w-[78%] pl-[22.5%] xl:pl-[15%] 2xl:pl-[5%] 2xl:w-[80%] 2xl:ml-5">
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
          className="w-[78%]"
          step={1}
          onChange={(val) => {
            handleAgeRange(val);
          }}
          mt={7}
          value={ageRange}
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
            hidden={ageRange[0] < 18}
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
            hidden={ageRange[1] < 18}
          >
            {ageRange[1]}
          </RangeSliderMark>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <div className="flex flex-crow justify-center items-center mt-5 border-b border-[#E4E6ED] pb-[60px] mb-[15px] ml-[10%] xl:ml-[5%] 2xl:ml-[0%]">
          <input
            className="min-age border-[#D6D9E4] text-[#9AA1B9] text-[16px] rounded-[8px] w-[85.5px] h-[48px]"
            type="number"
            min={18}
            max={55}
            value={ageRange[0]}
            onChange={(e) => {
              if (e.target.value < 18) {
                setAgeRange([18, ageRange[1]]);
              } else if (e.target.value > ageRange[1]) {
                e.target.value = ageRange[1] - Number(1);
              } else {
                setAgeRange([e.target.value, ageRange[1]]);
              }
            }}
          />
          <span className="ml-3 mr-3 font-[400] text-1"> - </span>
          <input
            className="max-age border-[#D6D9E4] text-[#9AA1B9] text-[16px] rounded-[8px] w-[85.5px] h-[48px]"
            type="number"
            min={18}
            max={55}
            value={ageRange[1]}
            onChange={(e) => {
              if (e.target.value > 55) {
                setAgeRange([ageRange[0], 55]);
              } else if (e.target.value < ageRange[0]) {
                e.target.value = ageRange[0] + Number(1);
              } else {
                setAgeRange([ageRange[0], e.target.value]);
              }
            }}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <button
          className="text-[#C70039] font-[700] w-[99px] h-[48px] hover:text-[#FF1659] active:text-[#A62D82]"
          onClick={() => {
            window.location.reload();
          }}
        >
          Clear
        </button>
        <button
          className="bg-[#C70039] rounded-[99px] text-[white] font-[700] w-[99px] h-[48px] hover:bg-[#FF1659] active:text-[#A62D82]"
          onClick={() => {
            getDataByFilter(dataToFilter);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MatchFilter;
