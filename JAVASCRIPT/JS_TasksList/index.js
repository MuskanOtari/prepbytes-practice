document.querySelector("#createList").addEventListener("click", createList);
document.querySelector("#close").addEventListener("click", hideListForm)
document.querySelector("#addList").addEventListener("click", createCard)
document.querySelector("#exit").addEventListener("click", hideItemForm)
let cards = [];

function createList() {
    document.querySelector("#listForm").style.visibility = "visible";
    console.log("List creation box displayed");
    document.querySelector("nav").style.opacity = "10%";


}



function hideListForm(e) {
    e.preventDefault();
    document.querySelector("#listForm").style.visibility = "hidden";
    document.querySelector("nav").style.opacity = "100%";
    document.querySelector("#temForm").style.opacity = "100%";
    console.log("Hide Litform logic Executed");
}

function hideItemForm(e) {
    e.preventDefault();
    document.querySelector("#itemForm").style.visibility = "hidden";
    document.querySelector("nav").style.opacity = "100%";
    document.querySelector("#listForm").style.opacity = "100%";
    console.log("Hide Itemform logic Executed");
}

function createCard(event) {
    document.querySelector("nav").style.opacity = "100%";

    event.preventDefault();
    document.querySelector("#listForm").style.visibility = "hidden";

    let userInput = document.querySelector("#listName").value;
    console.log("Card is being created");


    let title = document.createElement("h4");
    title.innerText = userInput;
    title.style.height = "10%";
    title.style.color = "black";
    title.style.borderBottom = "2px solid black";
    title.style.marginTop = "8%";

    let ul = document.createElement("ul");
    ul.classList.add("ulList");

    let plusIcon = document.createElement("i");
    plusIcon.className = "fa fa-plus-circle";
    plusIcon.style.fontSize = "130%";
    plusIcon.classList.add("plus");
    plusIcon.addEventListener("click", () => {
        showItemForm(ul);
        document.querySelector("nav").style.opacity = "10%";
        document.querySelector("#listForm").style.opacity = "10%";

    });


    let del = document.createElement("i");
    del.className = "fa fa-trash";
    del.classList.add("trash");
    del.style.fontSize = "130%";

    del.addEventListener("click", function removeList() {
        let tempNewArray = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] !== div1) {
                tempNewArray.push(cards[i]);
            }
        }
        cards = tempNewArray;
        display(cards);
    });

    let div1 = document.createElement("div");
    // let middle = document.createElement("div");
    let bottom = document.createElement("div");



    div1.style.width = "250px";
    div1.style.height = "auto";
    div1.style.background = "white";

    div1.style.textAlign = "center";
    div1.classList.add("style_listbox");

    // div1.append(bottom);
    bottom.style.display = "flex";

    bottom.classList.add("bottom_list_icons");


    //-------------------------
    // middle.style.height = "40%";

    // middle.classList.add("middle");

    // let div3 = document.createElement("div");
    // div3.classList.add("div3");
    div1.append(title, ul, bottom);
    // middle.append(ul);
    // div3.append(div1);
    bottom.append(plusIcon, del);


    cards.push(div1);
    console.log(cards);
    display(cards);


}

function showItemForm(tag) {
    document.querySelector("#itemForm").style.visibility = "visible";
    document.querySelector("#addItem").addEventListener("click", function m1(event) {
        event.preventDefault();

        let li = document.createElement("li");

        li.innerText = document.querySelector("#itemName").value;
        tag.append(li);
        li.classList.add("Formlist");

        // adding logic to button of mark as done
        let markssdone_button = document.createElement("button");
        markssdone_button.innerHTML = "Mark as done";
        markssdone_button.type = "mark_as_done";
        markssdone_button.name = "mark_asD";
        markssdone_button.classList.add("mark_as_done");
        li.append(markssdone_button);
        markssdone_button.addEventListener("click", function markasdone(event) {
            event.preventDefault();
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
            markssdone_button.style.cursor = "not-allowed";
            // markssdone_button.style.opacity = "0.2";

        });

        document.querySelector("#itemForm").style.visibility = "hidden";
        document.querySelector("#addItem").removeEventListener("click", m1);
        console.log("Add Button is Pressed");
        //how to remove a event listner

        document.querySelector("nav").style.opacity = "100%";
        document.querySelector("#listForm").style.opacity = "100%";



    });
}








function display(cards) {
    let lists = document.querySelector("#lists");

    lists.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        lists.appendChild(cards[i]);
    }
}

// list.appendChild(div1);

// div1.append(title, del, plusIcon);