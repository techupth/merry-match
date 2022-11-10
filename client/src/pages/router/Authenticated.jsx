import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";
<<<<<<< HEAD:client/src/pages/router/Authenticated.jsx
import EditProfile from "../editProfile/EditProfile";
=======
import EditProfile from "./EditProfile";
>>>>>>> origin/feature/dataValidation:client/src/pages/Authenticated.jsx

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