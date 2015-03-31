<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title><?php echo $title; ?></title>

    <!-- App Styling Bundle -->
    <link href="<?php echo base_url(); ?>assets/css/default.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]><script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
<style>
.panel-default {
	border-color : transparent;
}

.panel {
	background-color : transparent;
}
</style>
</head>
<body>

    <!-- Fixed navbar -->
    <div class="navbar navbar-main navbar-primary navbar-fixed-top" role="navigation">
    
        <div class="container">
        <a class="navbar-brand" href="<?php echo base_url(); ?>">SPORTS TEACHERS</a><br>
			<form class="form-horizontal" role="form" method="post" action="<?php echo base_url(); ?>home/verifyLogin">
                <ul class="nav navbar-nav navbar-right">
                        <li>
                            <input style="border: 0px solid; border-radius: 5px;" type="text" name="username" placeholder="Email Address" />
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                            <input style="border: 0px solid; border-radius: 5px;" type="password" name="password" placeholder="Password" />
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                        	<input style="border: 0px solid; border-radius: 5px;" type="submit" value="Go" />
                        </li>
                        <a style="color:white;" href="#" > Forgot your Password ?</a>
                </ul>
                
			</form>

        </div>   
    </div>
    <div class="container">
        
        
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <div class="panel panel-default">
                    <div class="panel-body">
                        
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-md-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                    <h1>Register</h1>
                       <form class="form-horizontal" role="form" method="post" action="<?php echo base_url(); ?>home/processSignUp">
                       
                       		<div class="form-group">
                                <div class="col-sm-4">
                                    <input style="border: 1px solid; border-radius: 10px; border-color:#bdc7d8" type="text" name="firstName" class="form-control" id="firstName" placeholder="First Name" maxlength="20" onKeyUp="validateFirstName();" onBlur="validateAll();">
                                </div>
                                <div class="col-sm-4">
                                    <input style="border: 1px solid; border-radius: 10px; border-color:#bdc7d8" type="text" name="lastName" class="form-control" id="lastName" placeholder="Last Name" maxlength="20" onKeyUp="validateLastName();" onBlur="validateAll();">
                                </div>
                            </div>
                       
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input style="border: 1px solid; border-radius: 10px; border-color:#bdc7d8" type="email" name="email" class="form-control" id="email" placeholder="Email Address" maxlength="50" onKeyUp="validateEmailId();" onBlur="validateAll();">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input style="border: 1px solid; border-radius: 10px; border-color:#bdc7d8" type="text" name="mobileNumber" class="form-control" id="mobileNumber" placeholder="Mobile Number [10 digits]" onkeypress="return event.charCode > 47 && event.charCode < 58;" pattern="[0-9]" maxlength="10" onBlur="validateAll();">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input style="border: 1px solid; border-radius: 10px; border-color:#bdc7d8" type="password" name="password" class="form-control" id="password" placeholder="Password" maxlength="20" onKeyUp="validatePassword();" onBlur="validateAll();">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input style="border: 1px solid; border-radius: 10px; border-color:#bdc7d8" type="password" name="confirmPassword" class="form-control" id="confirmPassword" placeholder="Confirm Password" maxlength="20" onKeyUp="validateConfirmPassword();" onBlur="validateAll();" >
                                </div>
                            </div>
                            
                            <div class="form-group">
                            	<div class="col-sm-12">
                                    <label class="radio-inline">
                                        <input type="radio" name="gender" id="gender" value="female"> Female
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="gender" id="gender" value="male"> Male
                                    </label>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <label>By clicking Sign Up, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.</label>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input id="joinSportsTeachers" class="btn" type="button" value="Sign Up" />
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    <!-- Footer -->
    <div class="footer">
        &copy; Copyright 
    </div>

    <!-- // Footer -->
    
<!-- Vendor Scripts Bundle --><script src="<?php echo base_url(); ?>assets/js/vendor.min.js"></script>

    <!-- App Scripts Bundle -->
    <script src="<?php echo base_url(); ?>assets/js/scripts.min.js"></script>
    <script type="text/javascript">
	var basePath = "<?php echo base_url(); ?>";
	</script>
    <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/custom/login/signUp.js"></script>
</body>
</html>