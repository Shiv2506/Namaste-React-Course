import React from "react";
import ReactDOM from "react-dom/client"
import "../index.css" 
import Header from "./Assignment"

//React Element
const heading = <h1 id="title" key="h2">Namaste React</h1>

//React Component
//Way 1
const Title = function () {
    return 
    <div>
        <h1>Namaste React Functional Component </h1>
    </div>
}


//Way2
// const HeaderComponent1 = () => {
//     return 
//     <div>
//         <h1>Namaste React Functional Component 1</h1>
//     </div>
// }

//Way3
const HeaderComponent2 = () => (
    <div>
        <Header/>
        {heading}
        {/* Composing Components */}
        <Title />  
         {/* we can also use <Title()> */}
         {/* we can also use <Title></Title> */}
        <h1>Namaste React Functional Component 2</h1>
        <h2>This is h2 tag</h2>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  --> rendering an element
root.render(<HeaderComponent2 />);
