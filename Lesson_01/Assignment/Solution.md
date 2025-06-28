### Q: What is Emmet?
**Ans:** Emment is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full-fledged boiler plate code for writing HTML and CSS.

### Q: Difference between library and framework?
**Ans:** A key difference between the two is Inversion of control. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

### Q: What is CDN? Why do we use it?
**Ans:** CDN stands for **Content Delivery Network**.
Reasons why we use it:-
- ✅ **Faster loading times** by reducing latency.
- ✅ **Reduced server load** on the origin server.
- ✅ **High availability** and reliability — if one server fails, others take over.
- ✅ **Easy sharing** of common libraries like React, Bootstrap, jQuery without downloading them locally.

### 🔗 React & ReactDOM CDN Links

To include React and ReactDOM in your project via CDN (development version):

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### Q: Why is React known as React?
***Ans:** React is a JavaScript Library. The name ‘React’ was chosen because the library was designed to allow developers to react to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

### Q: What is crossorigin in script tag?
***Ans:** The crossorigin attribute in the script tag enables Cross-Origin Resource Sharing (CORS) for loading external JavaScript files from different origin than the hosting web page. This allows the script to access resources from the server hosting the script, such as making HTTP requests or accessing data.

### Q: What is difference between React and React DOM?
***Ans:** 
- **React** is the core library used to build **user interfaces**. It provides the tools to create and manage components, state, and hooks — basically, the logic and structure of your UI.
  
- **ReactDOM** is a separate package that handles **rendering React components to the DOM** in web browsers. It connects React to the browser’s actual HTML DOM.

### Q: What is difference between react.development.js and react.production.js files via CDN?
***Ans:** 
- **`react.development.js`** is the **development build** of React. It includes:
  - Helpful warnings
  - Detailed error messages
  - Developer tools support

  It is **not optimized for performance** and should only be used during local development.

- **`react.production.js`** is the **production build** of React. It:
  - Removes all development-specific code
  - Is minified and optimized for performance
  - Reduces file size and improves load time

---

### 🛠️ Why use production version in production?

In production, we want our app to:
- Be **lightweight**
- Load **faster**
- Run **without extra checks** meant for developers

So we use `react.production.js` to ensure the app is **optimized and efficient**.
