<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title><?php echo $title ?></title>

    <!-- App Styling Bundle -->
    <link href="<?php echo base_url(); ?>assets/css/default.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]><script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="login">
    <div id="content">
        <div class="container-fluid">
            <div class="lock-container">
                <h1>Account Access</h1>
                <div class="panel panel-default text-center">
                   <form action="<?php echo base_url(); ?>home/verifyLogin" method="post" >
                    <div class="panel-body">
                    	<h5 style="color:red">Invalid Email ID OR Password</h5>
                        <input class="form-control" type="text" placeholder="Email ID" name="username">
                        <input class="form-control" type="password" placeholder="Enter Password" name="password">
                        <button name="submit" type="submit" class="btn btn-primary">Login<i class="fa fa-fw fa-unlock-alt"></i></button>
                   </form>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <a href="<?php echo base_url(); ?>home">Sign up<i class="fa fa-fw fa-pencil"></i></a>
                        
                        <a href="<?php echo base_url(); ?>home/forgotPassword" class="forgot-password">Forgot password?</a>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

<!-- Vendor Scripts Bundle -->
<script src="<?php echo base_url(); ?>assets/js/vendor.min.js"></script>

<!-- App Scripts Bundle -->
<script src="<?php echo base_url(); ?>assets/js/scripts.min.js"></script>
</html>