// console.log("Hello there")

// Change colour of elements in The DOM

// document.getElementById("heading").style.color = "purple"
// document.getElementById("heading").style.backgroundColor = "yellow"


// First Example - Add Event Listener 

// const myHeading = document.getElementById("heading");
// const input = document.getElementById("input");
// const button = document.getElementById("button")

// Inner HTML formats a HTML tag
// document.getElementById("listWrapper").innerHTML += "<li>Heyup</>";

// Changes elements "heading" on click 

// myHeading.addEventListener("click", () => {
//     console.log("Running the function 1... ");
//     myHeading.textContent = "It's now changed!";
// });


// Second example

// button.addEventListener("click", () => {
//     myHeading.style.color = input.value;
// });

// Changing li items to C O D E 
// example in the console on JS DOM, slides 33



// Console logging elemetns by tag name in  the list 
const list = document.getElementsByTagName("li");

// changing all elements to a specific color with a for loop
for(let i = 0; i< list.length; i++){
    list[i].style.color = "orange";
}

// console.log(list);

// Getting elements by class name
const notOrange = document.getElementsByClassName("not-orange");

//using a for loop to define the classes that are not orange
for(let i = 0; i< notOrange.length; i++){
    notOrange[i].style.color = "red";
}

console.log(notOrange);
