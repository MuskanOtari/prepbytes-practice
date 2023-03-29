console.log("working");

// const element = document.getElementById("test");
// console.log(element.innerText);
// console.log(element.innerHTML);

// const element1 = document.getElementsByClassName("text");
// console.log(element1);
// console.log(element1[0].innerText);
// console.log(element1[1]);
// console.log(element1[2]);

// const element2 = document.getElementsByTagName("h2");
// console.log(element2);
// console.log(element2[0].innerText);
// console.log(element2[1].innerText);
// console.log(element2[2].innerText);

// const myElement = document.createElement("div");
// myElement.className = "myelement";
// myElement.id = "myId";
// myElement.setAttribute("for","name");
// myElement.innerHTML = `
//                         <b>My Name is Sidhant. It's "Sidhant's" Lappy</b>
//                       `
// console.log(myElement);

// document.querySelector("div.addText").appendChild(myElement);

// const myImage = document.createElement("img");
// myImage.className = "myImg";
// myImage.setAttribute("src","./coffee.jpeg");

// document.querySelector("body").appendChild(myImage);

// // const myText = document.createTextNode("Hey Hi..How are you doing");
// const myH1 = document.createElement("h1");
// myH1.innerText = `He y Hijdbfjdngkd`
// // myH1.appendChild(myText);

// document.querySelector("body").appendChild(myH1);

// const myButton = document.getElementsByClassName("button")[0];

// myButton.addEventListener('click',changeStyle);

// function changeStyle(){
//     // console.log("hi");
//     const getElementWithIdTest = document.getElementById("test");
//     getElementWithIdTest.style.fontSize = "40px";
//     getElementWithIdTest.style.backgroundColor = "yellowgreen";
// }

const taskList = [
    tempObj = {
        id: Date.now(),
        taskName: "Trip to Paris",
    },
    tempObj = {
        id: Date.now(),
        taskName: "Trip to Bhutan",
    },
    tempObj = {
        id: Date.now(),
        taskName: "name",
    },
    tempObj = {
        id: Date.now(),
        taskName: "name",
    },
];

const addTask = () => {
    const name = document.getElementById("name").value;
    const tempObj = {
        id: Date.now(),
        taskName: name,
    }
    taskList.push(tempObj);
    console.log(taskList);
    addTaskOnScreen();
}

const addTaskOnScreen = () => {
    const element = document.createElement("div");
    element.setAttribute("class", "child");
    const existingElement = document.getElementById("parent");
    existingElement.appendChild(element);
    element.innerText = taskList[taskList.length - 1].taskName;
}

console.log(Date.now());
// #parent {
//     display: flex;
//     flex - wrap: wrap;
//     justify - content: space - around;
// }

// .child {
//     width: 250 px;
//     height: 300 px;
//     background - color: tomato;
//     border: 1 px solid yellow;
//     border - radius: 5 px;
//     margin: 10 px;
// }