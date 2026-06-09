//useState() Hook
import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest"); //initial state is Guest, when u refresh & before clicking the button, u can find the Name="Guest" soon after u refresh
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Spongebob"); //ikkada name="spongebob" ani iste adi console lo output chupinchadhu. it will be in virtual DOM. to get the o/p in the console, we have to use the setter function.
    }

    const incrementAge = () => {
        setAge(age+1);  //age initial value is 0
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);

    }

    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>


             <p>Age: {age} </p>
            <button onClick={incrementAge}>Increment Age</button>

             <p>Is employed: {isEmployed? "yes" : "no"} </p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
        
    );


}
export default MyComponent


