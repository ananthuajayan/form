var fName = document.forms["modal"]["firstname"];
var sName = document.forms["modal"]["secondname"];
var userName = document.forms["modal"]["username"];
var password = document.forms["modal"]["password"];
var email = document.forms["modal"]["inputEmail4"];
var phone = document.forms["modal"]["inputtel4"];
var date = document.forms["modal"]["inputdate4"];
var Adress = document.forms["modal"]["inputAddress"];
var qualifications = document.forms["modal"]["qualifications"];
var country = document.forms["modal"]["country"];
var state = document.forms["modal"]["state"];
var city = document.forms["modal"]["city"];
var pin = document.forms["modal"]["pin"];

function validate(){
    if(fName.value==""){
        fName.style.border = "1px solid red"
        fName.focus();
        return false;
    }else{
        fName.style.border = "1px solid green"
    }
    if(sName.value==""){
        sName.style.border = "1px solid red"
        sName.focus();
        return false;
    }
    else{
        sName.style.border = "1px solid green"
    }
    if(userName.value==""){
        userName.style.border = "1px solid red"
        userName.focus();
        return false;
    }  else{
        userName.style.border = "1px solid green"
    }
    if(password.value==""){
        password.style.border = "1px solid red"
        password.focus();
        return false;
    }  else{
        password.style.border = "1px solid green"
    }
    if(email.value==""){
        email.style.border = "1px solid red"
        email.focus();
        return false;
    }  else{
        email.style.border = "1px solid green"
    }
    if(phone.value==""){
        inputtel4.style.border = "1px solid red"
        inputtel4.focus();
        return false;
    }  else{
        phone.style.border = "1px solid green"
    }
    if(date.value==""){
        date.style.border = "1px solid red"
        date.focus();
        return false;
    }  else{
        date.style.border = "1px solid green"
    }

    if(Adress.value==""){
        Adress.style.border = "1px solid red"
        Adress.focus();
        return false;
    }  else{
        Adress.style.border = "1px solid green"
    }
   
    if(qualifications.value==""){
        qualifications.style.border = "1px solid red"
        qualifications.focus();
        return false;
    }  else{
        qualifications.style.border = "1px solid green"
    }
    if(country.value==""){
        country.style.border = "1px solid red"
        country.focus();
        return false;
    }  else{
        country.style.border = "1px solid green"
    }
    if(state.value==""){
        state.style.border = "1px solid red"
        state.focus();
        return false;
    }  else{
        state.style.border = "1px solid green"
    }
    if(city.value==""){
        city.style.border = "1px solid red"
        city.focus();
        return false;
    }  else{
        city.style.border = "1px solid green"
    }
    if(pin.value==""){
        pin.style.border = "1px solid red"
        pin.focus();
        return false;
    }  else{
        pin.style.border = "1px solid green"
    }


    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var name = document.getElementById('fName').value;
if(!regName.test(name)){
    alert('Invalid name given.');
}else{
    alert('Valid name given.');
}
}




// fetch("http://localhost:3000/employees")

var modal = document.getElementById("modal");


modal.addEventListener('submit', (e) => {
    e.preventDefault();

var salutation = document.getElementById('salutation').value;
//console.log(salutation);

var firstName = document.getElementById('firstname').value;
// console.log(firstName);

var secondName = document.getElementById('secondname').value;
// console.log(secondName);

var email = document.getElementById('inputEmail4').value;
// console.log(email);

var telephone = document.getElementById('inputtel4').value;
// console.log(telephone);

var Gender = document.getElementsByName('gender');
// console.log(gender);

for(i=0; i<Gender.length; i++ ) {

if(Gender[i].checked){
   var Gender = Gender[i].value;
}
}

// console.log(Gender);


var inputAdress = document.getElementById('inputAddress').value;
// console.log(inputAdress);

var country = document.getElementById('country').value;
// console.log(country);

var state = document.getElementById('state').value;
// console.log(state);

var city = document.getElementById('city').value;
// console.log(city)

var pin = document.getElementById('pin').value;
// console.log(pin);

var file = document.getElementById('file').value;
// console.log(file);

var qualifications = document.getElementById('qualifications').value;
// console.log(qualificatons)


var username = document.getElementById('username').value;
// console.log(qualificatons)

var password = document.getElementById('password').value;
// console.log(qualificatons)

var date = document.getElementById('inputdate4').value;
var inputdate4 = formatchange(date);
// console.log(date);


function formatchange(dob){
    const array=dob.split("-");
    let day=array[0];
    let month=array[1];
    let year=array[2];  

    
    let dateformat=year + "-" + month + "-" + day;
    return dateformat;
}


const staff={
    
    salutation:salutation,
    firstName:firstName,
    lastName:secondName,
    email:email,
    phone:telephone,
    dob:inputdate4,
    gender:Gender,
    address: inputAdress,
    country:country,
    state:state,
    city:city,
    pin:pin,
    qualifications:qualifications,
    username:username,
    password:password
 }

console.log(JSON.stringify(staff));

fetch("http://localhost:3000/employees",{
    method:'POST', headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(staff)
 })

.then(res => res.json())
.then((staff) =>{ console.log(staff);})
  
})

