
  
function validate(){
    var fName = document.getElementById("firstname").value;
    var regfName =  (/^[A-Za-z]/);
    if(regfName.test(fName)){
        document.getElementById("firstname").style.border= "1px solid green";
    }else{
        document.getElementById("firstname").style.border= "1px solid red";
        document.getElementById("firstname").focus();
        return false;

    }

    var sName = document.getElementById("secondname").value;
    var regsName =  (/^[A-Za-z]/);
    if(regsName.test(sName)){
        document.getElementById("secondname").style.border= "1px solid green";
    }else{
        document.getElementById("secondname").style.border= "1px solid red";
        document.getElementById("secondname").focus();
        return false;

    }

    var userName = document.getElementById("username").value;
    var  regusername = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})/;
    if(regusername.test(userName)){
        document.getElementById("username").style.border= "1px solid green";
    }else{
        document.getElementById("username").style.border= "1px solid red";
        document.getElementById("username").focus();
        return false;

    }
    
    var password = document.getElementById("password").value;
    if(password==""){
        document.getElementById("password").style.border= "1px solid red";
        document.getElementById("password").focus();
        return false;
    }else{
        document.getElementById("password").style.border= "1px solid green";
        
    }

    var email = document.getElementById("inputEmail4").value;
    var regemail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if(regemail.test(email)){
        document.getElementById("inputEmail4").style.border= "1px solid green";
    }else{
        document.getElementById("inputEmail4").style.border= "1px solid red";
        document.getElementById("inputEmail4").focus();
        return false;

    }

    var phone = document.getElementById("inputtel4").value;
    var regphone = /^[7-9][0-9]{9}$/;
    if(regphone.test(phone)){
        document.getElementById("inputtel4").style.border= "1px solid green";
    }else{
        document.getElementById("inputtel4").style.border= "1px solid red";
        document.getElementById("inputtel4").focus();
        return false;

    }

    var date = document.getElementById("inputdate4").value;
    if(date==""){
        document.getElementById("inputdate4").style.border= "1px solid red";
        document.getElementById("inputdate4").focus();
        return false;
    }else{
        document.getElementById("inputdate4").style.border= "1px solid green";
        
    }

    var Address = document.getElementById("inputAddress").value;
    var regaddress = (/^[A-Za-z0-9]/);
    if(regaddress.test(Address)){
        document.getElementById("inputAddress").style.border= "1px solid green";
    }else{
        document.getElementById("inputAddress").style.border= "1px solid red";
        document.getElementById("inputAddress").focus();
        return false;

    }

    var qualifications = document.getElementById("qualifications").value;
    var regqulification = (/^[A-Za-z0-9]/);
    if(regqulification.test(qualifications)){
        document.getElementById("qualifications").style.border= "1px solid green";
    }else{
        document.getElementById("qualifications").style.border= "1px solid red";
        document.getElementById("qualifications").focus();
        return false;

    }

    var city = document.getElementById("city").value;
    var regcity =  (/^[A-Za-z]/);
    if(regcity.test(city)){
        document.getElementById("city").style.border= "1px solid green";
        
    }else{
        document.getElementById("city").style.border= "1px solid red";
        document.getElementById("city").focus();
        return false;
    }

    var pin = document.getElementById("pin").value;
    if(pin==""){
        document.getElementById("pin").style.border= "1px solid red";
        document.getElementById("pin").focus();
        return false;
    }else{
        document.getElementById("pin").style.border= "1px solid green";
        
    }
    // refreash();
}




// fetch("http://localhost:3000/employees")

var modal = document.getElementById("modal");


modal.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert("employee added succesfully")
    

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
fetchEmp();
})

//==============================================================================

