//update Arrays in state
import React, { useState } from 'react';

function Myarrays(){

    

        const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

        // now create 2 functions to add food & remvove food
        function handleAddFood(){

        }

        function handleRemoveFood(){

        }


        return(
            <div>
                <h2>List of Food</h2>
                    <ul>
                        {foods.map((food, index) => <li key={index}>{food}</li>)}
                    </ul>

                    <input type="text" id="foodInput" placeholder="Enter food name"/>
                    <button onClick={handleAddFood}>Add Food</button>
               
            </div>
        );

}
export default Myarrays

// map usually have the ( item , index)