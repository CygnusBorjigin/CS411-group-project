import axios from "axios";
import {useEffect, useState} from "react";

const Dashboard = () => {
    const [allMovies, setAllMovies] = useState([{"original_title": "loading", "overview": "loading"}]);
    const [currentDisplay, setCurrentDisplay] = useState(0);
    const [weather, setWeather] = useState([{"time": "loading", "temperature": "loading", "condition": "loading"}]);
    const fetchMovieList = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:3030/api/movielist',
            headers: { }
        };

        axios(config)
            .then(function (response) {
                setAllMovies(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const fetchWeather = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:3030/api/weather',
            headers: { }
        };

        axios(config)
            .then(function (response) {
                setWeather(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        fetchMovieList();
        setCurrentDisplay(0);
        fetchWeather();
    }, []);

    const handleLike = () => {
        setCurrentDisplay(prev => {
            if (prev === allMovies.length) {
                return 0;
            } else {
                return prev + 1
            }
        })
    }

    const handlePass = () => {
        setCurrentDisplay(prev => {
            if (prev === allMovies.length - 1) {
                return 0;
            } else {
                return prev + 1
            }
        })
    }

    return(
        <div className={"bg-gray-300 h-screen pt-4"}>
            <div className="flex mx-8 border-2 border-gray-700 p-2">
                {weather.map(each => {
                    return(
                        <div className={"flex border-2 border-gray-700 rounded-lg mx-2"}>
                            <div className={"flex flex-col basis-1/3  border-r-2 border-gray-700"}>
                                <p className={"m-2"}>{each.time.substring(5, 7)}</p>
                                <p className={"m-2"}>{each.time.substring(8)}</p>
                            </div>
                            <p className={"m-2 basis-1/3"}>{each.temperature} F</p>
                            <p className={"m-2 basis-1/3"}>{each.condition}</p>
                        </div>
                    )
                })}
            </div>
            <div className={"w-screen flex justify-center mt-8"}>
                <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handleLike}>Like</button>
                <div className={"w-1/3 h-2/3 border-2 border-gray-700 rounded-xl my-auto flex flex-col justify-center font-quicksand font-bold text-[20px]"}>
                    <h1 className={"mb-8 text-center"}>{allMovies[currentDisplay].original_title}</h1>
                    <p className={"px-12"}>{allMovies[currentDisplay].overview}</p>
                </div>
                <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handlePass}>Pass</button>
            </div>
            <h1 className={"mt-16 text-center text-xl"}>What's On twitter</h1>
            <div class="overflow-y-auto h-1/3 mx-8 mt-8 border-2 border-gray-700 p-4">
                {allMovies[currentDisplay].tweets.map(each => {
                    return <p key={each.id} className={"border-2 border-gray-700 rounded-lg m-4 px-8 py-6"}>{each.text}</p>
                })}
            </div>
        </div>
    )
}

export default Dashboard;
