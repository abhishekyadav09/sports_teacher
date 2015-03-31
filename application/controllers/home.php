<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index() {
		if($this->session->userdata('logged_in_sports_teacher')) {
			
			//If the user session exists
			$this->loggedIn();
		}
		else {
			
			//If the user is not logged IN
			$this->signIn();
		}
	}
	
	public function loggedIn() {
		
		//User session is created and the user is logged in
		
		echo "Dashboard";
		echo '<br/><a href="'.base_url().'home/logout" >Logout</a>';
	}
	
	public function signIn() {
		
		//Method to generate the sign in form
		$data['title'] = "Login/Sign up Sports Teacher";
		$this->load->view('login/login',$data);
	}
	
	public function verifyLogin() {
		
		//Method to authenticate the user details
		$this->load->model('login/loginModel');
		$userDetails = $this->loginModel->verifyLogin();
		
		if($userDetails == 0) {
			
			//User Authentication has failed
			$this->load->library('form_validation');
			$data['title'] = "Login/Sign up Sports Teacher";
			$this->load->view('login/login_again',$data);
		}
		else {
			
			$this->session->set_userdata('logged_in_sports_teacher', $userDetails);
			redirect('','refresh');
		}
	}
	
	public function logout() {
		//Method to log out
		$this->session->unset_userdata('logged_in_sports_teacher');
		session_destroy();
		redirect('', 'refresh');
	}
	
	
	public function checkEmailId() {
		//Method to check whether the email ID exists or not
		
		$data = array();
		$this->load->model('login/loginModel');
		$data['result'] = $this->loginModel->checkEmailId();
		$this->load->view('MiscAjax/singleOutputAjax',$data);
	}
	public function processSignUp() {
		//Method to submit the fields once the Sign up is done by the user
		
		$this->load->model('login/loginModel');
		$userDetails = $this->loginModel->processSignUp();
		if($userDetails == 0) {
			
			//User Sign Up has failed
			redirect('','');
		}
		else {
			
			$this->session->set_userdata('logged_in_sports_teacher', $userDetails);
			redirect('','refresh');
		}
	}
}

?>