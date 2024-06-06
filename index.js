let users = [
    ['user1', 'admin', 'microondas123'],
    ['user2', 'noc1', 'gilat123']
]


function elementExists(element, pos) {
    for (let i = 0; i < users.length; i++) {
        if (element === users[i][pos]) {
            return true
        }
        
    }
    return false
}


// shows the books we added in the box 
function loginToUser(e){
    e.preventDefault();
    const userName = document.querySelector("#username").value;
    let existElementUsername = elementExists(userName, 1);

    const password = document.querySelector("#password").value;
    let existElementPassword = elementExists(password, 2);

    if (userName != "" && password != "") {
        if (existElementUsername == true && existElementPassword == true) {


            const div = document.getElementById("list-container");
            const h3 = document.createElement("h3");
            const lastChild = div.lastChild;
            div.removeChild(lastChild)
            h3.textContent = "Successful login";
            div.appendChild(h3)
        } else {
            const div = document.getElementById("list-container");
            const p = document.createElement("p");
            const lastChild = div.lastChild;
            div.removeChild(lastChild)
            p.textContent = "Login failed";
            div.appendChild(p)
        }
    } else {
        alert("You have not entered the requested values.")
    }  
    
}


const addBook = document.getElementById("login")

addBook.addEventListener("click", loginToUser)

