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
const obj2 = document.getElementById('red');
let usersCount = 0;
let usersCount2 = 0;
setInterval(() => {

    if (usersCount == 30) {
        clearInterval();
    } else {
        usersCount += 1;
        obj.textContent = usersCount + "%";
    }
}, 80);
/*
setInterval(() => {

    if (usersCount2 == 25) {
        clearInterval();
    } else {
        usersCount2 += 1;
        obj2.textContent = usersCount2 + "X";
    }
}, 80);
*/
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

let questionDiv = document.getElementById('question');
let btn = document.getElementById('button');
let btnIcon = document.getElementById('bt_open');
let btnIconclose = document.getElementById('bt_close');
let questions = document.getElementById('quest');
let answers = document.getElementById('answer');




function queastionsControl() {
    questionDiv.style.transition = 'all .6s ease';
    btnIcon.style.display = 'none';
    btnIconclose.style.display = 'block';
    btn.style.background = '#fff';
    btn.style.padding = '10px';
    btnIconclose.style.color = '#0B0A33';
    questionDiv.style.background = '#5335D9';
    questions.style.display = 'none';
    answers.style.display = 'block';
};

function queastionsControlclose() {
    questionDiv.style.transition = 'all .6s ease';
    btnIcon.style.display = 'block';
    btnIconclose.style.display = 'none';
    btn.style.background = '#5335D9';
    btn.style.padding = '10px';
    btnIconclose.style.color = '#0B0A33';
    questionDiv.style.background = '#fff';
    questions.style.display = 'block';
    answers.style.display = 'none';
};



//2
let questionDiv2 = document.getElementById('question2');
let btn2 = document.getElementById('button2');
let btnIcon2 = document.getElementById('bt_open2');
let btnIconclose2 = document.getElementById('bt_close2');
let questions2 = document.getElementById('quest2');
let answers2 = document.getElementById('answer2');




function queastionsControl2() {
    questionDiv2.style.transition = 'all .6s ease';
    btnIcon2.style.display = 'none';
    btnIconclose2.style.display = 'block';
    btn2.style.background = '#fff';
    btn2.style.padding = '10px';
    btnIconclose2.style.color = '#0B0A33';
    questionDiv2.style.background = '#5335D9';
    questions2.style.display = 'none';
    answers2.style.display = 'block';
};

function queastionsControlclose2() {
    questionDiv2.style.transition = 'all .6s ease';
    btnIcon2.style.display = 'block';
    btnIconclose2.style.display = 'none';
    btn2.style.background = '#5335D9';
    btn2.style.padding = '10px';
    btnIconclose2.style.color = '#0B0A33';
    questionDiv2.style.background = '#fff';
    questions2.style.display = 'block';
    answers2.style.display = 'none';
};


//3
let questionDiv3 = document.getElementById('question3');
let btn3 = document.getElementById('button3');
let btnIcon3 = document.getElementById('bt_open3');
let btnIconclose3 = document.getElementById('bt_close3');
let questions3 = document.getElementById('quest3');
let answers3 = document.getElementById('answer3');




function queastionsControl3() {
    questionDiv3.style.transition = 'all .6s ease';
    btnIcon3.style.display = 'none';
    btnIconclose3.style.display = 'block';
    btn3.style.background = '#fff';
    btn3.style.padding = '10px';
    btnIconclose3.style.color = '#0B0A33';
    questionDiv3.style.background = '#5335D9';
    questions3.style.display = 'none';
    answers3.style.display = 'block';
};

function queastionsControlclose3() {
    questionDiv3.style.transition = 'all .6s ease';
    btnIcon3.style.display = 'block';
    btnIconclose3.style.display = 'none';
    btn3.style.background = '#5335D9';
    btn3.style.padding = '10px';
    btnIconclose3.style.color = '#0B0A33';
    questionDiv3.style.background = '#fff';
    questions3.style.display = 'block';
    answers3.style.display = 'none';
};


//4
let questionDiv4 = document.getElementById('question4');
let btn4 = document.getElementById('button4');
let btnIcon4 = document.getElementById('bt_open4');
let btnIconclose4 = document.getElementById('bt_close4');
let questions4 = document.getElementById('quest4');
let answers4 = document.getElementById('answer4');




function queastionsControl4() {
    questionDiv4.style.transition = 'all .6s ease';
    btnIcon4.style.display = 'none';
    btnIconclose4.style.display = 'block';
    btn4.style.background = '#fff';
    btn4.style.padding = '10px';
    btnIconclose4.style.color = '#0B0A33';
    questionDiv4.style.background = '#5335D9';
    questions4.style.display = 'none';
    answers4.style.display = 'block';
};

function queastionsControlclose4() {
    questionDiv4.style.transition = 'all .6s ease';
    btnIcon4.style.display = 'block';
    btnIconclose4.style.display = 'none';
    btn4.style.background = '#5335D9';
    btn4.style.padding = '10px';
    btnIconclose4.style.color = '#0B0A33';
    questionDiv4.style.background = '#fff';
    questions4.style.display = 'block';
    answers4.style.display = 'none';
};

//5
let questionDiv5 = document.getElementById('question5');
let btn5 = document.getElementById('button5');
let btnIcon5 = document.getElementById('bt_open5');
let btnIconclose5 = document.getElementById('bt_close5');
let questions5 = document.getElementById('quest5');
let answers5 = document.getElementById('answer5');




function queastionsControl5() {
    questionDiv5.style.transition = 'all .6s ease';
    btnIcon5.style.display = 'none';
    btnIconclose5.style.display = 'block';
    btn5.style.background = '#fff';
    btn5.style.padding = '10px';
    btnIconclose5.style.color = '#0B0A33';
    questionDiv5.style.background = '#5335D9';
    questions5.style.display = 'none';
    answers5.style.display = 'block';
};

function queastionsControlclose5() {
    questionDiv5.style.transition = 'all .6s ease';
    btnIcon5.style.display = 'block';
    btnIconclose5.style.display = 'none';
    btn5.style.background = '#5335D9';
    btn5.style.padding = '10px';
    btnIconclose5.style.color = '#0B0A33';
    questionDiv5.style.background = '#fff';
    questions5.style.display = 'block';
    answers5.style.display = 'none';
};


//6
let questionDiv6 = document.getElementById('question6');
let btn6 = document.getElementById('button6');
let btnIcon6 = document.getElementById('bt_open6');
let btnIconclose6 = document.getElementById('bt_close6');
let questions6 = document.getElementById('quest6');
let answers6 = document.getElementById('answer6');




function queastionsControl6() {
    questionDiv6.style.transition = 'all .6s ease';
    btnIcon6.style.display = 'none';
    btnIconclose6.style.display = 'block';
    btn6.style.background = '#fff';
    btn6.style.padding = '10px';
    btnIconclose6.style.color = '#0B0A33';
    questionDiv6.style.background = '#5335D9';
    questions6.style.display = 'none';
    answers6.style.display = 'block';
};

function queastionsControlclose6() {
    questionDiv6.style.transition = 'all .6s ease';
    btnIcon6.style.display = 'block';
    btnIconclose6.style.display = 'none';
    btn6.style.background = '#5335D9';
    btn6.style.padding = '10px';
    btnIconclose6.style.color = '#0B0A33';
    questionDiv6.style.background = '#fff';
    questions6.style.display = 'block';
    answers6.style.display = 'none';
};