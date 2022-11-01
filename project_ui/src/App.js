import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<LandingPage />}></Route>
            <Route path={"/signin"} element={<SignIn />}></Route>
            <Route path={"/register"} element={<SignUp />}></Route>
        </Routes>
    )
}

export default App;
