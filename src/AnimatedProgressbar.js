import React, {useEffect, useState} from "react";
import {Progressbar} from "./Progressbar";

export const AnimatedProgressbar = props => {
    const[percentage, setPercentage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPercentage(percentage => {
                if (percentage >= 100) {
                    clearInterval(intervalId);
                    return percentage;
                }

                return percentage + 1;
            });
        }, 16);

        return () => clearInterval(intervalId);
    }, []);

    return <Progressbar percentage={percentage}>;</Progressbar>;
}