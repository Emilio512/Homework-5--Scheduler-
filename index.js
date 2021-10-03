

// Created variable for moment function and used moment.js to display current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// Created variables for buttons and added user input 
var textAreaEl = $('textarea');
var saveBtn = $(".saveBtn");
saveBtn.on("click", userInput);
// This function stores user input into local storage
function userInput() {
    var input = $(this).siblings("textarea").val();
    var key = $(this).parents().attr("id");
    console.log(input);
    localStorage.setItem(key, input);
    return;
} 
// This function below is grabbing the parrents with attribute "id" an dcreating a for loop to store data
var key = $(this).parents().attr("id");
$(document).ready(function() {
    $(".row").each(function() {
        for (var i = 9; i <=17; i++){
            $("#"+i).children("textarea").val(localStorage.getItem(i))
        }
    })
})



// This is creating variables for time blocks
var currentHour = moment().hour();
console.log(currentHour)


function colors() {
   
    $(".time-block").each(function() {
        var userHour = $(this).parents().attr("id");
        console.log(userHour)
        console.log(this)
        if (userHour < currentHour) {
            $(this).addClass("past")
        } else if (userHour > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
    })
}
colors();