

fetch("http://localhost:3000/employees")
.then((res) => res.json())
.then((employ) =>{ console.log(employ);




const table = document.getElementById("table-back");
table.innerHTML = "";
 
var i=1;
    employ.forEach((employ) => {
    var people = table.insertRow();
    var slno = people.insertCell(); 
    slno.innerHTML = i;
    

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
    dot.innerHTML = `<button class="dotted-icon" onclick = "button(event)"><i class="fa-solid fa-ellipsis"></i></button>
    <div id="last">
        <button class="action" onclick="view();"><i class="fa fa-sharp fa-light fa-eye" id="buttonDropdown_action"></i>view</button>
        <button class="action" onclick="edit();"><i class="fa fa-sharp fa-light fa-pen" id="buttonDropdown_action"></i>edit</button>
        <button class="action" onclick="delete()";><i class="fa fa-sharp fa-light fa-trash" id="buttonDropdown_action"></i>delete</button>
        </div>` 
    i++;
}); 

})
function button(){
    document.querySelector('#last').style.visibility = "visible";
}


