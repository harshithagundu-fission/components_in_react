//props
// import PropTypes from 'prop-types'

function Student(props){

    return(
        <div className = "student ">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"}</p> 
        </div>
    );

}
//isStudent is a boolen . for boolean we have to use ternary operator.
            
//propTypes will be available in node.module folder
// Student.propTypes={
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,

// }

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student
