import React from "react";
import starts from "../../public/asset/NavBarIcon/starts.svg";
import profile from "../../public/asset/NavBarIcon/profile.svg";
import merryList from "../../public/asset/NavBarIcon/merryList.svg";
import member from "../../public/asset/NavBarIcon/member.svg";
import logouticon from "../../public/asset/NavBarIcon/logout.svg";
import compliant from "../../public/asset/NavBarIcon/compliant.svg";
import { useAuth } from "../contexts/authentication";

// Using by redering to Nav page

function UserPopup({ close }) {
  const { logout } = useAuth();

  return (
    <div className="inline-block text-left z-50 h-[500px] absolute right-[3%] top-[80%]">
      <div className="origin-top-right  right-0 mt-2 w-56 rounded-2xl shadow-lg bg-[#FFFFFF] dark:bg-gray-800 ring-1 ring-black ring-opacity-5 text-[#646D89] ">
        {/* <button onClick={() => close(false)} className="text-red-700 text-[30px] border-3 border-white rounded-full"></button> */}

        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 ml-3 mr-3 mt-3 border-3 bg-gradient-to-r from-[#742138] to-[#9E66A4] rounded-full flex flex-row"
            role="menuitem"
          >
            <img src={starts} className="mr-2" />
            <span className="flex flex-col text-white ">
              <span>More limit Merry!</span>
            </span>
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex flex-row"
            role="menuitem"
          >
            <img src={profile} className="mr-2" />
            <span className="flex flex-col">
              <span>Profile</span>
            </span>
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex flex-row"
            role="menuitem"
          >
            <img src={merryList} className="mr-2" />
            <span className="flex flex-col">
              <span>Merry list</span>
            </span>
          </a>
          <a
            href="#"
            className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex flex-row"
            role="menuitem"
          >
            <img src={member} className="mr-2" />
            <span className="flex flex-col">
              <span>Merry Membership</span>
            </span>
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex flex-row"
            role="menuitem"
          >
            <img src={compliant} className="mr-2" />
            <span className="flex flex-col">
              <span>Compliant</span>
            </span>
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-md text-gray-700 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex flex-row border-t-2"
            role="menuitem"
          >
            <img src={logouticon} className="mr-2" />
            <span className="flex flex-col">
              <span onClick={() => logout()}>Log out</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserPopup;
