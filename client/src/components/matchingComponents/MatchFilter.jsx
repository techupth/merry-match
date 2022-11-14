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
} from "@chakra-ui/react";
import { useState } from "react";

const MatchFilter = () => {
  const [ageRange, setAgeRange] = useState([]);

  return (
    <div className="w-[18%] h-[100%] bg-white">
      <div className="meeting-interest mt-[140px] ml-[18px] h-[80uh] w-[80%]">
        <CheckboxGroup colorScheme="green">
          <Text fontWeight={700} color="#191C77" mb={3}>
            Meeting Interests
          </Text>
          <Stack spacing={2} direction="column" fontSize={16}>
            <Checkbox color="#646D89" value="Friend">
              Friend
            </Checkbox>
            <Checkbox color="#646D89" value="FWB">
              FWB
            </Checkbox>
            <Checkbox color="#646D89" value="ONS">
              ONS
            </Checkbox>
            <Checkbox color="#646D89" value="Long-term">
              Long-term Relationship
            </Checkbox>
            <Checkbox color="#646D89" value="Short-term">
              Short-term Relationship
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
      <div className="age-range w-[85%] ml-5">
        <Text fontWeight={700} color="#191C77" mb={3} mt={10}>
          Age Range
        </Text>
        <RangeSlider
          defaultValue={[22, 30]}
          aria-label={["18", "55"]}
          min={18}
          max={60}
          step={1}
          onChangeEnd={(val) => {
            console.log(val);
            setAgeRange(val);
          }}
          // value={[ageRange[0], ageRange[1]]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <div className="flex flex-crow justify-between items-center mt-5 border-b border-[#E4E6ED] pb-[60px] mb-[15px]">
          <input
            className="min-age border-[#D6D9E4] text-[#9AA1B9] text-[16px] rounded-[8px] w-[85.5px] h-[48px]"
            type="text"
            value={ageRange[0]}
            // onChange={(event) => {
            //   if (event.target.value <= 17) {
            //     alert(" Minimum age is 18 years old");
            //   }
            // }}
          />
          <span> - </span>
          <input
            className="max-age border-[#D6D9E4] text-[#9AA1B9] text-[16px] rounded-[8px] w-[85.5px] h-[48px]"
            type="text"
            value={ageRange[1]}
            // onChange={(event) => {
            //   if (event.target.value >= 60) {
            //     alert(" Maximum age is 60 years old");
            //   }
            // }}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <button className="text-[#C70039] font-[700] w-[99px] h-[48px]">
          Clear
        </button>
        <button className="bg-[#C70039] rounded-[99px] text-[white] font-[700] w-[99px] h-[48px]">
          Search
        </button>
      </div>
    </div>
  );
};

export default MatchFilter;
