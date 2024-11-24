// TODO List sample with API

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

// Table API

// To test if working using console.log from inspect
// fetch("test.json")          // to attach the test.json file on the folder
fetch("https://jsonplaceholder.typicode.com/users")         
.then( response => response.json())
.then(result => {
    result.forEach(user => {
        console.log(user);
    })
})

// Output : All users from the postman GET "https://jsonplaceholder.typicode.com/users"
// It will shows the output frm the inspect-console