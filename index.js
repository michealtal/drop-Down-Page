const dataBase = [
  {
    name: "Ryan",
    country: "Nigeria",
    profilePic: "images/mypic.jpg",
  },
  {
    name: "Ignjat Petkovic",
    country: "Lebane, Serbia",
    profilePic: "images/mypic.jpg",
  },
  {
    name: "Ode Teige ",
    country: "NewYork, United Kingdom",
    profilePic: "images/mypic.jpg",
  },
  {
    name: "Mathais Bourgeio",
    country: "Suryapet, india",
    profilePic: "images/mypic.jpg",
  },
];

const result = document.getElementById("result");
const filter = document.getElementById("filter");
let listItems = [];

// here we want to listen to what the user is typing
filter.addEventListener("input", (e) => filterData(e.target.value));

// it can also be treated as user. forEach((user) => {})
dataBase.forEach((user) => {
  const div = document.createElement("div");
  div.className = "profile"

  div.innerHTML = `
  <img src="${user.profilePic}" alt="${user.name}">
  <div class="user-info">
  <h3>${user.name}<h3>
  <p> ${user.country}</p>
  </div>
  `;
  listItems.push(div);
  result.appendChild(div);
});

// this function perform the filter users based on the name or country

function filterData(searchTerm) {
   listItems.forEach((item) => {
      if (item.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())){
          item.classList.remove("hide");
      }else {
          item.classList.add("hide");
      }

   });
//   let result = dataBase.filter(data => {
//     return searchTerm === data.name
//   });
//   dataBase.includes
//   console.log(result);
}
