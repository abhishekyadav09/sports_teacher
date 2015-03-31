<?php

class loginModel extends CI_Model {
	
	public function __construct() {
		// Call the CI_Model constructor
		parent::__construct();
	}
	
	public function verifyLogin() {
		
		//Method to authenticate the user credentials
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$password = md5($password);				//Convert the password in hash
		
		$this->db->select('login_id, uid, priv');
		$this->db->where('username',$username);
		$this->db->where('password',$password);
		$query_login_id = $this->db->get('login');
		
		if($query_login_id->num_rows() == 1) {
			
			$row_login_id = $query_login_id->row();
			$uid = $row_login_id->uid;
			$priv = $row_login_id->priv;
			
				//User Privilege
				$this->db->select('first_name, last_name');
				$this->db->where('uid',$uid);
				$query_user_details = $this->db->get('user');
				$user_details = $query_user_details->row();
				$first_name = $user_details->first_name;
				$last_name = $user_details->last_name;
				
				$array_user_details = array(
					"uid" => $uid,
					"firstName" => $first_name,
					"lastName" => $last_name,
					"priv" => $priv
				);
				
				return $array_user_details;
			 
			
		}// End IF whether the user exists or not
		
	}//End Function verifyLogin
	
	public function checkEmailId() {
		//Method to check wheter the email ID is available or not
		
		$emailId = $this->input->post('emailId');
		
		$this->db->select('login_id');
		$this->db->where('username',$emailId);
		$queryEmail = $this->db->get('login');
		if($queryEmail->num_rows() == 1) {
			//If the email ID is found
			return 1;
		}
		else {
			//Email is not found
			return 0;
		}
		
		
	}// End Function checkEmailId
	
	public function processSignUp() {
		//Method to check the user Sign up details and process the user signup
		
		$firstName = $this->input->post('firstName');
		$lastName = $this->input->post('lastName');
		$email = $this->input->post('email');
		$mobileNumber = $this->input->post('mobileNumber');
		$password = $this->input->post('password');
		$confirmPassword = $this->input->post('confirmPassword');
		$gender = $this->input->post('gender');
		
		if($firstName && $lastName && $email && $mobileNumber && $password && $confirmPassword && $gender) {
			//Check none of the fields is blank
			
			
				$userDetails = array(
					"first_name" => $firstName,
					"last_name" => $lastName,
					"email" => $email,
					"phone_number" => $mobileNumber,
					"gender" => $gender
				);
				$this->db->insert("user",$userDetails);
				
				//Get the user_id
				$this->db->select('uid');
				$this->db->where('email',$email);
				$queryUserId = $this->db->get('user');
				$userIdDetails = $queryUserId->row();
				$loginId = $userIdDetails->uid;
				
			//Enter the details in login table
			$password = md5($password);
			$loginDetails = array(
				"username" => $email,
				"password" => $password,
				"uid" => $loginId,
			);
			
			$this->db->insert("login",$loginDetails);
			
			$arrayUserDetails = array(
					"uid" => $loginId,
					"firstName" => $firstName,
					"lastName" => $lastName
			);
			
			//Send a confirmation signup Mail
			//$this->load->model('email/emailModel');
			//$this->emailModel->sendSignUpEmail($name,$emailId,$loginPriv);
			
			return $arrayUserDetails;
			
		}//END check none of the fields is blank
		else {
			//statement if any of the fields blank
			return 0;
		}//END of statement if any of the fields is blank
	}//END function processSignUp
}
?>