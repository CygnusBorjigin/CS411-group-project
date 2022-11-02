const Dashboard = () => {
    return(
        <div className={"w-screen h-screen bg-gray-300 flex justify-center"}>
            <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6"}>Up</button>
            <div className={"w-1/3 h-2/3 border-2 border-gray-700 rounded-xl my-auto"}>
            </div>
            <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6"}>Down</button>
        </div>
    )
}

export default Dashboard;