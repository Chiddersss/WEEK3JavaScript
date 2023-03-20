// console.log("Hello World");

// document.getElementById("heading").style.color = "purple";
// document.getElementById("heading").style.backgroundColor = "yellow";

// // Changing colours of elements using the DOM
// const myHeading = document.getElementById("heading");

// // Inner HTML formats
// // document.getElementById("listWrapper").innerHTML += "<li>this is a list wrapper</li>"

// // First Example -- Adding EventListener
// // Change elements "heading" onClick
// myHeading.addEventListener("click", ()=>{
//     console.log("Running function 1...")
//     myHeading.style.color = "red";
//     myHeading.textContent = "Now Changed!";
// });

// // -- Activity 1 --
// // const button = document.getElementById("button");

// // button.addEventListener("click", ()=> {
// //     button.style.colour = "red";
// // });

// // const input = document.getElementById("input");

// // const paragraphs = document.getElementById("P");
// // let firstPara = paragraphs[0];

// // // Access all at one time

// // for(let i = 0; i < paragraphs; i++) {
// //     paragraphs[i];
// // }

// // Changing li items to C O D E 
// let list=document.getElementsByTagName("li");
//     list.length;
//     list[0];
//     list[3];
//     list[0].style.color="red";
    
// let notOrange= document.getElementsByClassName("not-orange");
// for(let i=0; i <notOrange; i++){
//     notOrange[i].style.color = "orange";
// }

// console.log(notOrange)

let listItems = document.querySelectorAll("li:nth-child(even)")

// console.log(listItems)
for(let i=0; i < listItems; i++){
    listItems[i].style.color="light-green";
}