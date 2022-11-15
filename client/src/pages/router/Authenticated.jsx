import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";
// import EditProfile from "../editProfile/EditProfile";
import EditProfile from "../editProfile/EditProfile";
import MerryList from "../merryList/MerryList";
import MatchingPage from "../mathcingPage/MatchingPage";
import NavbarAuthen from "../../components/Navbar/NavbarAuthen";

const Authenticated = () => {
  return (
    <>
      <NavbarAuthen />
      <Routes>
        <Route path="/" element={<HomepageAuth />} />
        <Route path="*" element={<HomepageAuth />} />
        {/* <Route path="/dev" element={<Login />} /> */}
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/merrylist" element={<MerryList />} />
        <Route path="/match" element={<MatchingPage />} />
      </Routes>
    </>
  );
};

export default Authenticated;
