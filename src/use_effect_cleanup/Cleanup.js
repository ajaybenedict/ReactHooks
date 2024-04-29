import React, { useState } from "react";
//import CompA from "./CompA";
import CompB from "./CompB";

const Cleanup = () => {
    const [toggle,setToggle] = useState(true);
    return(
        <div>
            <p>useEffect Cleanup</p>
            <button onClick={() => (setToggle(!toggle))}>Show/ Hide</button>
            {/* {toggle ? <CompA/> : null} Effect clean up on Componentwillunmont */}
            <CompB/>
        </div>
    )
};

export default Cleanup;