import arrow from './assets/icon-arrow.svg'
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenav from './components/Pagenav';

function calculateAge(year, month, day) {
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day); // month is zero-based, so we subtract 1
  
    // Calculate the age in milliseconds
    const ageInMilliseconds = currentDate - birthDate;
  
    // Calculate years
    const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  
    // Calculate the remaining days
    const remainingDays = ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);
  
    // Calculate months and days
    const daysInMonth = 30.44; // Average days in a month considering a year of 365.25 days
    const months = Math.floor(remainingDays / (daysInMonth * 24 * 60 * 60 * 1000));
    const days = Math.floor((remainingDays % (daysInMonth * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  
    return { years, months, days };
  }
export default function AgeApp(){
    const [Day, SetDay] = useState();
    const [Month, SetMonth] = useState();
    const [Year, SetYear] = useState();
    const handleClick = () => {
      let age = calculateAge(Day,Month,Year)
       console.log(age)
      
      };

    return(
        <>
        <div className='md:h-screen p-6 bg-blue-500 flex justify-center items-center'>
            <Pagenav />
        
            <div className='w-[80%]  md:w-2/5 bg-white p-4 rounded-lg rounded-br-[70px] flex flex-col hover:drop-shadow-xl'>
                <div className='h-2/6 rounded-lg bg-blue-200 flex flex-col justify-center md:flex-row gap-12 p-6 text-white mb-4'>
                    <div className=' flex flex-col w-16'> 
                    <p  className='text-black font-mono text-lg font-bold'>Day</p>
                    <input className='mt-2 rounded-sm text-black p-2 shadow-sm shadow-black' maxlength="2" value={Day} onChange={(e) => SetDay(e.target.value)} placeholder="Day"/></div>
                    <div className='flex flex-col w-16 '> 
                    <p className='text-black font-mono text-lg font-bold'>Month</p>
                    <input className='mt-2 rounded-sm text-black p-2 shadow-sm shadow-black ' maxlength="2" value={Month} onChange={(e) => SetMonth(e.target.value)} placeholder="Month"/></div>
                    <div className='flex flex-col w-20 '> 
                    <p className='text-black font-mono text-lg font-bold'>Year</p>
                    <input className='mt-2 rounded-sm text-black p-2 shadow-sm shadow-black' maxlength="4" value={Year} onChange={(e) => SetYear(e.target.value)} placeholder="Year"/></div>
                    </div> 
                    <div className='mt-3 h-[2px] w-full  bg-gray-200 flex  justify-center items-center'>
                    <button onClick={handleClick}>
                        <div className='bg-blue-600 p-4 h-auto w-auto drop-shadow-lg hover:bg-green-500 rounded-full flex justify-center items-center'>
                        <img src = {arrow}></img>
                        </div>
                        </button>
                        </div> 
                <div className='mt-8 md:h-2/4 w-full rounded-br-3xl rounded-lg  bg-gray-200 flex md:flex flex-col justify-evenly p-6 items-center'>
                    <div className='w-2/4 flex flex-col font-semibold text-black text-3xl text-center'>
                   
                    <p>{Year} Years</p>
                    <p>{Month} Months</p>
                    <p>{Day} Days</p></div>
                   
                </div>
            </div>
        </div> 
        </>
    )
}