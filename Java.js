// Applying script on Elements

const inputBox= document.getElementById("inputbox")
const listcontainer= document.getElementById("list-container")

// Writing script function with If and Else condition to create alert if user does not input any Any Task. (inputBox.Value= "":), it will allow user to add new task.

function AddTask(){
    if(inputBox.value === ''){
        alert("Please enter a task")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


// Writing JavaScript for click function.

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
}
   else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
}, false);


// Writing script for to save task

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

// Writing function to display data when opening the browser

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data") || "";
}
showTask();
