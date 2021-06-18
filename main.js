/* Declare variable */
var nameInput = document.getElementById("name");
var birthdayInput = document.getElementById("date");

var fullNameOutput = document.getElementById("nameOutput");
var ageInput = document.getElementById("ageOutput");
var themeInput = document.getElementById("themeOutput");
var skillsInput = document.getElementById("skillsOutput");

/* Right display */
nameInput.addEventListener("focus", () => {
    fullNameOutput.innerText = "Hello there! What's your name?"
});

nameInput.addEventListener("blur", () => {    
    var nameTextField = document.getElementById("name").value;

    nameTextField === '' ?
        fullNameOutput.innerText = "Please tell me your name. I wanna be your friend." :
        fullNameOutput.innerText = `Hi, ${nameTextField}!`;    
});

birthdayInput.addEventListener("focus", () => {
    ageInput.innerText = "Lemme guess, your age is...";
});

birthdayInput.addEventListener("blur", (birthDate) => {
    var splitDate = birthDate.target.value.split("-");
    if (document.getElementById("date").value === '') {
        ageInput.innerText = "Would you mind entering your birthday?";
    } else {        
        
        var dateInput = new Date();
        var day = dateInput.getDate();
        var month = dateInput.getMonth() + 1; 
        var year = dateInput.getFullYear();
        var age;

        if (year > splitDate[0]){
            if (month < splitDate[1]){
                age = year - splitDate[0] - 1;
            } else if (month == splitDate[1]){
                day < splitDate[2] ? age = year - splitDate[0] - 1 : age = year - splitDate[0];
            } else {
                age = year - splitDate[0];
              }        
    }
        ageInput.innerText = `Your age is ${age}!`;    
    }
});

/* Toggle Light or Dark Mode */
light.onclick = function () {    
    document.getElementById("rightPanel").classList.remove("bg-dark", "text-white");
    document.getElementById("rightPanel").classList.add("bg-white", "text-dark");
    themeInput.innerText = "You choose Light Mode!";
}

dark.onclick = function () {
    document.getElementById("rightPanel").classList.remove("bg-white", "text-dark");
    document.getElementById("rightPanel").classList.add("bg-dark", "text-white");
    themeInput.innerText = "You choose Dark Mode!";
}

/* Skills */
var htmlButton = document.getElementById("html");
var cssButton = document.getElementById("css");
var javascriptButton = document.getElementById("javascript");
var skillButton = document.getElementsByTagName('button');

let leftPanel = htmlButton.parentNode;
let rightPanel = document.getElementById("rightPanel");

/* Initial state */
let htmlChecked = false;
let cssChecked = false;
let javascriptChecked = false;

/* HTML Button */
htmlButton.onclick = function () {
    if (htmlChecked === false) {
        rightPanel.appendChild(htmlButton);
        htmlChecked = true;
        /* Hover red button */
        htmlButton.onmouseover = function () {
            this.classList.remove("btn-success");
            this.classList.add("btn-danger");
        }
        htmlButton.onmouseout = function () {
            this.classList.remove("btn-danger");
            this.classList.add("btn-success");
        }
    } else {
        /* Return to left panel */
        leftPanel.appendChild(htmlButton);
        htmlChecked = false;
    }

}

/* CSS Button */
cssButton.onclick = function () {
    if (cssChecked === false) {
        rightPanel.appendChild(cssButton);
        cssChecked = true;

        /* Hover red button */
        cssButton.onmouseover = function () {
            this.classList.remove("btn-success");
            this.classList.add("btn-danger");
        }
        cssButton.onmouseout = function () {
            this.classList.remove("btn-danger");
            this.classList.add("btn-success");
        }
    } else {
        /* Return to left panel */
        leftPanel.appendChild(cssButton);
        cssChecked = false;
    }
}

/* Javascript Button */
javascriptButton.onclick = function () {

    if (javascriptChecked === false) {
        rightPanel.appendChild(javascriptButton);
        javascriptChecked = true;

        /* Hover red button */
        javascriptButton.onmouseover = function () {
            this.classList.remove("btn-success");
            this.classList.add("btn-danger");
        }
        javascriptButton.onmouseout = function () {
            this.classList.remove("btn-danger");
            this.classList.add("btn-success");
        }
    } else {
        /* Return to left panel */
        leftPanel.appendChild(javascriptButton);
        javascriptChecked = false;
    }
}