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
    })
    
    }

detailsEmployee(id) ;