//props
function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please login to continue</h2>
    // }


    //else is not required
    // if(props.isLoggedIn){
    //     return <h2>Welcome {prop.username}</h2>
    // }
    // return <h2>Please log in to continue</h2>


     
    //using ternary operator
    //return(props.isLoading ? <h2>Welcome {props.username}</h2> : 
    //                         <h2>Please log in to continue</h2>);

    
    
    //using ternary operator by storing in a variable
    // if the value of isLoggedIn=false in App.jsx then u wiil get then the else part message.
    const welcomeMessage = <h2>Welcome {props.username}</h2>

    const loginPrompt =  <h2>Please log in to continue</h2> 

    return (props.isLoggedIn ? welcomeMessage : loginPrompt);

    UserGreeting.defaultProps={
        isLoggedIn: false,
        username: "Guest",
    }
}

export default UserGreeting