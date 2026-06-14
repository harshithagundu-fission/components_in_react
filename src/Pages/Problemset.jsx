import { useSearchParams } from "react-router-dom";

function ProblemSet(){

    // const params = useParams();
    // console.log(params);

    const [queryParams, setQueryParams] = useSearchParams();  //this is a hook same like the useStae hook
     
                                                         //foreach --> loops throgh all the key value pairs in the URL
    queryParams.forEach((value, key) => {              
        console.log(value,key);
    })

    console.log(queryParams.get("page"));
    console.log("page", queryParams.getAll("page"));
    console.log(queryParams.getAll("name"));          //extracting the value from the URL
    console.log(queryParams.has("name"));              //name ane key tho unnaya leda ani URL lo check chestundi. o/p will either tru or false
    console.log(queryParams.has("name", "aravind"));  //to check the exact name=aravind in the URL
    
    const appendParam = () =>{
       // setQueryParams({name: "aravind", role:"SDE"}); --> u can use an object aswell in the setQueryParams. 
       setQueryParams((prev) => {
             prev.append("name", "aravind");          //append--> unna URL ki oka kotta query param ni add chestunnam--> name, aravind is like the key & it's value
             prev.append("name", "rajesh");           //u can append multiple values in the URL at the same time. now to extract this from the URL u have to use get method.
             prev.set("page", "2");               //setting the value of page 1 as page 2
             return prev;                             //after updating u have to return for the display purpose
       });
    };
     
    const deleteParams = () => {
        setQueryParams( (prev) => {
            prev.delete("name");                     //deletes all the name keys, ante name key tho unnavi anni delete chestundi
            return prev;
        });

    }
    return(
        <>
        <div>
            <h1>ProblemSet Page</h1>
            <p>page: {queryParams.get("page")}</p>
            <p>name: {queryParams.getAll("name").join(", ")}</p>
            <button onClick={appendParam}>Append query PAram</button>
            <button onClick={deleteParams}>Delete</button>
        </div>
        </>
    );
}
export default ProblemSet;