import { BrowserRouter, Routes, Route } from "react-router-dom";

const Results = () =>{
    return(
        <div className ='h-screen bg-cyan-100 flex justify-center items-center'>
        <div className=" bg-white rounded-xl shadow-md h-[50%] w-[60%] flex flex-col md:flex-row">
            <div className="bg-blue-500 h-full md:w-[40%] p-6 rounded-xl flex-row justify-center align-center">
                <p className="text-center ">Your Result</p>
                <div className="bg-gradient-to-b from-blue-700 to-transparent h-20 w-20 rounded-full flex justify-center items-center mx-auto mt-6 text-white">76</div>
            </div>
            <div className=" h-full w-[60%] grid">
                <p className="m-auto">Hello</p>
                <p className="m-auto">Hello</p>
            </div>
        </div>
        </div>
    )
}
export default Results;