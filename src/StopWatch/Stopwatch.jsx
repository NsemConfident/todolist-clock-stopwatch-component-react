import { useState, useEffect, useRef } from "react"
import './stopwatch.css'

function Stopwatch(){
    const [isRunning, setIsrunning] = useState(false);
    const [elapsedTime, setElapsedtime] = useState(0);
    const intervalIdref = useRef(null)
    const startTimeref = useRef(0)

    useEffect(()=>{
        if(isRunning){
            intervalIdref.current = setInterval(() => {
                setElapsedtime(Date.now() - startTimeref.current);
            }, 1000);
        }

        return()=>{
            clearInterval(intervalIdref.current)
        }

    }, [isRunning])

    function start(){
        setIsrunning(true)
        startTimeref.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsrunning(false)

    }
    function reset(){
        setElapsedtime(0)
        setIsrunning(false)

    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);
        return `${appendZero(hours)}: ${appendZero(minutes)}: ${appendZero(seconds)}: ${appendZero(milliseconds)}`;
    }

    function appendZero(number){
        
        return number < 10 ? "0"+number : number;
    }

    return(
        <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button onClick={()=>start()} className="start-button">start</button>
            <button onClick={()=>stop()} className="stop-button">stop</button>
            <button onClick={()=>reset()} className="reset-button">reset</button>
        </div>

        </div>
    );
}

export default Stopwatch