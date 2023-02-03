## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation Coding Assignment

## Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
```
const header = React.createElement(
    "div",{className:"title"},"These are nested tags",
    [
        React.createElement("h1",{key:"h1"},"This is h1 tag"),
        React.createElement("h2",{key:"h2"},"This is h2 tag"),
        React.createElement("h3",{key:"h3"},"This is h3 tag")
    ]
);
```

## Q: Create the same element using JSX
```
const header = 
    <div className="title">
        These are Nested tags
        <h1 key="h1">This is h1 tag</h1>
        <h2 key="h2">This is h2 tag</h2>
        <h3 key="h3">This is h3 tag</h3>
    </div>
```

## Q: Create a functional component of the same with JSX
```
const Header = () => (
    <div className="title">
        These are Nested tags
        <h1 key="h1">This is h1 tag</h1>
        <h2 key="h2">This is h2 tag</h2>
        <h3 key="h3">This is h3 tag</h3>
    </div>
    )
```

## Q: Pass attribute into the tag in JSX
```
const Header = () => (
    <div className="title">
        These are Nested tags
        <h1 style={{color:"blue"}} key="h1" >This is h1 tag</h1>
        <h2 style={{fontSize:"10px"}} key="h2">This is h2 tag</h2>
        <h3 style={{fontFamily:"cursive"}} key="h3">This is h3 tag</h3>
    </div>
    )
```
## Q: Composition of Component (Add a component inside another)
```
const AnotherComp = () => <h1>This is component inside another component </h1>
const Header = () => (
    <div className="title">
        This is another component.
        <AnotherComp />
        These are Nested tags
        <h1 style={{color:"blue"}} key="h1" >This is h1 tag</h1>
        <h2 style={{fontSize:"10px"}} key="h2">This is h2 tag</h2>
        <h3 style={{fontFamily:"cursive"}} key="h3">This is h3 tag</h3>
    </div>
    )
```
## Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice

```
 [_Assignment Solution_](../3%20-%20Laying%20the%20foundation/Coding/Assignment.js)


