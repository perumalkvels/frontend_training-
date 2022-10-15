
let foodList=JSON.parse(localStorage.getItem("food_list"));
let insertElement="";
for(let i=0;i<foodList.length;i++){

    insertElement = insertElement + "<div class='product-id col-lg-3 col-md-4 col-12' style='width: 18rem;' >" 
    +    "<div class='product-card card mb-3 ' id='"+ foodList[i].foodId +"'>"
    +    "<img id='food-img' src=' "+ foodList[i].foodImg +" alt='' class='' card-img-top>"
    +    "<div class='card-body product-card-body bg-danger text-white'>"
    +    "<h5 class='card-title' id='food-title'>"+ foodList[i].foodTitle +"</h5>"
    +    "<span class='badge badge-dark mb-2 mr-2 p-2 font-weight-normal' id='food-session'>"+ foodList[i].foodBrand+"</span>"
    +    "<span class='badge badge-dark p-2 mb-2 font-weight-normal' id='food-type'>"+foodList[i].foodType+"</span>"
    +    "<p class='card-text' id='food-description'>"+foodList[i].foodDes+ "</p><button onclick=addCart("+foodList[i].foodId+") class='font-weight-bold text-dark btn btn-light btn-block'>"
    +    "<i class='fa fa-external-link pr-3 aria-hidden='true'></i>Add to cart</button> </div>"+ "<div class='card-footer bg-dark text-white text-center'>"
    +    "<small class='h6' id='food-price' >Buy Now @<span>"+foodList[i].foodPrice+"</span>/-</small></div></div></div>"
   }
document.getElementById("foot-item").innerHTML=insertElement;

// function addCart(foodId){
//     let gotId=foodId;
//     console.log(gotId);
//     if(!localStorage.getItem("Cart-Items")){
//         localStorage.setItem("Cart-Items",JSON.stringify([]))
//         }
//     cartItemId = JSON.parse(localStorage.getItem("Cart-Items"));
//     cartItemUser=JSON.parse(localStorage.getItem("login_status"));
//    let kartData={
//     customer : cartItemUser.username,
    
// }
//     cardItem = cartItemId.push(gotId),
//     console.log(cartItemId);
//     localStorage.setItem("Cart-Items",JSON.stringify(kartData));
// }


function addCart(foodId){
    let gotId=foodId;
    console.log(gotId);
    if(!localStorage.getItem("Cart-Items")){
        localStorage.setItem("Cart-Items",JSON.stringify([]))
        }
    cartItemId = JSON.parse(localStorage.getItem("Cart-Items"));
 
    // user_name : JSON.parse(localStorage.getItem("login_status")),

    cartItemId.push(gotId);
    console.log(cartItemId);
    
    localStorage.setItem("Cart-Items",JSON.stringify(cartItemId));
}
