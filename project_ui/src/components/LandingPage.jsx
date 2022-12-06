import {Link, useNavigate} from "react-router-dom";
const LandingPage = () => {
    return (
        <div className={"w-screen h-screen bg-gray-200 flex flex-col pt-20"}>
            <div>
                <h1 className={"text-center font-quicksand text-[80px]"}>CS 411 Group Project</h1>
                <div className={"w-screen flex flex-col"}>
                    <h1 className={"font-raleway text-center mt-6 text-[60px]"}>Group Members:</h1>
                    <ul className={"font-raleway mx-auto mt-2 pl-10 text-[40px]"}>
                        <li>Adena Etaat</li>
                        <li>Ariel Uribe</li>
                        <li>Aleks Sekulovski</li>
                        <li>Brian Li</li>
                        <li>Cygnus Wang</li>
                        <li>Divyangna Bamalwa</li>
                    </ul>

                    <Link to={"/signin"} className={"mt-10 border-4 border-gray-400 w-1/6 mx-auto rounded-xl text-[20px] font-raleway hover:bg-gray-400 text-center"}>
                        Enter Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
