let button = document.querySelector(".toggle");
let list = document.querySelector(".nav_bar");
let linkActive = document.querySelectorAll(".nav_list a");
// linkActive.forEach((e)=>{
//   e.addEventListener("click",function(elem){
//     linkActive.forEach((el)=>{
//       el.classList.remove("active");
//     });
//     elem.currentTarget.classList.add("active");
//   });
// });

button.addEventListener("click", (e) => {
  e.stopPropagation();
  list.classList.toggle("show");
});
document.addEventListener("click",(e) => {
  
  if(e.target !== button){
    list.classList.remove("show");
  }
});
// Our Menu
  const listMenu = document.querySelectorAll(".list_menu li");
  const menuContent = document.querySelectorAll(".menu_content > div");
  let divsArray = Array.from(menuContent);
  listMenu.forEach((ele) =>{
    ele.addEventListener("click", function(e){
      listMenu.forEach((el) => {
        el.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });




  filterObject("all");
  function filterObject(dv){
    let x,i;
    x = document.getElementsByClassName("menu_box");
    if(dv == "all") dv = " ";
    for(i = 0; i < x.length; i++){
      removeClass(x[i],"show");
      if(x[i].className.indexOf(dv) > -1) addClass(x[i], "show")
    }
  }

  // add class 
  function addClass(element,name){
    let i,arr1,arr2;
    arr1= element.className.split(" ");
    arr2 = name.split(" ");
    for( i =0; i < arr2.length; i++){
      if(arr1.indexOf(arr2[i]) == -1){
        element.className += " " +arr2[i];
      }
    }
  }
  // remove class
  function removeClass(element,name){
    let i,arr1,arr2;
    arr1= element.className.split(" ");
    arr2 = name.split(" ");
    for( i =0; i < arr2.length; i++){
      while(arr1.indexOf(arr2[i]) > -1){
        arr1.splice(arr1.indexOf(arr2[i]),1)
      }
    }
    element.className = arr1.join(" ");
  }



