package com.packt.charityDatabase.domain;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.JoinColumn;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long categoryid;
	private String categoryName;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="category")
	@JsonIgnore
	private List<Charity> charities;


	public Category() {}
	
	public Category(String categoryName) {
	
		super();
		
		this.categoryName = categoryName;
		
		}
	
	public long getCategoryid() {
		return categoryid;
	}
	
	public void setCategoryid(long categoryid) {
		this.categoryid = categoryid;
	}
	
	public String getCategoryName() {
		return categoryName;
	}
	
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	
	public List<Charity> getCharities() {
		return charities;
	}
	
	public void setCharities(List<Charity> charities) {
		this.charities = charities;
	}
	
}