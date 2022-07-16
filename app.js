/* Write the code necessary to do the following:

Select the section with an id of container without using querySelector.
Select the section with an id of container using querySelector.
Select all of the list items with a class of “second”.
Select a list item with a class of third, but only the list item inside of the ol tag.
Give the section with an id of container the text “Hello!”.
Add the class main to the div with a class of footer.
Remove the class main on the div with a class of footer.
Create a new li element.
Give the li the text “four”.
Append the li to the ul element.
Loop over all of the lis inside the ol tag and give them a background color of “green”.
Remove the div with a class of footer
*/

const container1 = document.getElementById('container');
const container2 = document.querySelector('#container');
const secondLis = document.querySelectorAll('.second');
const ol = document.querySelector('ol');
const lastElOl = ol.lastElementChild;
// container2.innerText = 'Hello!';
const footerDiv = document.querySelector('.footer');
footerDiv.classList.add('main');
footerDiv.classList.remove('main');
const newLi = document.createElement('li');
newLi.innerText = 'four';
const ul = document.querySelector('ul');
ul.append(newLi);
const childrenOfOl = ol.children;

for (let li of childrenOfOl) {
  li.style.backgroundColor = 'green';
}
footerDiv.remove();
