import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignIn = () => {
    const inputStyle = "w-2/3 h-10 border-2 rounded-md border-black mt-8 ml-auto mr-auto bg-transparent text-center text-l text-gray-600 placeholder:text-black placeholder:font-quicksand focus:outline-gray-600";
    const buttonStyle = "text-center border-2 rounded-md border-gray-700 w-1/6 ml-auto mr-auto mt-8 text-gray-700 py-2 hover:bg-amber-50 hover:text-gray-600 font-raleway";
    const backgroundStyle = "h-screen w-screen bg-gray-200 flex justify-center";
    const formStyle = "h-1/2 w-1/2 border-2 border-gray-700 rounded-md mt-60 flex flex-col";
    const titleStyle = "text-center text-black mt-8 text-2xl font-raleway";
    const lineStyle = "mt-8 border-dotted w-2/3 ml-auto mr-auto bg-black border-1.5";

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(false);

    const navigate = useNavigate();

    const handelSignIn = async () => {
        const data = JSON.stringify({
            "name": userName,
            "password": userPassword
        });

        const config = {
            method: 'post',
            url: 'http://localhost:3030/api/auth/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        try {
            const authRes = await axios(config)
            if (authRes.data != false) {
               localStorage.setItem("411Project", authRes.data);
               navigate('/dashboard');
            } else {
                setIncorrectPassword(true);
            }
        } catch (error) {
            console.log(error)
        }

    }


    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserName(event.target.value);
        if (event.target.id === "passwordInput") setUserPassword(event.target.value);
    };
    return(
        <div className={backgroundStyle}>
            <div className={formStyle}>
                <h1 className={titleStyle}>Sign In</h1>
                <input
                    id={"emailInput"}
                    className={inputStyle}
                    placeholder={"Please Enter your user name"}
                    onChange={handelChange}
                    value={userName}
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
                {incorrectPassword ? <h1 className={"text-center font-xl text-red-700 mt-4"}>Wrong Password</h1> : null}
            </div>
        </div>
    )
}

export default SignIn;