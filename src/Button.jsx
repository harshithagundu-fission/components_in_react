//onClick events :
//<button onClick={functionName}>Click Me</button>
//arrow function:
//<button onClick={() => alert("Clicked")}>
//   Click
// </button>


function Button(){

    // normal function::
    // const handleClick = () => {
    //     console.log("OUCH!");
    // }

    // //if ur function has paramenter, name is the paramenter::
    // const handleClick2 = (name) => 
    //     console.log(`${name} Stop Clicking me!`);


    // let count = 0;

    // const handleClick = (name) => { 
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    //  return (
    //     <button onClick={() => handleClick("bro")}>Click Me</button>   // bro is the name paramenter value,,,,if u give like this handleClick2("bro"), then soon after the page is loaded, the function will be called. for this u have to use arrow function
    // );



    //using event argument::
    const handleClick = (e) => e.target.textContent = "OUCH!";

    // return(<button onClick = {(e) => handleClick(e)}> Click Me </button>);

    
    // on Double Click event handler::
    return(<button onDoubleClick = {(e) => handleClick(e)}>Click Me</button>); 
   

}
export default Button