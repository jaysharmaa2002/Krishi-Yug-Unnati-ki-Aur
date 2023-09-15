$(document).ready(function(){
    
   $('#menu').click(function(){
       $(this).toggleClass('fa-times');
       $('section .container .contactinfo').toggleClass('toggle');
   });
    
    $(windows).on('scroll load',function(){
       $('#menu').removeClass('fa-times');
       $('section .container .contactinfo').removeClass('toggle');
    });
    
});


/* Change password */
function checkPassword(form) {
                password1 = form.password1.value;
                password2 = form.password2.value;
  
                if (password1 == '')
                    alert ("Please enter Password");
                      
                else if (password2 == '')
                    alert ("Please enter confirm password");
                         
                else if (password1 != password2) {
                    alert ("\nPassword did not match: Please try again...!!")
                    return false;
                }
  
                else{
                    alert("Password Changed Successfully...")
                    return true;
                }
            }