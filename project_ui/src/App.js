import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/Signup";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<LandingPage />}></Route>
            <Route path={"/signin"} element={<SignIn />}></Route>
            <Route path={"/dashboard"} element={<Dashboard />}></Route>
            <Route path={"/register"} element={<SignUp />}></Route>
        </Routes>
    )
}

export default App;
