import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<LandingPage />}></Route>
            <Route path={"/signin"} element={<SignIn />}></Route>
            <Route path={"/dashboard"} element={<Dashboard />}></Route>
        </Routes>
    )
}

export default App;
