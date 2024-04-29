import React, { useEffect } from "react";

const CompA = () => {
    
    useEffect(()=>{
        console.log('effect goes here')
        const timerId = setInterval(()=>{
            console.log('API call executed')
        },2000);
        return() => {
            //clean up goes here
            console.log('cleanup goes here');
            clearInterval(timerId);
        }
    },[]);

    return(
        <div>
            <p>Component A</p>
            <hr />
        </div>
    )
}

export default CompA;