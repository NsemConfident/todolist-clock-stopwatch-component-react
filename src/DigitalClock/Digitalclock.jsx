
import {useState, useEffect} from "react"
import './digitalclock.css'


function Digitalclock(){

    const [time, setTime]= useState(new Date());

    useEffect(()=>{
        const Interval = setInterval(()=>{
            setTime(new Date());
        }, 1000)
        return()=>{
            clearInterval(Interval);
        }
    }, [])

    function formatTime(){
        let Hours = time.getHours();
        const minute = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = Hours >= 12 ? "PM" : "Am";

        Hours = Hours % 12 || 12;
        return `${appendZero(Hours)}: ${appendZero(minute)}: ${appendZero(seconds)} ${meridian}`;
    }

    function appendZero(number){
        
        return number < 10 ? "0"+number : number;
    }

    return(
        <div className="clock-container">
            <h1>Digital clock</h1>

            <div className="clock">
            <span>{formatTime()}</span>
            </div>

        </div>
    )
}

export default Digitalclock