import React, { useState, useEffect } from "react";

export const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate, setInputDate] = useState('12/25/2023 17:00:00');
    const [currentDate, setCurrentDate] = useState(inputDate);

    useEffect(() => {
        const changingDate = new Date('12/25/2023 17:00:00');
        const currentDate = new Date();
        const totalSeconds = (changingDate - currentDate) / 1000;

        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds % 60));
    }, [currentDate]);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <>
            <div className="TimeRest">
                <p className='TimeText'>{days}d</p>
                <p className='TimeText'>{hours}h</p>
                <p className='TimeText'>{minutes}m</p>
               
            </div>
        </>

    );
};