import React, { useEffect, useState } from "react";
import Cleanup from "./Cleanup";

const CompB = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //effect goes here
        console.log('effect goes here');
        let timerId;
        if(count) {
            timerId = setTimeout(() => {
                console.log('get price');
            },2000)
        }

        return () => {
            // clean up goes here
            console.log('clean up goes here');
            clearInterval(timerId);
        }
    },[count]);

    return(
        <div>
            <p>Component B</p>
            <button onClick={() => setCount(count +1)}>Get Price</button>
            <span>Button clicked {count} times</span>
        </div>
    )
}

export default CompB;