const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'FIYOC'
});
// connection.connect((error) => {
//     if(error) {
//         throw error;
//         return;
//     }
//     console.log("Chad");
// })

let data = []
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM CONTRIBUTORS", function (err, result, fields) {
      if (err) throw err;
      data = result;
      return;
    });
});

console.log(data);
for(let i of data) {
    console.log(i['username']);
}
console.log('hi');
/*
let input = document.getElementById("search-box");
//Creating the array with company names for searching
input.addEventListener("keyup", (e) => {
   removeElements()
   for (let i of companyArray) {
       if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""
        ) {
           let listItem = document.createElement("li")

           listItem.classList.add("list-items")
           listItem.style.cursor = "pointer"
           listItem.setAttribute("onclick", "displayNames('" + i+ "')")

           let word = "<b>" + i.substr(0, input.value.length) + "</b>"

           word += i.substr(input.value.length);
           console.log(word)

           listItem.innerHTML = word
           document.querySelector(".list").appendChild(listItem)
           input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              console.log("okay");
              let details = document.querySelector("#details");
              let cont1 = arr[0][0].get("login");
              let cont2 = arr[1][0].get("login");
              let cont3 = arr[2][0].get("login");
              let displayStr = "The top contributors are: " + cont1+", "+cont2+", "+cont3 + "The no. of contributions are coming soon";
              details.innerHTML = displayStr;
            }
          });
        }
    }
});
*/