
//Q1.
function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(result => result.json())
        .then(users => {
            const dv = document.getElementById("users");
            users.forEach(user => {
                let userDiv = document.createElement("div");
                userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <ul>
                    <li>user name: ${user.name}</li>
                    <li>email : ${user.email}</li>
                    <li>phone : ${user.phone}</li>
                    <li>company-name : ${user.company.name}</li>

                    </ul>
                    `;
                    dv.appendChild(userDiv);
            });
        }).catch(er => console.log(er))

}
getUsers();//promise - .then





