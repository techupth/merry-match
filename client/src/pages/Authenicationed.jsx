import { Routes, Route} from "react-router-dom";
import HomepageAuth from "./AuthHomepage";

const Authenicationed = () =>{
    return(
    <>
        <Routes>
            <Route path="/" element ={<HomepageAuth/>}/>
            <Route path="*" element = {<HomepageAuth/>}/>
            {/* <Route path="/home" element={<Home />} /> */}

        </Routes>
        
    </>)
};

export default Authenicationed;