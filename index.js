
//Q1. using promise .then .catch
//our logic 
//get data from server by fetch 
//recive it and convet it to easily deal with it 
//itereate on it and display it 
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
//getUsers();//promise - .then


//Q2  using asynch - await
async function getData2() {
    try {

        //get data from server by fetch 
        //recive it and convet it to easily deal with it 
        //iterate on it and display it 

        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json();

        //to display it catch the div exist in html then create div and ul for each user when you iterate on them(arr of users )
        const dv = document.getElementById("users");
        users.forEach(user => {
            const userDiv = document.createElement("div");
                userDiv.innerHTML=`
                <h2>${user.name}</h2>
                <ul>
                <li>username: ${user.name}</li>
                <li>email: ${user.email}</li>
                <li>phone: ${user.phone}</li>
                <li>company-name: ${user.company.name}</li>
                `;
                dv.appendChild(userDiv);
        });
    } catch (er) { console.log(er); }

}

getData2();//asynch await


