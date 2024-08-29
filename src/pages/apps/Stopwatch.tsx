import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
const formatTime=(timeInSeconds:number)=>{
    const hours=String(Math.floor(timeInSeconds/3600));
    const minute=String(Math.floor((timeInSeconds%3600)/60));
    const seconds=String(timeInSeconds%60);
    return `${hours.padStart(2,"0")}:${minute.padStart(2,"0")}:${seconds.padStart(2,"0")}`
}
const Stopwatch = () => {
    const [time,setTime]=useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const resetHandler=()=>{
        setIsRunning(false);
        setTime(0);
    }
    useEffect(()=>{
        let intervalID:number;
        if(isRunning)

            intervalID=setInterval(()=>{
                setTime((prev)=>prev+1);
            },1000);
            return()=>{
                clearInterval(intervalID);
            }
        
    },[isRunning])
  return (
    <div className="adminContainer"> 
      {/* sidebar */}
      <AdminSidebar/>
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2>{formatTime(time)}</h2>
                <button onClick={(()=>setIsRunning(!isRunning))}>{isRunning?"Stop":"Start"}</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </section>
        </main>
      </div>
  )
}

export default Stopwatch