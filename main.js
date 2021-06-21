const dayBoxes = {
    day: new Date(),
    count: parseInt(Math.round(Math.random() * 100))
}


const prizes = [
    {
        name: "Phone",
        image: "./images/prizes/phone.png"
    },
    {
        name: "Nothing",
        image: "./images/prizes/nothing.png"
    },
    {
        name: "Sun glasses",
        image: "./images/prizes/glasses.png"
    },
    {
        name: "Rock",
        image: "./images/prizes/rock.png"
    },
    {
        name: "Cap",
        image: "./images/prizes/cap.png"
    },
    {
        name: "T-shirt",
        image: "./images/prizes/tshirt.png"
    },
    {
        name: "Pen",
        image: "./images/prizes/pen.png"
    },
    {
        name: "Toy",
        image: "./images/prizes/toy.png"
    },
    {
        name: "Headphones",
        image: "./images/prizes/headphones.png"
    },
    {
        name: "Keyboard",
        image: "./images/prizes/keyboard.png"
    },
]

if (window.location.pathname === "/index.html") {

    function setBoxesForToday(object) {
        let element = document.getElementsByClassName("boxes-count")[0]
        element.innerHTML = `Its ${object.day.getDate()} ${object.day.toLocaleString('default', { month: 'long' })} and ${object.count} boxes waiting you.`.toUpperCase()
    }
    setBoxesForToday(dayBoxes)
}

function setThreeRandomBoxex(arr){
    let boxes = document.getElementsByClassName("box")

    for (i = 0; i < 3; i++) {
        let randomNum = Math.round(Math.random(0, arr.length) * 9)
        let currBox = boxes[i]
        currBox.value = arr[randomNum].name
        currBox.children[1].style.backgroundImage = `url(${arr[randomNum].image})`
        console.log(currBox)
    }
}

function boxRotate(target){
    let element = target
    let headingText = document.getElementsByClassName("prize-text")[0]
    element.className += " box-rotate"
    element.parentNode.className = "box-scene"
    headingText.style.textAlign = "center"
    headingText.style.color = "white"
    let otherBoxes = document.querySelectorAll(".box:not(.box-rotate)")
    
    for (i = 0; i < otherBoxes.length; i++) {
        let currBox = otherBoxes[i]
        currBox.removeAttribute("onclick")
        currBox.parentNode.className = "box-scene"
        currBox.className += " disabled" 
    }

    if (target.value === "Nothing") {
        headingText.innerHTML = "You dont have luck today :( .Come back tommorow to win awsome prizes."
    }

    else {
        headingText.innerHTML = `Congratulations! Your prize for today -> ${target.value}.`
    }
}

setThreeRandomBoxex(prizes)