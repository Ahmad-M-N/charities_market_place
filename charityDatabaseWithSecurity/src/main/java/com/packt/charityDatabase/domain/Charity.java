package com.packt.charityDatabase.domain;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Charity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String name, city, website, catName;
	private int accountability_score;
	private double fundraising_expenses, net_assets, excessDeficitForYear, financial_score;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cetegory")
	private Category category;
	
//	@ManyToMany(mappedBy = "cars") 
//	private Set<Owner> owners; 
	 
	
	public Charity(){}
	
	public Charity(String name, String city, String website, int accountability_score, 
			double fundraising_expenses,double net_assets, double excessDeficitForYear, double financial_score, Category category) {
		
		super();
		
		this.name=name;
		this.city=city;
		this.website=website;
		this.accountability_score=accountability_score;
		this.fundraising_expenses=fundraising_expenses;
		this.net_assets=net_assets;
		this.excessDeficitForYear=excessDeficitForYear;
		this.category=category;
		this.financial_score=financial_score;
		this.catName=category.getCategoryName();
		
	}
	
	// Getter and Setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public int getAccountability_score() {
		return accountability_score;
	}

	public void setAccountability_score(int accountability_score) {
		this.accountability_score = accountability_score;
	}

	public double getFundraising_expenses() {
		return fundraising_expenses;
	}

	public void setFundraising_expenses(double fundraising_expenses) {
		this.fundraising_expenses = fundraising_expenses;
	}

	public double getNet_assets() {
		return net_assets;
	}

	public void setNet_assets(double net_assets) {
		this.net_assets = net_assets;
	}

	public double getExcessDeficitForYear() {
		return excessDeficitForYear;
	}

	public void setExcessDeficitForYear(double excessDeficitForYear) {
		this.excessDeficitForYear = excessDeficitForYear;
	}

	public double getFinancial_score() {
		return financial_score;
	}

	public void setFinancial_score(double financial_score) {
		this.financial_score = financial_score;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}	
	
	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}
	
}
