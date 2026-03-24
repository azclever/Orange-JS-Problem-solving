console.log(document.children)
console.log(document.childNodes)


console.log(document.firstChild)
console.log(document.lastChild)
console.log(document.firstChild.nextSibling)


let card = document.createElement("div");

card.innerHTML=`<h3> title</h3>
<img src="./11.jpg" alt="" style="width: 100px; height: 100px;">
<p>lorem </p>
`;
card.style.backgroundColor="#777"
card.style.width="250px";

document.body.append(card)


console.log(document.body.firstElementChild)

console.log(document.body.firstElementChild.innerHTML=`<ol><li>A</li><li>b</li><li>c</li></ol>`)