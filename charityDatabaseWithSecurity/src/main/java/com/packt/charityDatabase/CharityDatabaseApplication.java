package com.packt.charityDatabase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.packt.charityDatabase.domain.User;
import com.packt.charityDatabase.domain.UserRepository;
import com.packt.charityDatabase.domain.Category;
import com.packt.charityDatabase.domain.CategoryRepository;
import com.packt.charityDatabase.domain.Charity;
import com.packt.charityDatabase.domain.CharityRepository;

@SpringBootApplication
public class CharityDatabaseApplication {
	
	@Autowired
	private CharityRepository chrepository;
	
	@Autowired 
	private CategoryRepository corepository;
	
	@Autowired 
	private UserRepository urepository;

	public static void main(String[] args) {
		SpringApplication.run(CharityDatabaseApplication.class, args);
	}
	
	@Bean
	
	CommandLineRunner runner() {
		
		return args -> {
			
			// Adding some categories
			Category category1 = new Category("Health");
			Category category2 = new Category("Education");
			corepository.save(category1);
			corepository.save(category2);
			
			
			// Save demo data to database
			chrepository.save(new Charity("name1", "city1", "website1", 100, 294545.4, 1000000, 24456, 23234, category1));
			chrepository.save(new Charity("name2", "city2", "website2", 55, 213213.4, 1000, 14423, 213123, category2));
			chrepository.save(new Charity("name3", "city3", "website3", 23, 234234.4, 2334, 14422323, 342343, category2));
			
			// Save users to database
			urepository.save(new User("user","$2a$04$1.YhMIgNX/8TkCKGFUONWO1waedKhQ5KrnB30fl0Q01QKqmzLf.Zi","USER"));
			urepository.save(new User("admin","$2a$04$KNLUwOWHVQZVpXyMBNc7JOzbLiBjb9Tk9bP7KNcPI12ICuvzXQQKG","ADMIN"));
			
		};
		
	}

}
