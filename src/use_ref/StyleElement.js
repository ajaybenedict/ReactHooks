import React, { useEffect, useRef } from "react";

const StyleElement = () => {

    const colorPara = useRef('');
    const colors = ['red', 'blue', 'green', 'purple', 'grey'];
    const selectedColor = useRef(null);

    useEffect(() => {
        console.log(colorPara);
        console.log(colorPara.current);
    });

    useEffect(() => {
        console.log('statement executed for selectcolor refhook changes');
    },[selectedColor.current]);

    const styleMe = () => {
        const randomColor = Math.floor(Math.random() * colors.length);
        colorPara.current.style.color = colors[randomColor];

        selectedColor.current = colors[randomColor];
        console.log('selected color', selectedColor.current);
    }

    return(
        <div>
            <button onClick={() => styleMe()}>Click Me</button>
            <p ref={colorPara}>Welcome back to the channel</p>
        </div>
    )
}

export default StyleElement;