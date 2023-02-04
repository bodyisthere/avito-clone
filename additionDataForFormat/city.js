const group = document.getElementsByClassName("mw-category")[1];
const groupS = group.getElementsByTagName('li');
let districts = [];
for(let i = 0; i < groupS.length; i++) {
  const result = groupS[i].textContent.split(' ')[0];
  districts.push(result);
}
console.log(districts)