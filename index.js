let users = [
    {
        username: 'admin',
        password: 'microondas123',
        tipo: 'administrador'
    },
    {
        username: 'noc1',
        password: 'gilat123',
        tipo: 'lector'
    }
]


function elementExists(user, pass) {
    for (let i = 0; i < users.length; i++) {
        if (user === users[i].username && pass === users[i].password) {
            return true
        }
        
    }
    return false
}

function addText(type, text) {
    const div = document.getElementById("list-container");
    const t = document.createElement(type);
    const lastChild = div.lastChild;
    div.removeChild(lastChild)
    t.textContent = text;
    div.appendChild(t)
}


// shows the books we added in the box 
function loginToUser(e){
    e.preventDefault();
    const userName = document.querySelector("#username").value;

    const password = document.querySelector("#password").value;
    const existElement = elementExists(userName, password);
    console.log(userName, password)

    if (userName != "" && password != "") {
        if (existElement) {

            addText("h3", "Successful login")
            
        } else {

            addText("p", "Login failed")
            
        }
    } else {
        alert("You have not entered the requested values.")
    }  
    
}


const addBook = document.getElementById("login")

addBook.addEventListener("click", loginToUser)

