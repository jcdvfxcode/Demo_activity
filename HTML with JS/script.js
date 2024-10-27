
let name = "John Doe";

document.querySelector("#test").innerHTML = name;
document.querySelector("button").style.padding = "100px";
document.querySelector("button").style.backgroundColor = "red";

function testFunction(){
    confirm("Are you sure you want to?");
}

///////

let padding = "50px";

document.querySelector("button").style.padding = padding;


////
// anonymous function
document.querySelector("#btn").addEventListener("click", function(){            // recommended!!!!!
    paddingValue += 50;
    document.querySelector("button").style.paddingValue + "px";
}); 



// 
document.querySelector("#btn").addEventListener("keydown", function(){
    document.querySelector("#test").innerHTML = document.querySelector("#inpt").value;
});
