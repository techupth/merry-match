import { Routes, Route } from "react-router-dom";
import HomepageAuth from "./AuthHomepage";

const Authenticated = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageAuth />} />
                <Route path="*" element={<HomepageAuth />} />
                {/* <Route path="/dev" element={<Login />} /> */}
            </Routes>
        </>
    );
};

export default Authenticated;