const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
alert(name);
let resumeData=JSON.parse(localStorage.getItem("resume_data"));
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

person=resumeData[i]
//for skill we use a foor loop
for(let i=0;i<skill.length;i++){
  document.getElementById("skill").innerHTML=person.skill[i];
  console.log(skill[i]);
}
for(i=0;i<=projects.length;i++){
document.getElementById("title").innerHTML=person.projects[i].title;
document.getElementById("abstract").innerHTML=person.projects[i].abstract;
}
}
}