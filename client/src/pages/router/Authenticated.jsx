import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";
import EditProfile from "../editProfilePage/EditProfile";
import MerryList from "../merryListPage/MerryList";
import MatchingPage from "../matchingPage/MatchingPage";
import NavbarAuthen from "../../components/Navbar/NavbarAuthen";
import { SwipeProvider } from "../../contexts/swipeContext";
import UserComplaintPage from "../userComplaintPage/userComplaintPage";

const Authenticated = () => {
  return (
    <>
      <SwipeProvider>
        <NavbarAuthen />
        <Routes>
          <Route path="/" element={<HomepageAuth />} />
          <Route path="*" element={<HomepageAuth />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/merrylist" element={<MerryList />} />
          <Route path="/match" element={<MatchingPage />} />
          <Route path="/complaint" element={<UserComplaintPage />} />
        </Routes>
      </SwipeProvider>
    </>
  );
};

export default Authenticated;
