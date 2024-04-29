import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('Initial Message');

    useEffect(()=>{
        console.log('Component didmount/ didupdate');
        console.log('msg', msg);
        console.log('count is increased to', count);
    },[count, msg]);

    return(
        <div>
            <button onClick={()=>(setCount(count + 1))}>Increament me</button>
            <p>The count is {count}</p>

            <button onClick={()=>(setMsg('Updated message'))}>update Message</button>
        </div>
    )
}

export default Counter;