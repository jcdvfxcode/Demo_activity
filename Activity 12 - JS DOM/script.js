// callback function - function passed as an argument
// anonymous function - function without a function name
// arrow function - shorter way to write function


document.querySelector("#addTask").addEventListener("click", () => {

    if (document.querySelector("#taskInput").value !== ""){
        document.querySelector("#taskArea").innerHTML += 
        `<div>                                                                      
                <button class="btn btn-light markButton">✅Clickme!</button>        
                <span>${document.querySelector("#taskInput").value}</span>
                <button class="btn btn-sm btn-danger deleteButton">Remove</button>  
                 <hr>       
         </div>
            `;
             document.querySelector("#taskInput").value = "";
        }else{
            alert("Field cannot be empty!");
        }

        const markButtons = document.querySelectorAll(".markButton");
        markButtons.forEach((markButton)=>{
            markButton.addEventListener("click", (event) => {
                event.target.parentElement.lastELementChild.style = "text-decoration: line-through; font-weight: 900 color: green;";
                event.target.remove();
            });
        });
    
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach((deleteButton)=>{                 
    deleteButton.addEventListener("click", (event) => {            
        event.target.parentElement.remove();
        });
    });

        // target Event property

});

