import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<LandingPage />}></Route>
            <Route path={"/signin"} element={<SignIn />}></Route>
            <Route path={"/register"} element={<SignUp />}></Route>
            <Route path={"/dashboard"} element={<Dashboard />}></Route>
        </Routes>
    )
}

export default App;
