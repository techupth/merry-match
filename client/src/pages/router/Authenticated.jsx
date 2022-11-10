import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";
import EditProfile from "../editProfile/EditProfile";

const Authenticated = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageAuth />} />
                <Route path="*" element={<HomepageAuth />} />
                {/* <Route path="/dev" element={<Login />} /> */}
                <Route path="/edit" element={<EditProfile />} />
            </Routes>
        </>
    );
};

export default Authenticated;