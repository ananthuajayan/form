// function validate(){
//     var firstName = document.getElementById("firstname").value;
//     var lastname = document.getElementById("lastName").value;
//     var email = document.getElementById("email").value;
//     var number = document.getElementById("number").value;
//     var qualifications = document.getElementById("qualifications").value;
//     var address = document.getElementById("address").value;
//     // FIRSTNAME 
//     var fnameRegx =  (/^[A-Za-z]/);
//     if(fnameRegx.test(firstName))
//     {
//         // alert("valid username");
//         document.getElementById("invalid").style.visibility= "hidden";
//         document.getElementById("firstname").style.border= "1px solid #B6BBC7";
//     }
//     else
//     {
//         // alert("invalid username");
//         document.getElementById("invalid").style.visibility= "visible";
//         document.getElementById("fname").style.border= "solid 3px red";
//     }
//   // SECONDNAME
//   var snameRegx =  (/^[A-Za-z]/);
//   if(snameRegx.test(lastname))
//   {
//       // alert("valid username");
//       document.getElementById("linvalid").style.visibility= "hidden";
//       document.getElementById("lastName").style.border= "1px solid #B6BBC7";
//   }
//   else
//   {
//       // alert("invalid username");
//       document.getElementById("linvalid").style.visibility= "visible";
//       document.getElementById("lastName").style.border= "solid 3px red";
//   };
//     // EMAIL
//     var emailRegx =  /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
//     // var emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(emailRegx.test(email))
//     {
//         // alert("valid username");
//         document.getElementById("emailinvalid").style.visibility= "hidden";
//         document.getElementById("email").style.border= "1px solid #B6BBC7";
//     }
//     else
//     {
//         // alert("invalid username");
//         document.getElementById("emailinvalid").style.visibility= "visible";
//         document.getElementById("email").style.border= "solid 3px red";
//     }  ;
//     // /MOBILE NUMBER
//     var phoneRegx = /^[7-9][0-9]{9}$/;
//     // var phoneRegx = /^\d{10}$/;
//     if(phoneRegx.test(number))
//     {
//         document.getElementById("phoneinvalid").style.visibility= "hidden";
//         document.getElementById("number").style.border= "1px solid #B6BBC7";
//     }
//     else
//     {
//         document.getElementById("phoneinvalid").style.visibility= "visible";
//         document.getElementById("number").style.border= "solid 3px red";
//     }
//     // DATA OF BIRTH
//     // qualification
//     var qulificationRegx = (/^[A-Za-z0-9]/);
//     if(qulificationRegx.test(qualifications))
//     {
//        document.getElementById("qualificationinvalid").style.visibility= "hidden";
//        document.getElementById("qualifications").style.border= "1px solid #B6BBC7";
//     }
//     else
//     {
//         document.getElementById("qualificationinvalid").style.visibility= "visible";
//         document.getElementById("qualifications").style.border= "solid 3px red";
//     }
//     var addressRegx = (/^[A-Za-z0-9]/);
//     if(addressRegx.test(address))
//     {
//         document.getElementById("addressinvalid").style.visibility= "hidden";
//         document.getElementById("address").style.border= "1px solid #B6BBC7";
//     }
//     else
//     {
//         document.getElementById("addressinvalid").style.visibility= "visible";
//         document.getElementById("address").style.border= "solid 3px red";
//     }
//   }
// const form = document.getElementById('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validate();
//     const salutation = document.getElementById('salutation').value;
//     console.log(salutation);
//     const firstName = document.getElementById('fname').value;
//     const lastName = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('number').value;
//     // const dob = document.getElementById('dob').value;
//     const gender = document.getElementsByName('gender');
//     var Gender;
//     for(var i = 0; i < gender.length; i++ ){
//         if(gender[i].checked){
//             Gender = gender[i].value;
//         }
//     };
//     const qualifications = document.getElementById('qualifications').value;
//     const city = document.getElementById('city').value;
//     const state = document.getElementById('state').value;
//     const country = document.getElementById('countries').value;
//     console.log(country);
//     const address = document.getElementById('address').value;
//     var date_picker=document.getElementById("dob").value;
//     // alert('Date:'+date_picker+"formatted:"+changeformat(date_picker));
//     var dob = changeformat(date_picker);
//     console.log(dob);
// function changeformat(val){
//     const myArray=val.split("-");
//     let year = myArray[0];
//     let month = myArray[1];
//     let day = myArray[2];
//     let formatteddate = day + "-" + month + "-" + year;
//     return formatteddate;
// }
//     const user = {
//         salutation: salutation,
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         phone: phone,
//         dob: dob,
//         gender: Gender,
//         qualifications: qualifications,
//         city: city,
//         state: state,
//         country: country,
//         address: address,
//     }
//     fetch("http://localhost:3000/employees", {
//         method: 'POST',
//         headers: {
//             'content-type':'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data);
//         //  window.location.href = 'employee.html';
//     })
// })





















