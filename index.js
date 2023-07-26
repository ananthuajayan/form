function remove(){
  document.getElementById("confirm-delete").style.visibility = "hidden";
}


function fetchEmp(){
  // alert("sdajdf");
fetch("http://localhost:3000/employees")
.then((res) => res.json())
.then((employ) =>{ console.log(employ);


 

const table = document.getElementById("table-back");
table.innerHTML = "";
var i=1;
    employ.forEach((employ) => {
    var id = employ.id;

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
    dot.innerHTML = `<div class="dropdown">
    <button class="btn  dotted-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <td class="dotted-icon"><i class="fa-solid fa-ellipsis"></i></td>
    
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="http://127.0.0.1:5501/view.html?id=${id}"><i class="fa fa-sharp fa-light fa-eye" id="buttonDropdown_action" ></i>view</a></li>
      <button type="button" class="btn click" data-bs-toggle="modal" data-bs-target="#exampleModa" onclick = "editDetails('${id}')"><i class="fa fa-sharp fa-light fa-pen" id="buttonDropdown_action"></i>edit</button>
      <li><button class="dropdown-item" onclick = "deletion('${id}')"><i class="fa fa-sharp fa-light fa-trash" id="buttonDropdown_action"></i>Delete</button></li>
    </ul>
    </div>` 
    i++;
}); 

})
}

function deletion(id){  
  document.getElementById('confirm-delete').style.visibility = "visible";
  var del=document.getElementById("del")
  var can = document.getElementById("can")
  del.addEventListener('click',()=>{
    fetch(`http://localhost:3000/employees/${id}`,{
      method:"DELETE"
    })
    fetchEmp();
    document.getElementById('confirm-delete').style.visibility = "hidden";
  })
  // can.addEventListener('click', ()=> {
  //   document.getElementById('confirm-delete').style.visibility = " hidden";
  // })
 
  }
 
  

  fetchEmp();
