// DOM shaped like an object 

// "this" logs the window object and allowing us bunch of other function
console.log("This: ");
console.log(this);

// 'this' allows us to access window object, which is browser API (Application Programming Interface).
// window.document gives us the document of the web page.
console.log("Window document: ");
console.log(window.document);

// "document.documentElement" it is getting all the elements inside the HTML document.
console.log(document.documentElement);

// document.head is accessing only head portion of the HTML document.
console.log(document.head);