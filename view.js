let para = new URLSearchParams(document.location.search);
let id = para.get('id');
console.log(id); 



function  detailsEmployee(id) {
    fetch(`http://localhost:3000/employees/${id}`, {
        method:"GET",
    })
    .then(res => res.json()) 
    .then(employe => {
        console.log(employe);
        const employview = document.getElementById("employee-details");
        employview.innerHTML = ` 
        
        <div class="sub-deletion-form">
        <div class="background">
          <img src="img/Background.png" alt="">
        </div>
          <div class="employee-img">
            <img src="img/kannadi2.png" alt="">
          </div>
      </div>

      <div class="employee-name">
      <h5>${employe.firstName +" "+ employe.lastName}</h5>
      <p>${employe.email}</p>
    </div>
              <div class="rack">
              <div class="row sec">
                <div class="col form-coloumn">
                  <h6>Gender</h6>
                  <h5>${employe.gender}</</h5>
                </div>
                <div class="col form-coloumn">
                  <h6>Age</h6>
                  <h5>25</h5>
                </div>
                <div class="col form-coloumn">
                  <h6>Date of Birth</h6>
                  <h5>${employe.dob}</</h5>
                </div>
              </div>
              <div class="row sec">  
                <div class="col form-coloumn">
                  <h6>Mobile Number</h6>
                  <h5>${employe.phone}</h5>
                </div>
                <div class="col form-coloumn">
                  <h6>Qualification</h6>
                  <h5>${employe.qualifications}</h5>
                </div>
              </div>
              <div class="row sec">
                <div class="col form-coloumn">
                  <h6>Adress</h6>
                  <h5>${employe.address}</h5>
                </div>
                <div class="col form-coloumn">
                  <h6>Username</h6>
                  <h5>${employe.username}</h5>
                </div>
              </div>
            </div>

           

        `
    })
    
    }

detailsEmployee(id) ;

// function ageCalculator() {
//   var userinput = document.getElementById("inputdate4").value;
//   var dob = new Date(userinput);
//   if(userinput==null || userinput=='') {
//     document.getElementById("message").innerHTML = "**Choose a date please!";  
//     return false; 
//   } else {
  
//   //calculate month difference from current date in time
//   var month_diff = Date.now() - dob.getTime();
  
//   //convert the calculated difference in date format
//   var age_dt = new Date(month_diff); 
  
//   //extract year from date    
//   var year = age_dt.getUTCFullYear();
  
//   //now calculate the age of the user
//   var age = Math.abs(year - 1970);
  
//   //display the calculated age
//   return document.getElementById("result").innerHTML =  
//            "Age is: " + age + " years. ";
//   }
// }