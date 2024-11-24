// callback function - function passed as an argument
// anonymous function - function without a function name
// arrow function - shorter way to write function
// .then only accept the callback function

// fetch("https://jsonplaceholder.typicode.com/todos")
// // must 2 fetch synthax(.then) (but the console.log is just optional), and the second .then that should hold/keep/hahawak ng mismong body whatever the API's return
// .then( response => {     //response is depende on you)      // 200 datas or 200 json objects from the postman.
//     console.log(response.json());       // input/add .json method to identify what you want to be a json. .. or to make it json to access by index
// }).then( data) => {             // this is the exact data you will use.  // data is just parameter name depends on you
//     console.log(data);
// }      

fetch("https://jsonplaceholder.typicode.com/todos")
.then( response => response.json() )            // response is just temporary variable then add .json to convert it to json object
.then(  result => {                             // and you can manipulate it in the second ".then"// whatever stored there on the response will go to "result" temporary variable  
    result.forEach( todo => {                   // todo is also temporary variable
        // console.log(todo.title)                     // .title is a part of the ao object from the ARRAY that get from the postman.
        document.querySelector("#taskArea").innerHTML += 
        `<div>                                                                      
                <button class="btn btn-light markButton">✅</button>        
                <span>${todo.title}</span>
                <button class="btn btn-sm btn-danger deleteButton">Remove</button>  
                 <hr>       
         </div>
            `;
    })
}
)
.catch(error => console.log('error', error));



document.querySelector("#addTask").addEventListener("click", () => {

    if (document.querySelector("#taskInput").value !== ""){                
        document.querySelector("#taskArea").innerHTML += 
        `<div>                                                                      
                <button class="btn btn-light markButton">✅</button>        
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

