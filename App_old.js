 import React  from "react";
import ReactDOM  from "react-dom/client";


//JSX based code React Element Syntax below 
const jsxHeading = (<h1 className="head"> Namaste Sreyas  
    </h1>
);
const eleme= (<span>i am elemet nested in to title</span>)
const Title = () => <h2> React Title </h2>;
const title =(<h2>React Title 2 {eleme}</h2>)
const Title3 = () => <h2> React Title 3</h2>;
//Functional component Syntax below
const number = 1000;

const HeadingComponent = () =>(<div id="container"> <Title /> 
{title} {Title()}
<h2> Hello My  Functional component </h2> 
<h3>we can add a curly braces and add any javascript in jsx{number}

</h3>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

const root1= ReactDOM.createRoot(document.getElementById("root1"));
// for the functional component  the tag is required for rendering  where as  the react element for rendering not required 
root1.render(<HeadingComponent />); 

// const parent= React.createElement("div",
//  {id:"parent"},
//  React.createElement("div",{id:"child"},
//  [React.createElement("h1",{},"I am an h1 tag"),
//  React.createElement("h2",{},"I am an h2 tag")]),
//  React.createElement("div",{id:"child2"},
//  [React.createElement("h1",{},"I am an h1 tag"),
//  React.createElement("h2",{},"I am an h2 tag")]
//  )) ;
// console.log(parent);

// const heading = React.createElement("h1",
// {id:"heading"},"Hello world from react");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);