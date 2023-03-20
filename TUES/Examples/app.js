const submitBtn = document.getElementById('submitBtn');
const input = document.getElementById('toDo');
const list = document.getElementById("list");
const rmvBtn = document.getElementById("rmvBtn");
const supriseBtn = document.getElementById('supriseBtn');
const heading = document.getElementById('heading');
const alllistitems = document.querySelectorAll('li');
const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('openBtn');

// -- Submit Btn -- 
submitBtn.addEventListener('click', () => {
    const listItem = document.createElement("li")
    listItem.textContent = input.value
    list.appendChild(listItem)
    console.log(listItem)
});

// -- Remove button -- removeAppend Child
rmvBtn.addEventListener('click', () => {
    const lastLiItem = document.querySelector("li:last-child")
    list.removeChild(lastLiItem)
});

// -- setTimeout Method -- 
supriseBtn.addEventListener('click', () => {
    heading.textContent = 'Suprise!'
    setTimeout(() => {
        heading.textContent = ''
    }, 1000);
});

// -- Multiple Event Listeners --
alllistitems.forEach((listItem) => {
    listItem.addEventListener('click', (event) => {
        list.removeChild(event.target)
    })
});

// -- Using Event Bubbling --
list.addEventListener('mouseover', (event) => {
    event.target.textContent = event.target.textContent.toUpperCase()
});

// -- ParentNode Property --
closeBtn.addEventListener('click', () => {
    closeBtn.parentNode.style.display = 'none'
});

openBtn.addEventListener('click', () => {
    openBtn.previousElementSibling.style.dislay = 'block'
});