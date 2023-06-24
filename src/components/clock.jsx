import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Clock() {
    const [localTime, setLocalTime] = useState(createGetLocalTimes());
    useInterval(() => {
        setLocalTime(createGetLocalTimes());
    }, 1000);
    return <span>{localTime}</span>;
}

function createGetLocalTimes() {
    const d = new Date();
    const hh = d.getHours() > 12 ? d.getHours() % 12 : d.getHours();
    const mm = d.getMinutes();
    const ss = d.getSeconds();
    const AM_PM = d.getHours() >= 12 ? "PM" : "AM";

    return `${zeroTenFormat(hh)}:${zeroTenFormat(mm)}:${zeroTenFormat(
        ss
    )} ${AM_PM}`;

    function zeroTenFormat(s) {
        return +s < 10 ? "0" + s : s;
    }
}

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };

        const timerId = setInterval(tick, delay);
        return () => clearInterval(timerId);
    }, [delay]);
};

export default Clock;
