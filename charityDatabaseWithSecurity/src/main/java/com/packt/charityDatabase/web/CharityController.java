package com.packt.charityDatabase.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.packt.charityDatabase.domain.Charity;
import com.packt.charityDatabase.domain.CharityRepository;

@RestController
public class CharityController {
	@Autowired
	private CharityRepository charRepo;

	
	@RequestMapping("/charities")
	public Iterable<Charity> getCharities(){
		
		return charRepo.findAll();
		 	 
	}


}
