//click events
function ProfilePicture(){

    const imageUrl   = './src/assets/vite.svg'; //we are using the vite.svg pic as the profile picture. when u click on the image, then something happens

    // const handleClick = () => console.log("OUCH!");//function

    // return(
    //     <img onClick = {handleClick} src = {imageUrl}></img> //in the o/p we need the image & for the image, we need to apply the onclick
    // );



    // now when u click on the image, we need to hide the image
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick = {(e) => handleClick(e)} src = {imageUrl}></img>
    );
}
export default ProfilePicture