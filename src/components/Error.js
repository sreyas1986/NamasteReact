import { useRouteError } from "react-router-dom";


const Error = () =>{
const err = useRouteError();
console.log(err);
    return (<div>
        
        <h2>Ooops....</h2>
        <h3>Something Went Wrong</h3>
        <h4>{err.status}:{err.statusText}</h4>
        {/* <h4>{err.error.message}</h4> */}
    
    </div>)
}

export default Error;