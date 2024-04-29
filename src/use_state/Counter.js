import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({firstName:'', lastName:''})

    const increaseFive = () => {
        setCount(prevState => prevState+5);
    }

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>Current value of the counter is {count}</p>

            <button onClick={()=> increaseFive()}>increase 5</button>
            <br/>
            <input type='text' onChange={(e => setPerson({...person, firstName:e.target.value}))} placeholder="First Name" />
            <input type='text' onChange={(e => setPerson({...person, lastName: e.target.value}))} placeholder="Last Name" />
            {JSON.stringify(person)}
            <br/><p>First Name: {person.firstName}</p>
            <br/><p>Last Name: {person.lastName}</p>
        </div>
    )
}

export default Counter;