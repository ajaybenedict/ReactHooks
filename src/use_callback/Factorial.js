import React, { useEffect } from "react";

const Factorial = (props) => {
    const {factorial, updateNumber} = props;

    useEffect(()=> {
        console.log('component re-render');
    })

    return (
        <div>
            <div>Find the factorial::::</div>
            <input type="number" placeholder="Enter the number" onChange={updateNumber}></input>
            <p>factorial of the given number: {factorial}</p>   
        </div>
    )
}
export default React.memo(Factorial);