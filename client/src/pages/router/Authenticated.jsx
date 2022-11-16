import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";
import EditProfile from "../editProfilePage/EditProfile";
import MerryList from "../merryListPage/MerryList";
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
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/merrylist" element={<MerryList />} />
          <Route path="/match" element={<MatchingPage />} />
        </Routes>
      </SwipeProvider>
    </>
  );
};

export default Authenticated;
