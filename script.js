function toggleMenu() {
    let subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("display_drop");
}

function toggleMenu2() {
    let subMenu = document.getElementById("subMenu2");
    subMenu.classList.toggle("display_drop");
}
//counting animationa

const obj = document.getElementById('blue');
let usersCount = 0;
setInterval(() => {

    if (usersCount == 30) {
        clearInterval();
    } else {
        usersCount += 1;
        obj.textContent = usersCount + "%";
    }
}, 80);
/*
function animateValue(){
var current = parseInt(obj.innerHTML);
const interval=setInterval(function(){
    obj.innerHTML = usersCount++;
    stopInterval(interval);
},3);
}
function stopInterval(interval){
if(usersCount > 30){
    clearInterval(interval);
    console.log(usersCount);
     }
}
animateValue();
*/

let list01 = document.getElementById('list1');
let list02 = document.getElementById('list2');
let list03 = document.getElementById('list3');
let hr01 = document.getElementById('hr1');
let hr02 = document.getElementById('hr2');
let hr03 = document.getElementById('hr3');

list01.addEventListener('click', function() {
    hr01.style.background = '#5335D9';
    hr02.style.background = '#DBDBE0';
    hr03.style.background = '#DBDBE0';
    this.style.opacity = '100%';
    list02.style.opacity = '50%';
    list03.style.opacity = '50%';
});


list02.addEventListener('click', function() {
    hr02.style.background = '#5335D9';
    hr01.style.background = '#DBDBE0';
    hr03.style.background = '#DBDBE0';
    this.style.opacity = '100%';
    list01.style.opacity = '50%';
    list03.style.opacity = '50%';
});


list03.addEventListener('click', function() {
    hr03.style.background = '#5335D9';
    hr01.style.background = '#DBDBE0';
    hr02.style.background = '#DBDBE0';
    this.style.opacity = '100%';
    list01.style.opacity = '50%';
    list02.style.opacity = '50%';
});