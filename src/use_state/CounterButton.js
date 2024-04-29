import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { CounterButtonClicked } from "./actions";
import { getNumberOfClicks } from "./selectors";

const CounterButton = () => {
    //const [numberOfClicks, setNumberOfClicks] = useState(0);
    const numberOfClicks = useSelector(getNumberOfClicks);
    const dispatch = useDispatch();

    const [increamentBy, setIncreamentBy] = useState(1);
    return(
        <div>
            <h1>You have clicked the button {numberOfClicks} times</h1>

            <label> increamentBy </label>
            <input 
                value={increamentBy}
                onChange={e => setIncreamentBy(Number(e.target.value))}
                type="number"/>

            {/* <button onClick={() => setNumberOfClicks(numberOfClicks + increamentBy)}>Click Me</button> */}
            <button onClick={() => dispatch(CounterButtonClicked)}>Click Me</button>
        </div>
    );
}

export default CounterButton;