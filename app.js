console.log('hello JavaScript!');
console.log(42);
console.log(true);

let title = document.title;
console.log(title);

document.title = 'New Title';

console.log(title);
console.log(document.title);

title  = 'reassign title';

console.log(title);

const cat = { name: 'felix' };
console.log(cat);
cat.name = 'duchess';
console.log(cat);

const nameTag = document.getElementById('name-tag');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const updateButton = document.getElementById('update-button');
const colorPink = document.getElementById('color-pink');
const colorLightGreen = document.getElementById('color-lightgreen');
const colorLightBlue = document.getElementById('color-lightblue');
console.log(nameInput);
const h1 = document.getElementById("intro-pt-1");
const h3 = document.getElementById("intro-pt-2");
const footer = document.getElementById("footer");
console.log(nameDisplay);

nameDisplay.textContent = 'Felix the Cat';

nameTag.classList.add('faded');

updateButton.addEventListener('click', () => {
    // this code runs when button is clicked
    console.log('you clicked the button');
    const newName = nameInput.value;
    nameDisplay.textContent = newName;
});

colorPink.addEventListener('click', () => {
    console.log('you clicked the button');
    h1.style.backgroundColor = 'pink';
    h3.style.backgroundColor = 'pink';
    footer.style.backgroundColor = 'pink';
});

colorLightGreen.addEventListener('click', () => {
    console.log('you clicked the button');
    h1.style.backgroundColor = 'lightGreen';
    h3.style.backgroundColor = 'lightGreen';
    footer.style.backgroundColor = 'lightGreen';
});

colorLightBlue.addEventListener('click', () => {
    console.log('you clicked the button');
    h1.style.backgroundColor = 'lightBlue';
    h3.style.backgroundColor = 'lightBlue';
    footer.style.backgroundColor = 'lightBlue';
});