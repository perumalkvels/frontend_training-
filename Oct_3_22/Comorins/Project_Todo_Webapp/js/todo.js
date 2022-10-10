

//..............Using Local Variable .............
 if(!localStorage.getItem("todo")){

    localStorage.setItem("todo",JSON.stringify([]));
    alert("New LocalStorage is Created");

}
    let list=JSON.parse(localStorage.getItem("todo"));

     function addItem(){

       let item = document.getElementById("todo_input").value;
       if(item!=="")
       {
        list.push(item);
        localStorage.setItem("todo",JSON.stringify(list));
       }
        document.getElementById("todo_input").value="";
        display();
    }

    function display(){
        let element="";
        let local_list=JSON.parse(localStorage.getItem("todo"));    
        for(i=0;i<local_list.length;i++){
            element= element + "<li>"+ local_list[i] +"<button id='controlbtn' onclick='removeitem("+i+")' ondblclick='removeitem()'>remove</button>"+ "</li>";
        }
        document.getElementById("todo_list").innerHTML = element;
        
    }
    display(); 

 function removeitem(i){
        let list_new=JSON.parse(localStorage.getItem("todo"));
        console.log(i); 
        list_new.splice(i,1)
        localStorage.setItem("todo", JSON.stringify(list_new));
        console.log(list_new);
        display();
    }
























    //................ In Normal Way ..................
// let list=[];

// function addItem()
// {
//     let item = document.getElementById("todo_input").value;
//     list.push(item);
//     display();
//     document.getElementById("todo_input").value="";
// }
// function display()
// {   
//     let element="";
// ....     let list_arr = document.getElementByItem("list");
//     for(i=0;i<list_arr.length;i++){
//         element= element + "<li>" +  list_arr[i] + "</li>" ;
//     }
//     document.getElementById("todo_list").innerHTML=element;
// }
