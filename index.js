console.log("good morning");

fetch("http://localhost:3000/employees")
.then((res) => res.json())
.then((employ) =>{ console.log(employ);




const table = document.getElementById("table-back");
table.innerHTML = "";
 
    employ.forEach((employ) => {
    var people = table.insertRow();
    var slno = people.insertCell(); 
    slno.innerHTML = "01";

    var name = people.insertCell();
    name.innerHTML = employ.firstName +" "+ employ.lastName;

    var email = people.insertCell();
    email.innerHTML = employ.email;

    var phone = people.insertCell();
    phone.innerHTML = employ.phone;

    var gender = people.insertCell();
    gender.innerHTML = employ.gender;

    var state = people.insertCell();
    state.innerHTML = employ.state;

    var country = people.insertCell();
    country.innerHTML = employ.country;

    var dot = people.insertCell(); 
    dot.innerHTML = "...";
});

})


