// ------------ First Hello World program using JS to manipulate the DOM ---------------
//  <script>
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Namaste Everyone from JS";
//     const root = document.getElementById("root");
//     root.appendChild(heading);
// </script> 


const  heading = React.createElement("h1",{},"Namaste Everyone using React !");
const heading2= React.createElement("h2",{style:{color:"blue"}},"Nested element");
const container = React.createElement("div",{id:"container"},[heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); /// For single react element
root.render(container);