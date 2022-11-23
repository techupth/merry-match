import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";
import EditProfile from "../editProfilePage/EditProfile";
import MerryList from "../merryListPage/MerryList";
import MatchingPage from "../matchingPage/MatchingPage";
import NavbarAuthen from "../../components/Navbar/NavbarAuthen";
import { SwipeProvider } from "../../contexts/swipeContext";
import Subscribe from "../../components/subscriptionPage/Subscribe";
import SubscriptionPage from "../subsciptionPage/SubscriptionPage";
import CreditCardPage from "../creditCardPage/creditCardPage";

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
          <Route path="/sub" element={<SubscriptionPage />} />
          <Route path="/pay" element={<CreditCardPage />} />

        </Routes>
      </SwipeProvider>
    </>
  );
};

export default Authenticated;
