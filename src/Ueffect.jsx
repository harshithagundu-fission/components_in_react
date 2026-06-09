//useEffect - Render aiyyaka, action perform cheyyatam

//we use useEffect for:
// Fetching data from the API,
// event listners, 
// timers, 
// DOM manipulations, 
// Clean up when a component is unmounted, 
// subscriptions

//1. useEffect(() => {})  --> runs after every re-render
//2. useEffect(() => {}, [])  --> runs only on the first render (when the component is mounted)
//3. useEffect(() => {}, [value])  --> runs on mount + when the value changes

import React, { useState, useEffect } from 'react';

function Ueffect(){

    const [count, setCount] =useState(0);
    const [color, setColor] = useState("green");

    //Q)everytime when the component re-renders, u have to chnage the title of the document
    // normally, useEffect has a function & an array of dependencies
    // useEffect (function, [dependencies]). but now u do not need the dependencies

    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;

    });

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){

        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
            <p style={{ color: color }}>Count: {count} Color: {color}</p>

            <button onClick={addCount}>
                Add
            </button>

            <button onClick={subtractCount}>Subtract</button>

            <button onClick={changeColor}>Change Color</button>

        </>
    );
}
export default Ueffect;
