
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});


const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});


const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});



scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}


				
        function validateForm(){
          try{
            let name=document.forms["myform"]["fname"].value;
           
            let email=document.forms["myform"]["mail"].value;
            let password=document.forms["myform"]["pwd"].value;
            
            if(name===""){
              throw new Error("Name filed cannot be empty");
            }
            else if(!/^[A-Za-z]+$/.test(name))
            {
              throw new Error("Name must contain only alphabets");
            }
            
           
            
            if(email===""){
              throw new Error("email id cannot be empty");
            }
            else if(!/\S+@\S+\.\S+/.test(email)){
              throw new Error("Enter a valid email address");
            }
            
            if(!/(?=.*\d)(?=.*[a-zA-Z])(?=.\w).{8,}/.test(password)){
              throw new Error("Password must contain at least 8 characters with one number,one alphabet,and one special character");
            }
            return true;
    
          }
          catch(error){
            alert(error.message);
            return false;
          }	
          finally{
            alert("form submitted");
          }
    
        }
    
     
     
    
      


