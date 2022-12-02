import React from "react";
import starts from "../../../public/asset/NavBarIcon/starts.svg";
import profile from "../../../public/asset/NavBarIcon/profile.svg";
import merryList from "../../../public/asset/NavBarIcon/merryList.svg";
import member from "../../../public/asset/NavBarIcon/member.svg";
import logouticon from "../../../public/asset/NavBarIcon/logout.svg";
import compliant from "../../../public/asset/NavBarIcon/compliant.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import { useSwipe } from "../../contexts/swipeContext";

// Using by redering to Nav page

function UserPopup({ close }) {
  const navigate = useNavigate();
  const { deleteMatch, unMatch } = useSwipe();
  const { logout } = useAuth();

  return (
    <div className="inline-block text-left z-50 h-[] absolute right-[7%] top-[80%] cursor-pointer">
      <div className="origin-top-right  right-0 mt-[15  %] w-[165px] rounded-2xl shadow-lg bg-[white] dark:bg-gray-800 ring-1 ring-black ring-opacity-5 text-[#646D89] ">
        {/* <a onClick={() => close(false)} className="text-red-700 text-[30px] border-3 border-white rounded-full"></a> */}

        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            className=" px-4 py-2 text-md ml-3 mr-3 mt-3 border-3 bg-gradient-to-r from-[#742138] to-[#9E66A4] rounded-full flex flex-row text-white hover:text-[1.1rem] w-[75%]"
            role="menuitem"
          >
            <img src={profile} className="mr-2" />
            <span className="flex flex-col">
              <span
                onClick={() => {
                  navigate("/edit");
                }}
              >
                Profile
              </span>
            </span>
          </a>
          <a
            className=" px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-black hover:text-[1.1rem]  dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex flex-row"
            role="menuitem"
          >
            <img src={merryList} className="mr-2" />
            <span className="flex flex-col">
              <span
                onClick={() => {
                  navigate("/merrylist");
                  deleteMatch(unMatch);
                }}
              >
                Merry List
              </span>
            </span>
          </a>
          <a
            className=" px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-black hover:text-[1.1rem]  dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex flex-row"
            role="menuitem"
          >
            <img src={compliant} className="mr-2" />
            <span className="flex flex-col">
              <span
                onClick={() => {
                  navigate("/complaint");
                }}
              >
                Compliant
              </span>
            </span>
          </a>
          <a
            className=" px-4 py-2 text-md text-gray-700 dark:text-gray-100 dark:hover:text-white hover:text-[1.1rem]   dark:hover:bg-gray-600 flex flex-row border-t-2 hover:gray-700"
            role="menuitem"
          >
            <img src={logouticon} className="mr-2 hover:gray-700" />
            <span className="flex flex-col hover:gray-700">
              <span className="hover:gray-700" onClick={() => logout()}>
                Log out
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserPopup;
