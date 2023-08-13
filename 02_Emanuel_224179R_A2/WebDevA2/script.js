//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
show(1);
// // Initial check on page load
reveal();

function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}

function show(pgno) { //function to show selectesd page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    //show the page
    onepage.style.display = "flex";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});


/*for hamMenu */
const hamBtn = document.querySelector("#hamIcon");

hamBtn.addEventListener("click", toggleMenus);

const menuItemsList = document.querySelector("nav ul");

function toggleMenus() { /*open and close menu*/
    menuItemsList.classList.toggle("menuShow");
}


// Attach scroll event listener
window.addEventListener('scroll', reveal);

//reveal when scrolling function
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
            reveals[i].classList.remove('inactive');
        }
        else {
            reveals[i].classList.remove('active');
            reveals[i].classList.add('inactive');
        }
    }
}


//tear collection game
const gameContainer = document.getElementById('game-container');
let score = 0;
const scoreDisplay = document.getElementById('score');

//create tear object
function createItem() {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.left = `${Math.random() * (gameContainer.clientWidth - 30)}px`;
    gameContainer.appendChild(item);
    
    //when on click score increases and remove item
    item.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        item.remove();
    });

    animateItem(item);
}

//animates moving downwards animation
function animateItem(item) {
    let position = 0;
    const animationInterval = setInterval(() => {
        position += 5;
        item.style.top = `${position}px`;

        if (position >= gameContainer.clientHeight) {
            clearInterval(animationInterval);
            item.remove();
        }
    }, 50);
}

function startGame() {
    score = 0;
    gameContainer.innerHTML = '';

    setInterval(() => {
        createItem();
    }, 1000); // Spawn new items every 1 second
}

//starts game when on game page
startGame();