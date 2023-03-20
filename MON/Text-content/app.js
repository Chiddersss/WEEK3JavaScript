const placeHolder = document.getElementById("placeHolder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

// Adding an ADD Event Listener to the button
submit.addEventListener("click", () => {
    placeHolder.style.color="goldenrod";
    // placeHolder.textContent=input.value;
    // placeHolder.textContent = `<li>${input.value}</li>`
    list.innerHTML = `<li>${input.value}</li>`
})

// Storing an image element
const image = document.getElementById("img");
image.src="https://pbs.twimg.com/media/FrDkV2mX0AIuuHs?format=jpg&name=large"
console.log(image);

submit.addEventListener("click", () =>{
    if(image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
})
