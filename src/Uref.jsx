//useRef() --> store the value, but do not re-render

import React, { useState, useEffect, useRef } from "react";

function Uref(){

    // let [number, setNumber] = useState(0);
    // const ref = useRef(0);      //useRef returns an object,the object is "current"
    const inputRef = useRef(null); // --> this will create a ref object that we can attach to an input element
    console.log(inputRef);

    useEffect(() => {
        console.log("Component rendered");
    }); // --> if u do not pass a dependency array, every time when the button is clicked, the component will re-render, i.e u can see in the console)

    function handleClick(){
        // setNumber(n => n + 1);
        // ref.current++; // --> this will update the value of ref.current, but it will not cause a re-render, so u will not see the updated value in the console
        // console.log(ref.current);
        // console.log(inputRef);
        inputRef.current.focus(); // --> this will focus the input element when the button is clicked   
    }   

    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <input ref={inputRef} /> {/* special attribute to reference the input element, u can access the input element using inputRef.current */}
        </div>
     );
    
}
export default Uref;