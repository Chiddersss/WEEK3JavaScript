// const placeHolder = document.getElementById("placeHolder");
const input = document.getElementById("input");
// const submit = document.getElementById("submit");
// const list = document.getElementById("list");

// Adding an ADD Event Listener to the button 

submit.addEventListener("click", () => {
    placeHolder.style.color = "goldenrod";
    // placeHolder.textContent = input.value;
    // placeHolder.textContent =`<li>${input.value}</li>`;
    list.innerHTML =`<li>${input.value}</li>`;
})

// Storing an image 

const image = document.getElementById("image");
image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
console.log(image);