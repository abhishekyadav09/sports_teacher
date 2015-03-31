// JavaScript Document

var validationPassword = 0;
var validationConfirmPassword = 0;
var validationFirstName = 0;
var validationLastName = 1;
var validationEmail = 0;
var validationNumber = 0;

function validateEmailId() {
	//Method to validate the format of Email ID and whether the email ID exists in the database or not
	
	//alert();
	
	var emailID = $('#email').val();
      atpos = emailID.indexOf("@");
      dotpos = emailID.lastIndexOf(".");
      if (atpos < 1 || ( dotpos - atpos < 2 )) {
		  
            $("#email").css("color","#953b39");
            $("#email").css("border-color","#953b39");
			$("#email").css("font-weight","normal");
            validationEmail = 0;
            return 0;

      } //END if to check the email ID is in the correct format
      else {
		  
          //email is in the valid format, now we need to check that the email ID doesnot exists in the database i.e unique email ID
		  var url = basePath+'home/checkEmailId';
		  
		  //alert(url);
     
             $.ajax({
                    type: 'POST',

                    url: url,
                    data: {emailId: emailID},
                    success: function(data) {

					//alert(data);
                                   if(data == 0) {

                                        $("#email").css("color","GREEN");
                                        $("#email").css("border-color","GREEN");
										$("#email").css("font-weight","normal");
                                        validationEmail = 1;
                                        return 1;

                                  }
                                  else {
                                      //email not available
                                      $("#email").css("color","#953b39");
                                      $("#email").css("border-color","#953b39");
									  $("#email").css("font-weight","bold");
                                      validationEmail = 0;
                                      return 0;
                                  }

                    }
                });
          
            $("#email").css("color","GREEN");
            $("#email").css("border-color","GREEN");
            validationEmail = 1;
            return 1;
		  
	  }// END else if the emailID is in correct format and is not available in the database
	
}


function validatePassword() {
      
      //Function to validate the password
      if($('#password').val().length > 5) {
		  
            $("#password").css("color","GREEN");
            $("#password").css("border-color","GREEN");
            validationPassword = 1;
            return 1;
      }
      else {
		  
             $("#password").css("color","#953b39");
             $("#password").css("border-color","#953b39");
             validationPassword = 0;
             return 0;
      }
}

function validateConfirmPassword() {

      //Function to check the password and confirm password matches
      
      if(($('#password').val().length == 0) || ($('#confirmPassword').val().length == 0)) {
		  
            //If either password or confirmPassword is NULL
             
             $("#password").css("color","#953b39");
             $("#password").css("border-color","#953b39");
             
             
             $("#confirmPassword").css("color","#953b39");
             $("#confirmPassword").css("border-color","#953b39");
             validationConfirmPassword = 0;
             return 0;
      }// END If either password or confirmPassword is Null
      
      if($('#password').val() == $('#confirmPassword').val()) {

            //If password matches with the confirm password
             
             $("#password").css("color","GREEN");
             $("#password").css("border-color","GREEN");
             
             
             $("#confirmPassword").css("color","GREEN");
             $("#confirmPassword").css("border-color","GREEN");
             validationConfirmPassword = 1;
             return 1;
            
      }//END If the password and confirmPassword matches
      else {
		  
            //If password does not matches with the confirm password
             
             $("#password").css("color","#953b39");
             $("#password").css("border-color","#953b39");
             
             
             $("#confirmPassword").css("color","#953b39");
             $("#confirmPassword").css("border-color","#953b39");
             validationConfirmPassword = 0;
             return 0;
      }//END Else if the Password and confirmPassword does not matches
}

function validateName() {
      
      //Function to validate the password
      if($('#name').val().length > 2) {
		  
            $("#name").css("color","GREEN");
            $("#name").css("border-color","GREEN");
            validationName = 1;
            return 1;
      }
      else {
		  
             $("#name").css("color","#953b39");
             $("#name").css("border-color","#953b39");
             validationName = 0;
             return 0;
      }
}

function validateNumber() {
	//Check whether the mobile number field is empty
	var mobileNumber = $("#mobileNumber");
	if(mobileNumber.val().length <9) {
		//If the mobile number is less than 10 digits
		validationNumber = 0;
		$("#mobileNumber").css("color","#953b39");
        $("#mobileNumber").css("border-color","#953b39");
	}
	else {
		validationNumber = 1;
		$("#mobileNumber").css("color","GREEN");
        $("#mobileNumber").css("border-color","GREEN");
	}
}


function validateFirstName() {
	//Method to validate the first Name
	var firstName = $("#firstName");
	if(firstName.val().length == 0) {
		//Name field is blank
		validationFirstName = 0;
		$("#firstName").css("color","#953b39");
        $("#firstName").css("border-color","#953b39");
	}
	else {
		validationFirstName = 1;
		$("#firstName").css("color","GREEN");
        $("#firstName").css("border-color","GREEN");
	}
}

function validateLastName() {
	//Method to validate the first Name
	var lastName = $("#lastName");
	if(lastName.val().length == 0) {
		//Name field is blank
		validationLastName = 0;
		$("#lastName").css("color","#953b39");
        $("#lastName").css("border-color","#953b39");
	}
	else {
		validationLastName = 1;
		$("#lastName").css("color","GREEN");
        $("#lastName").css("border-color","GREEN");
	}
}


function validateAll() {
      //Check whether all validation function returns 1
      
      validatePassword();
      validateConfirmPassword();
      validateEmailId();
	  validateNumber();
	  validateFirstName();
	  validateFirstName();
	  
      if(validationPassword && validationConfirmPassword && validationFirstName && validationEmail && validationLastName && validationNumber) {
		  
            //If all the fields are validated
            $('#joinSportsTeachers').addClass('btn-primary');
            $('#joinSportsTeachers').attr('type','submit');
            
      }
      else {
		  	//alert("Else");
            //If error in validation of any of the fields
            $('#joinSportsTeachers').removeClass('btn-primary');
            $('#joinSportsTeachers').attr('type','button');
      }
}
