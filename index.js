//Add your code here
let body =document.querySelector('body')
const  submitData = () => {
    let formData ={
        name:name,
        email: email
    }
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(d => { 
  
        let p = document.createElement('p') 
        p.textContent = d.id; 
        body.appendChild(p) 
    }  
        ) 
    .catch(err => { 
        let p1 = document.createElement('p') 
        let msg = "Unauthorized Access" 
        p1.textContent = msg 
        body.appendChild(p1) 
 
    }) 
  }; 
 
  submitData();



// function submitData (){
//     let userData ={
//         name:"jan",
//         email:"jan@jan.com"
//     }
    
//     return fetch('http://localhost:3000/users'),{
//         method: "POST",
//         headers:{
//             'content-type':"application/json",
//             Accept:"application/json",
//         },
//         body:JSON.stringify(userData)

//     }
//     .then(response => response.json)
//     .then(data =>{
//         console.log(data)
//     } )
//     .catch(error => {
//         console.log ("this is an error")
//     })

// }

// let listy = document.getElementById('listy');
// let userForm = document.getElementById('userdata')
// function submitData(){
//     let addUserData = (e)=>{
//        e.preventDefault();
//         const name = document.getElementById("username").value
//         const email = document.getElementById("email").value
//         const userDetails ={
//            name:name,
//            email:email,
//         }
//          fetch('http://localhost:3000/users'),{
//            method: "POST",
//            headers: {
//             "Content-Type": "application/json",
//            Accept: "application/json"
//            },
//            body: JSON.stringify(userDetails),
//        }
//         then(function (response){
//            return response.json();
//         })
//        .then(data => {
//         //    let id = data.id;
//         //    document.body.innerHTML += id;
//         //    data.forEach(i => {
//         //        let li = document.createElement('li')
//         //        li.innerHTML = `
//         //            <p>
//         //                <h4>Name: ${i.name}</h4>
//         //                <h6>EMAIL: ${i.email}</h6>
                       
//         //            </p>
//         //        `
//          //      listy.appendChild(li)
//            })
//         //}) 
//         .catch(error => {
//            const errorMessage = document.createElement('p');
//            errorMessage.innerHTML = `Unauthorized Access`;
//            document.body.appendChild(errorMessage);
//           });
//    }
//    userdata.addEventListener('submit',addUserData )
// }


