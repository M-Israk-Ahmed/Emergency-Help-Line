1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
>> getElementById is used to manipulate object when a specific #id is available for that element/object, it will return a single value;
getElementsByClassName returns a array like object that holds all the element with a common class name. On the other hand, querySelector / querySelectorAll can be used to get an element with a the combination of html tags,css class/id. However, in case of more than one output querySelector will return only the first result.

2. How do you create and insert a new element into the DOM?
>> We can use the createElement() method and later can set our html inside `html...` and finally we can append it in the parentNode. for example-
const container=document.getElementById(#id);
const divs = document.createElement("div");
        divs.innerHTML = `html code goes here...`
        container.appendChild(divs);

3. What is Event Bubbling and how does it work?
>> Event bubbling is a sequential action starting from the target element to its parent; upto the root of the document. If we click a button the action bubbles up to button's parent>parent's parent...so on>upto the root of the document. Its basically, works in three stage- where in first stage its try to capture the event location starting from the root, then triggers the action, and finally bubbles up to the root.


4. What is Event Delegation in JavaScript? Why is it useful?
>> Its a memory optimization and code complexity reduction strategy. In stead of trying to add multiple event listener to the multiple (individually) child of a common parent we can add a single event listener to their parent and later on can access any child. Its increases memory efficiency, helps organizing and clean code, and dynamic content fetching/update.

5. What is the difference between preventDefault() and stopPropagation() methods?
>> preventDefault() prevents the default reloading/submitting functionality of a html form. stopPropagation() prevents the event bubbling up.

