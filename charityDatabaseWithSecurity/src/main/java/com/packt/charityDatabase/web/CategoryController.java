package com.packt.charityDatabase.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.packt.charityDatabase.domain.Category;
import com.packt.charityDatabase.domain.CategoryRepository;

@RestController
public class CategoryController {

	@Autowired
	private CategoryRepository charRepo;

		
	@RequestMapping("/categories")
	public Iterable<Category> getCategories(){
			
		return charRepo.findAll();
			 	 
	}


}
