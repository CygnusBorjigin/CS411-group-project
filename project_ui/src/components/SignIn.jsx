import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const SignIn = () => {
    const inputStyle = "w-2/3 h-10 border-2 rounded-md border-black mt-8 ml-auto mr-auto bg-transparent text-center text-l text-gray-600 placeholder:text-black placeholder:font-quicksand focus:outline-gray-600";
    const buttonStyle = "text-center border-2 rounded-md border-gray-700 w-1/6 ml-auto mr-auto mt-8 text-gray-700 py-2 hover:bg-amber-50 hover:text-gray-600 font-raleway";
    const backgroundStyle = "h-screen w-screen bg-gray-200 flex justify-center";
    const formStyle = "h-1/2 w-1/2 border-2 border-gray-700 rounded-md mt-60 flex flex-col";
    const titleStyle = "text-center text-black mt-8 text-2xl font-raleway";
    const lineStyle = "mt-8 border-dotted w-2/3 ml-auto mr-auto bg-black border-1.5";

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handelSignIn = () => {

    }


    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserEmail(event.target.value);
        if (event.target.id === "passwordInput") setUserPassword(event.target.value);
    };
    return(
        <div className={backgroundStyle}>
            <div className={formStyle}>
                <h1 className={titleStyle}>Sign In</h1>
                <input
                    id={"emailInput"}
                    className={inputStyle}
                    placeholder={"Please Enter your email"}
                    onChange={handelChange}
                    value={userEmail}
                ></input>
                <input
                    id={"passwordInput"}
                    className={inputStyle}
                    placeholder={"Please Enter your password"}
                    onChange={handelChange}
                    value={userPassword}
                    type={"password"}
                ></input>
                <button
                    className={buttonStyle}
                    onClick={handelSignIn}
                >
                    Sign In
                </button>

                <hr className={lineStyle} />
                <Link to={"/register"} className={buttonStyle}>Sign Up</Link>

            </div>
        </div>
    )
}

export default SignIn;