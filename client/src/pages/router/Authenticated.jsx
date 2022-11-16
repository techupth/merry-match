import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";
// import EditProfile from "../editProfile/EditProfile";
import EditProfile from "../editProfile/EditProfile";
import MerryList from "../merryList/MerryList";
import MatchingPage from "../matchingPage/MatchingPage";
import NavbarAuthen from "../../components/Navbar/NavbarAuthen";
import { SwipeProvider } from "../../contexts/swipeContext";

const Authenticated = () => {
  return (
    <>
      <NavbarAuthen />
      <SwipeProvider>
        <Routes>
          <Route path="/" element={<HomepageAuth />} />
          <Route path="*" element={<HomepageAuth />} />
          {/* <Route path="/dev" element={<Login />} /> */}
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/merrylist" element={<MerryList />} />
          <Route path="/match" element={<MatchingPage />} />
        </Routes>
      </SwipeProvider>
    </>
  );
};

export default Authenticated;
