/* Declare variable */
var nameInput = document.querySelector("#name");
var birthdayInput = document.querySelector("#date");

var fullNameOutput = document.querySelector("#nameOutput");
var ageInput = document.querySelector("#ageOutput");
var themeInput = document.querySelector("#themeOutput");
var skillsInput = document.querySelector("#skillsOutput");

/* Right display */
nameInput.addEventListener("focus", () => {
    if (nameInput.value === "") fullNameOutput.innerText = "Hello there! What's your name?";
});

nameInput.addEventListener("blur", () => {    
    var nameTextField = nameInput.value;

    nameTextField === '' ?
        fullNameOutput.innerText = "Please tell me your name. I wanna be your friend." :
        fullNameOutput.innerText = `Hi, ${nameTextField}!`;    
});

birthdayInput.addEventListener("focus", () => {
    if (birthdayInput.value === "") ageInput.innerText = "Lemme guess, your age is...";

});

birthdayInput.addEventListener("blur", (birthDate) => {
    var splitDate = birthDate.target.value.split("-");
    if (birthdayInput.value === '') {
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
var rightPanel = document.querySelector("#rightPanel");

light.onclick = () => {    
    rightPanel.classList.remove("bg-dark", "text-white");
    rightPanel.classList.add("bg-light", "text-dark");
    themeInput.innerText = "You choose Light Mode!";
}

dark.onclick = () => {
    rightPanel.classList.remove("bg-light", "text-dark");
    rightPanel.classList.add("bg-dark", "text-white");
    themeInput.innerText = "You choose Dark Mode!";
}

/* Skills */
var htmlButton = document.querySelector("#html");
var cssButton = document.querySelector("#css");
var javascriptButton = document.querySelector("#javascript");

let leftPanel = htmlButton.parentNode;
let rightPanelBody = document.querySelector("#rightPanelBody");

/* Initial state */
let htmlChecked = false;
let cssChecked = false;
let javascriptChecked = false;


/* Skills button click */
let btnChosenClick = (btnChoose, btnChecked) => {
    btnChoose.onclick = () => {
        if (btnChecked === false) {
            rightPanelBody.appendChild(btnChoose);
            btnChecked = true;
            /* Hover red button */
            btnChoose.onmouseover = function() {
                this.classList.remove("btn-success");
                this.classList.add("btn-danger");
            }
                btnChoose.onmouseout = function() {
                this.classList.remove("btn-danger");
                this.classList.add("btn-success");
            }
        } else {
            /* Return to left panel */
            leftPanel.appendChild(btnChoose);
            btnChecked = false;
        }
    }
}

/* HTML Button */
btnChosenClick(htmlButton,htmlChecked);

/* CSS Button */
btnChosenClick(cssButton,cssChecked);

/* Javascript Button */
btnChosenClick(javascriptButton,javascriptChecked);
