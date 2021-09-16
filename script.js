// DOM (Document Object Model) shaped like an object 

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

// We can access the children of the document by following this line of code.
console.log(document.body.children[1]);

// We are accessing the 1st child of the ul from the body section of the HTML document
console.log(document.body.children[1].children[0]);

// To access all the elements we can also use other function that provides by window object.
// To access first element from ul we can also use getElementById function
console.log(document.getElementById('first-child-ul'));

// These are some ways we can traversing the DOM. We can do more to this element by accessing it.
// Like we can change its color, font-size, and more.
var secondElement = document.getElementById('second-child-ul');
secondElement.style.color = 'red';

secondElement.innerHTML = "JavaScript";

var btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', function() {
    document.getElementById('third-child-ul').innerHTML = 'Hello';
});

var btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', function() {
    console.log(`Hello`);
});
