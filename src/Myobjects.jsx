//update objects in state

import React, { useState } from 'react';

function Myobjects(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(event){

        // setCar({...car, year: event.target.value}); //event.target.value --> u can access all the years from the event. if u just apply year:2025 --> this will work only for the 2025 year. Now u have u make this using updater function.

        // now we have use the arrow function for the above
        // setCar(car => ({...car, year: event.target.value}));  //if u just give {} without wrapping in (), then javascript will think that u are using multi lines inside the function. to avoid this u have to use ({})


        //now using the updater function. c is the previous state of the car.
        setCar(c => ({...c, year: event.target.value}));  //ante previous value ni new value tho update avvutundi --> o/p lo 2024 unte adi 2025 ki update avvudhi

        // 1. spread operator
        //2. arrow function
        //3. updater function
    }

    function handleMakeChange(event){

        //setCar({...car, model:event.target.value});
        //using updater function
        setCar(c => ({...c, make: event.target.value})); //o/p lo model ki previous ki Ford ani unte adi audi ki update avvudhi

    }
    

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));

    }
    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>

    );
}
export default Myobjects