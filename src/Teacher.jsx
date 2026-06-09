//understanding the mount/ render in react
//mount --> wehn the component is visible for the 1st time on the screen
//render --> when the function in the component exectues every time (when a button is clicked everytime, the function will execute and the component will re-render)

import React, { useState } from 'react';

function Teacher(){

    const [students, setStudents] = useState(0);

    return(
        <>

            <h1>Students: {students}</h1>

            <button onClick={() => setStudents(students+1)}>
                Add Student
            </button>

        </>

    );
}
export default Teacher;