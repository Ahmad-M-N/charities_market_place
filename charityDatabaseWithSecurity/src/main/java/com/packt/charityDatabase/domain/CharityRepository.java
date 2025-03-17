package com.packt.charityDatabase.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CharityRepository extends CrudRepository <Charity, Long> {
	
	//Fetch by name
	List<Charity> findByName(@Param("name") String name);
	
	//Fetch by category
	List<Charity> findByCatName(@Param("catName") String catName);
	
}
