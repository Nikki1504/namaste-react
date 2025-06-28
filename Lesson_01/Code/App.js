//Javascript Code : Manipulating the DOM using Javascript
/*
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from Javascript";

const root = document.getElementById("root");

root.appendChild(heading);
*/

//React Code: Creating and rendering elements using React
/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

//React Code: Creating nested elements

/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *   </div>
 * </div>
 */

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
*/

//Creating a nested structure with sibling elements

/**
 * <div id="parent">
 *   <div id="child">
 *     <h1> I am h1 tag</h1>
 *     <h2> I am h2 tag</h2>
 *   </div>
 * </div>
 */

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { }, "I'm h1 tag"),
    React.createElement("h2", { }, "I'm h2 tag")
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"))
*/

//Nested elements with sibling child components

/**
 * <div id="parent">
 *   <div id="child-1">
 *     <h1> I am h1 tag</h1>
 *     <h2> I am h2 tag</h2>
 *   </div>
 *   <div id="child-2">
 *     <h1> I am h1 tag</h1>
 *     <h2> I am h2 tag</h2>
 *   </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
