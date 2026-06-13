//form events: creating a form and handling the submit event

const FormExample = () => {
    return(
        // now creating the input field
        <section className="formSection">
            <div className="inputdiv">
                <input type="text" placeholder="Enter your name"/>
                <br/>
                <button>Submit</button>
            </div>
        </section>
    );
}
export default FormExample;