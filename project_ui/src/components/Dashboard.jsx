import axios from "axios";
import {useEffect, useState} from "react";

const Dashboard = () => {
    const [allMovies, setAllMovies] = useState([{"original_title": "loading", "overview": "loading"}]);
    const [currentDisplay, setCurrentDisplay] = useState(0);
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

    useEffect(() => {
        fetchMovieList();
        setCurrentDisplay(0);
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
        <div className={"w-screen h-screen bg-gray-300 flex justify-center"}>
            <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handleLike}>Like</button>
            <div className={"w-1/3 h-2/3 border-2 border-gray-700 rounded-xl my-auto flex flex-col justify-center font-quicksand font-bold text-[20px]"}>
                {console.log(allMovies)}
                <h1 className={"mb-8 text-center"}>{allMovies[currentDisplay].original_title}</h1>
                <p className={"px-12"}>{allMovies[currentDisplay].overview}</p>
            </div>
            <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handlePass}>Pass</button>
            <div>{allMovies[currentDisplay].tweets}</div>
        </div>
    )
}

export default Dashboard;
