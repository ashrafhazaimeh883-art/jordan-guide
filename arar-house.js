// const view=document.getElementById("view")
// const video=document.getElementById("video")
// video.onclick=function(){
//     const vid=document.createElement("video")
//     vid.src="./"
//     vid.controls="true"
//     vid.autoplay="true"
    
// }
// const button=document.getElementById("videoBtn")
// const videoCont=document.getElementById("videoCont")
// button.addEventListener("click",function(){
//     if(videoCont.style.display==="none"){
//         videoCont.style.display="black"
//     }else{
//                 videoCont.style.display="none"

//     }
//  })
const button=document.getElementById("videoBtn")
const videoCont=document.getElementById("videoCont")
button.onclick=function(){
    if(videoCont.style.display=="none"){
        videoCont.style.display = "block"
    }else{
                videoCont.style.display="none"

    }
 }



//  let users = JSON.parse(localStorage.getItem("users")) ||[]

//  function displayUsers(){
//     const tableBody =document.getElementById("tableBody")
//     tableBody.innerHTML =""

//     users.forEach((user , idx) =>{
//         tableBody.innerHTML+=`
//         <tr>
//         <td>${idx + 1}</td>
//         <td>${user.name}</td>
//         <td>${user.TravelHistory}</td>
//         <td>${user.Degree}</td>
//         <td>
//        <button class="btn btn-warning btn-sm" onclick="editData(${idx})">Edit</buttn>
//        <button class="btn btn-danger btn-sm" onclick="editData(${idx})">Delete</buttn>
//         </td>




//         </tr>
        
        
        
//         `

//     });

//  }
//  displayUsers()

//  function addUser(){
//     const name = document.getElementById("name")
//     const TravelHistory = document.getElementById("TravelHistory")
//     const Degree = document.getElementById("Degree ")
//     if(name === "" || TravelHistory === "" || Degree === ""){
//         alert("please add name add TravelHistory and Degree")
//         return
//  }
//  const user ={
//     name,TravelHistory,Degree
//  }
//   users.push(users)
//  saveUser()
//  displayUsers()
// }
// function saveUser(){
//     localStorage.setItem("users",JSON.stringify(users))

// }


let users = JSON.parse(localStorage.getItem("users")) || [];

function displayUsers() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  users.forEach((user, idx) => {
    tableBody.innerHTML += `
      <tr>
        <td>${idx + 1}</td>
        <td>${user.name}</td>
        <td>${user.TravelHistory}</td>
        <td>${user.Degree}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editData(${idx})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteData(${idx})">Delete</button>
        </td>
      </tr>
    `;
  });
}
displayUsers();

function addUser() {
  const name = document.getElementById("name").value.trim();
  const TravelHistory = document.getElementById("TravelHistory").value;
  const Degree = document.getElementById("Degree").value.trim();

  if (name === "" || TravelHistory === "" || Degree === "") {
    alert("please add name, TravelHistory and Degree");
    return;
  }

  const user = { name, TravelHistory, Degree };
  users.push(user);
  saveUser();
  displayUsers();

  document.getElementById("name").value = "";
  document.getElementById("TravelHistory").value = "";
  document.getElementById("Degree").value = "";
}

function deleteData(idx) {
  users.splice(idx, 1);
  saveUser();
  displayUsers();
}

function saveUser() {
  localStorage.setItem("users", JSON.stringify(users));
}


// const images=document.getElementById("images")
// const button=document.getElementById("button")
// button.onclick=function(){
//   const img1=document.createElement("img")
//   img1.src = "./umqais imagesw"
// }
const images = document.getElementById("images")
const butt = document.getElementById("butt")
let show=false
butt.onclick = function(){
  if(!show){
  const img1 = document.createElement("img")
  const img2 = document.createElement("img")
  const img3 = document.createElement("img")
  
  img1.src ="irbid-images/بيت عرار الثقافي  img1.jpeg";
  img1.style.width="250px"
  img1.style.height="250px"
  img2.src ="irbid-images/بيت عرار الثقافي img2.jpeg";
  img2.style.width="250px"
  img2.style.height="250px"
   img3.src ="irbid-images/بيت عرار الثقافي img3.jpeg";
  img3.style.width="250px"
  img3.style.height="250px"
  images.appendChild(img1);
  images.appendChild(img2);
  images.appendChild(img3);
show=true  
}else{
  images.textContent=""
  show=false
}


}