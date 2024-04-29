import React, {useCallback, useMemo, useState} from "react";
import Factorial from "./Factorial";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({firstName: '', lastName:''}); 
    const [number, setNumber] = useState(1);

    const increatmentBy = (e) => {
       // for(let i=0; i < 5; i++) {
            setCount(prevState => prevState + Number(e.target.value));
       // }
    }

    // const updateNumber = (e) => {
    //     setNumber(e.target.value)
    // }

    const updateNumber = useCallback((e)=>{
        setNumber(e.target.value);
    }, [number])

    const factorialOf = (n) => {
        console.log('inside factorialOf method');
        let result = 1;
        if(n <= 1) {
            return result;
        } else {
            for(let i = n; i >=1; i--) {
                result = result * i;
            }
            return result;
        }
    }


    // const factorial = factorialOf(number);
    const factorial = useMemo(()=>(factorialOf(number)), [number]);

    return(
        <div>
            <button onClick={()=>setCount(count + 1)}> Click Me </button>
            <p>You have clicked {count} times</p>
            <label>Increatement by</label>
            <input type="number" onChange={(e)=>increatmentBy(e)}></input>

            <hr/>

            <input type="text" onChange={(e)=>setPerson({...person, firstName: e.target.value})} placeholder="First Name"></input> <br />
            <input type="text" onChange={(e)=>setPerson({...person, lastName: e.target.value})} placeholder="Last Name"></input>

            <br />{JSON.stringify(person)} <br />
            <p>First Name: {person.firstName}</p> <br />
            <p>First Name: {person.lastName}</p> <br />

            <hr />

            <Factorial factorial={factorial} updateNumber={updateNumber}/>
        </div>
    )

}

export default Counter;