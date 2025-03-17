package com.packt.charityDatabase.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.packt.charityDatabase.domain.User;
import com.packt.charityDatabase.domain.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepo;

		
	@RequestMapping("/users")
	public Iterable<User> getUsers(){
			
		return userRepo.findAll();
			 	 
	}
}
