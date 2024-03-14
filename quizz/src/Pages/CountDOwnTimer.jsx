import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountDOwnTimer = () => {
    const [timeLeft, setTimeLeft] = useState(3600); // 3600 seconds is 1 hour
    const navigate = useNavigate();
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000); // Update the time every second
  
      return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [timeLeft]);
  if(timeLeft === 0){
    navigate("/testOver")
  }
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = Math.floor(timeLeft % 60);
  
    return (
      <div>
        <h4 className='text-center py-3 fs-md-5 timer'>
          {hours} Hr : {minutes} min : {seconds} sec
        </h4>
      </div>
    );
  };
  
  export default CountDOwnTimer;