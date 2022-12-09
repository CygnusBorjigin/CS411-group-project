import {useState, useEffect} from "react";
const SignIn = (props) => {
    const buttonStyle = "border-4 border-gray-500 rounded-2xl w-1/5 mx-auto hover:bg-gray-700 hover:text-black";

    useEffect ( () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get("code");

        if(codeParam && (localStorage.getItem("accessToken") === null)){
            const getAccessToken = async () => {
                await fetch("http://localhost:3002/getAccessToken?code=" + codeParam, {
                    method: "GET"
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    if(data.access_token){

                        localStorage.setItem("accessToken", data.access_token);
                    }
                })
            }
            getAccessToken();
        }
    }, []);

    const githubLogin = () => {
        window.location.assign("https://github.com/login/oauth/authorize?scope=user&client_id=Iv1.4378334f0e38ce91");
    }

    return(
        <div className={"w-screen h-screen flex flex-col justify-center"}>
            <button className={buttonStyle} onClick={githubLogin}>
                Login with GitHub
            </button>
        </div>
    )
}

export default SignIn;