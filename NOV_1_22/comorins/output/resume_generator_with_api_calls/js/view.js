const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
alert(name);
let resumeData=JSON.parse(localStorage.getItem("resume_data"));
$(document).ready(function () {

  $.ajax({

      type: "get",

      url: "http://karka.academy/api/action.php",

      data: {
          request: "get_resume_by_id",
          user: "peru",
          id:,
      },
      success: function (response) {

          var datas = JSON.parse(response);
          var details = datas.data;
          console.log(details);

          for (let i = 0; i < details.length; i++) {
              let array = JSON.parse(details[i].data);
              console.log(array.name);
              // id='get_res'
              let element = "<tr>"
                  + "<td scope='col'>" + details[i].id + "</td>"
                  + "<td scope='col'>" + array.name + "</td>"
                  + "<td scope='col'><button class='btn btn-success  text-white' type='button'  data-toggle='modal' data-target='#exampleModal' value="+array.name+" id='get_res'>Get Resume</button></td>"
                  + "<td scope='col'><button class='btn btn-danger text-white' id='del_resume' value=" + details[i].id + ">Delete</button></td>"
                  + "</tr>";

              $("#resume_list").append(element);
          }
          }
      }
  })
for(let i=0;i<resumeData.length;i++){
if(name==resumeData[i].name){
document.getElementById("name").innerHTML=resumeData[i].name;
document.getElementById("role").innerHTML=resumeData[i].role;
document.getElementById("mobile").innerHTML=resumeData[i].mobile;
document.getElementById("email").innerHTML=resumeData[i].email;
document.getElementById("address").innerHTML=resumeData[i].address;
document.getElementById("objective").innerHTML=resumeData[i].objective;

document.getElementById("occupation").innerHTML=resumeData[i].personal.occupatioName;
document.getElementById("dob").innerHTML=resumeData[i].personal.dob;
document.getElementById("maritalStatus").innerHTML=resumeData[i].personal.maritalStatus;
document.getElementById("bg").innerHTML=resumeData[i].personal.bloodGroup;
document.getElementById("language").innerHTML=resumeData[i].personal.language;

person=resumeData[i];
let element="";
//for skill we use a foor loop
for(let i=0;i<person.skill.length;i++){
  element=element+ "<li>"+ person.skill[i] +"</li>";
}
document.getElementById("skill").innerHTML=element;

let element1="";
for(let i=0;i<=person.hobbies.length;i++){
  element1=element1+ "<li>"+ person.hobbies[i] +"</li>";
}
document.getElementById("hobbies").innerHTML=element1;

for(i=0;i<=projects.length;i++){
document.getElementById("title").innerHTML=person.projects[i].title;
document.getElementById("abstract").innerHTML=person.projects[i].abstract;
}
}
}