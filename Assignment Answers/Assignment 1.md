# _Chapter 01 - Inception_

## Q: What is Emmet?
A: Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.
- Emmet is a built-in feature in Visual Studio Code. You don’t have to install any extensions for emmet support. Emmet prevents you from writing the entire code by yourself by providing Emmet abbreviation. Emmet is enabled by default in html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less and stylus files, and also in languages that inherits from any of the above like handlebars and PHP.

- When you start typing an Emmet abbreviation, you will see the abbreviation displayed in the suggestion list in the form of a dropdown. If you type the short form (like element name) then you will see a preview of the expansion. 

Ref:
https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c
https://www.geeksforgeeks.org/emmet-in-visual-studio-code/

## Q: Difference between a Library and Framework?
A: A library is a collection of packages that perform specific operations whereas a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.

- The technical difference between a framework and library lies in a term called inversion of control.
- When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

Ref:
https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

## Q: What is CDN? Why do we use it?
A: A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
- The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.
- A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

Ref:
https://www.cloudflare.com/en-in/learning/cdn/what-is-a-cdn/

## Q: Why is React known as React?
A: React is named React because of its ability to react to changes in data.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

Ref:
https://reactjs.org/blog/2013/06/05/why-react.html
https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#fbolt-is-born

## Q: What is crossorigin in script tag?
A: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. 
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

Ref:
https://www.w3schools.com/tags/att_script_crossorigin.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin
https://reactjs.org/docs/cdn-links.html

## Q: What is difference between React and ReactDOM?
A: React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM.
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

Ref:
https://coursework.vschool.io/react-vs-reactdom/
https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745

## Q: What is difference between react.development.js and react.production.js files via CDN?
A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public.
Development build is several times (maybe 3-5x) slower than the production build.

Ref:
https://www.copycat.dev/blog/reactjs-cdn/

## Q: What is async and defer?
A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

Ref:
https://www.youtube.com/watch?v=IrHmpdORLu8
