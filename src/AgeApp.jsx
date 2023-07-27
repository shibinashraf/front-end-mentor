import arrow from './assets/icon-arrow.svg'
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenav from './components/Pagenav';


export default function AgeApp(){
    const [Day, SetDay] = useState();
    const [Month, SetMonth] = useState();
    const [Year, SetYear] = useState();

    const [curDay, SetCurDay] = useState();
    const [curMonth, SetCurMonth] = useState();
    const [curYear, SetCurYear] = useState();
    
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      }
      
      function getDaysInMonth(month, year) {
        const daysPerMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return daysPerMonth[month - 1];
      }
      
      function calculateAge(birthDay, birthMonth, birthYear) {
        const currentDate = new Date();
        const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // month - 1 because months are zero-based in JavaScript Date
      
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        const givenMonth = birthDate.getMonth();
        const currentMonth = currentDate.getMonth();
      
        if (currentMonth < givenMonth || (currentMonth === givenMonth && currentDate.getDate() < birthDay)) {
          years--;
        }
      
        let months = currentMonth - givenMonth;
        if (currentDate.getDate() < birthDay) {
          months--;
        }
      
        if (months < 0) {
          years--;
          months += 12;
        }
      
        let days = currentDate.getDate() - birthDay;
        if (days < 0) {
          const lastDayOfMonth = getDaysInMonth(currentMonth, currentDate.getFullYear());
          months--;
          days += lastDayOfMonth;
        }
      
        return { years, months, days, totalDays: years * 365 + months * 30 + days };
      }
      
    const handleClick = () => {
        const age = calculateAge(Number(Day),Number(Month),Number(Year));
        SetCurYear(age.years);
        SetCurMonth(age.months);
        SetCurDay(age.days);
      };

    return(
        <>
        <div className='md:h-screen p-6 bg-blue-500 flex justify-center items-center'>
            <Pagenav />
        
            <div className='w-[80%]  md:w-2/5 bg-white p-4 rounded-lg rounded-br-[70px] flex flex-col hover:drop-shadow-xl'>
                <div className='h-2/6 rounded-lg bg-blue-200 flex flex-col justify-center md:flex-row gap-12 p-6 text-white mb-4'>
                    <div className=' flex flex-col w-16'> 
                    <p  className='text-black font-mono text-lg font-bold'>Day</p>
                    <input className='mt-2 rounded-sm text-black p-2 shadow-sm shadow-black' maxlength="2"   onChange={(e) => SetDay(e.target.value)} placeholder="Day"/></div>
                    <div className='flex flex-col w-16 '> 
                    <p className='text-black font-mono text-lg font-bold'>Month</p>
                    <input className='mt-2 rounded-sm text-black p-2 shadow-sm shadow-black ' maxlength="2"  onChange={(e) => SetMonth(e.target.value)} placeholder="Month"/></div>
                    <div className='flex flex-col w-20 '> 
                    <p className='text-black font-mono text-lg font-bold'>Year</p>
                    <input className='mt-2 rounded-sm text-black p-2 shadow-sm shadow-black' maxlength="4"  onChange={(e) => SetYear(e.target.value)} placeholder="Year"/></div>
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

                    <p className='text-blue-600 font-extrabold'>You are</p>

                    <div className='flex md:flex-row flex-col  justify-center'>
                    <p className='text-green-600 font-bold md:pr-2'>{curYear}</p> 
                    <p>Years</p></div>
                    <div className='flex md:flex-row flex-col  justify-center'>
                    <p className='text-green-600 font-bold md:pr-2'>{curMonth}</p> 
                    <p>Months</p></div>
                    <div className='flex md:flex-row flex-col  justify-center'>
                    <p className='text-green-600 font-bold md:pr-2'>{curDay}</p> 
                    <p>Days</p></div>
                    <p className='text-3xl text-blue-600 font-extrabold'>Old</p>
                </div>
                </div>
            </div>
        </div> 
        </>
    )
}