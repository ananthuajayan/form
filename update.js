function editDetails(id){
    alert(id);
console.log(id);
fetch(`http://localhost:3000/employees/${id}`,{
method:"get",   
})
.then((res) => res.json())   
.then((employ) =>{console.log(employ); 

    document.getElementById("edit-salu").value = employ.salutation;
    document.getElementById("edit-first").value = employ.firstName;
    document.getElementById("edit-second").value = employ.lastName;
    document.getElementById("edit-email").value = employ.email;
    document.getElementById("edit-phone").value = employ.phone;
    document.getElementById("edit-date").value = employ.dob;
    document.getElementById("edit-quali").value = employ.qualifications;
    document.getElementById("edit-country").value = employ.country;
    document.getElementById("edit-state").value = employ.state;
    document.getElementById("edit-city").value = employ.city;
    document.getElementsByName("flexRadioDefault").value = employ.gender;
    document.getElementById("edit-adress").value = employ.address;  
    document.getElementById("edit-pin").value = employ.pin;  
})


//form updation starts here.....

const formUpdation = document.getElementById('edit-form');
formUpdation.addEventListener('submit',(e)=>{
    alert("employee updated succesfuly");
    e.preventDefault(); 
    // console.log(formUpdation);
    
    let formupd = {
        salutation:document.getElementById('edit-salu').value,
        firstName:document.getElementById('edit-first').value, 
        lastName:document.getElementById('edit-second').value, 
        email:document.getElementById('edit-email').value, 
        phone:document.getElementById('edit-phone').value, 
        dob:document.getElementById('edit-date').value,
        gender:document.getElementsByName('flexRadioDefault').value, 
        address :document.getElementById('edit-adress').value, 
        country:document.getElementById('edit-country').value, 
        city:document.getElementById('edit-city').value, 
        state:document.getElementById('edit-state').value,
        qualifications:document.getElementById('edit-quali').value,
        pin:document.getElementById('edit-pin').value,
        username:document.getElementById('edit-username').value,
        password:document.getElementById('edit-password').value
        
    }
    console.log(formupd);
    fetch(`http://localhost:3000/employees/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(formupd),
    }
)
.then((res)=>res.json())
.then(employ => {console.log(employ);})
    


})
}


