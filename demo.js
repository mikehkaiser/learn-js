// alert("Hello Coding Temple!")

hello.addEventListener("mouseenter", function(event){
    event.target.style.color="purple"
}
)

hello.addEventListener("mouseleave", function(event){
    event.target.style.color=""
})

var str1 = "Coding Temple"

var num1 = 5
var num2 = 10

var str2 = str1 + num1



function addNums(a,b){
    var result = a + b
    alert(result)
}

// addNums(num1, num2)

function changeHeading(){
document.getElementById("heading").innerHTML="Welcome to the Page"}

changeHeading();

function nameAge(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    document.getElementById("output").innerHTML=`${name} is ${age} years old`
}