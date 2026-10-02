
const button=document.getElementById("videoBtn")
const videoCont=document.getElementById("videoCont")
button.onclick=function(){
    if(videoCont.style.display=="none"){
        videoCont.style.display = "block"
    }else{
                videoCont.style.display="none"

    }
 }

 

 let users = JSON.parse(localStorage.getItem("users")) || []
let editIndex = -1

function displayUsers() {
  const tableBody = document.getElementById("tableBody")
  tableBody.innerHTML = ""

  users.forEach((user, idx) => {
    tableBody.innerHTML += `
      <tr>
        <td>${idx + 1}</td>
        <td>${user.name}</td>
        <td>${user.TravelHistory}</td>
        <td>${user.Degree}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editData(${idx})">
            Edit
          </button>

          <button class="btn btn-danger btn-sm" onclick="deleteData(${idx})">
            Delete
          </button>
        </td>
      </tr>
    `
  })
}

displayUsers() 


function addUser() {
  const name = document.getElementById("name").value.trim()
  const TravelHistory = document.getElementById("TravelHistory").value
  const Degree = document.getElementById("Degree").value.trim()

  if (name === "" || TravelHistory === "" || Degree === "") {
    alert("Please add name, TravelHistory and Degree")
    return
  }

  const user = {
    name,
    TravelHistory,
    Degree
  }

   if (editIndex !== -1) {
    users[editIndex] = user
    editIndex = -1

    document.querySelector(".btn-success").textContent = "Add"
  } 
  
   else {
    users.push(user)
  }

  saveUser()
  displayUsers()
  clearInputs()
}


function editData(idx) {
  const user = users[idx]

  document.getElementById("name").value = user.name
  document.getElementById("TravelHistory").value = user.TravelHistory
  document.getElementById("Degree").value = user.Degree

  editIndex = idx

  document.querySelector(".btn-success").textContent = "Update"
}


function deleteData(idx) {
  users.splice(idx, 1)

  saveUser()
  displayUsers()

   editIndex = -1
  document.querySelector(".btn-success").textContent = "Add"

  clearInputs()
}


function saveUser() {
  localStorage.setItem("users", JSON.stringify(users))
}


function clearInputs() {
  document.getElementById("name").value = ""
  document.getElementById("TravelHistory").value = ""
  document.getElementById("Degree").value = ""
}





// let users = JSON.parse(localStorage.getItem("users")) || []

// function displayUsers() {
//   const tableBody = document.getElementById("tableBody")
//   tableBody.innerHTML = ""

//   users.forEach((user, idx) => {
//     tableBody.innerHTML += `
//       <tr>
//         <td>${idx + 1}</td>
//         <td>${user.name}</td>
//         <td>${user.TravelHistory}</td>
//         <td>${user.Degree}</td>
//         <td>
//           <button class="btn btn-warning btn-sm" onclick="editData(${idx})">Edit</button>
//           <button class="btn btn-danger btn-sm" onclick="deleteData(${idx})">Delete</button>
//         </td>
//       </tr>
//     `
//   })
// }
// displayUsers()

// function addUser() {
//   const name = document.getElementById("name").value.trim()
//   const TravelHistory = document.getElementById("TravelHistory").value
//   const Degree = document.getElementById("Degree").value.trim()

//   if (name === "" || TravelHistory === "" || Degree === "") {
//     alert("please add name, TravelHistory and Degree")
//     return
//   }

//   const user = { name, TravelHistory, Degree }
//   users.push(user)
//   saveUser()
//   displayUsers()

//   document.getElementById("name").value = ""
//   document.getElementById("TravelHistory").value = ""
//   document.getElementById("Degree").value = ""
// }

// function deleteData(idx) {
//   users.splice(idx, 1)
//   saveUser()
//   displayUsers()
// }

// function saveUser() {
//   localStorage.setItem("users", JSON.stringify(users))
// }




const images = document.getElementById("images")
const butt = document.getElementById("butt")
let show=false
butt.onclick = function(){
  if(!show){
  const img1 = document.createElement("img")
  const img2 = document.createElement("img")
  const img3 = document.createElement("img")
  
  img1.src ="irbid-images/img1.jpeg"
  img1.style.width="250px"
  img1.style.height="250px"
  img2.src ="irbid-images/img2.jpeg"
  img2.style.width="250px"
  img2.style.height="250px"
   img3.src ="irbid-images/umqais header.jpeg"
  img3.style.width="250px"
  img3.style.height="250px"
  images.appendChild(img1)
  images.appendChild(img2)
  images.appendChild(img3)
show=true  
}else{
  images.textContent=""
  show=false
}


}