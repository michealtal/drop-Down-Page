const dataBase = [
    {
    name:"Ryan",
    country:"Nigeria",
    profilePic:'url("images/mypic.jpg")'
    },
    {
    name:"Ignjat Petkovic",
    country:"Lebane, Serbia",
    profilePic:"images/mypic.jpg"
    },
    {
    name:"Ode Teige ",
    country:"NewYork, United Kingdom",
    profilePic:"images/mypic.jpg"
    },
    {
    name:"Mathais Bourgeio",
    country:"Suryapet, india",
    profilePic:"images/mypic.jpg"
    }
]


const result = document.getElementById("result");
const filter = document.getElementById("filter"); 
const listItems = [];

// here we want to listen to what the user is typing 
filter.addEventListener("input", (e) => filterData(e.target.
    value))

    // it can also be treated as user. forEach((user) => {})
    dataBase.forEach((user) => {
    const li = document.createElement("div")


    listItems.push(div);
    div.innerHTML = `
    <img src="${user-profilePic}" alt="${user.name}">
    <div class="user-info">
    <h3>${user.name}<h3>
    <p> ${user.country}</p>
    </div>
    `;
    result.appendChild(li);
});

// this function perform the filter users based on the name or country

function filterData(searchTerm){
 listItems.forEach((item) => {
    if (item.innerText.toLowercase().includes(searchTerm.toLowercase())){
        item.classList.remove("hide");
    }else {
        item.classList.add("hide");
    }
    
 });
}