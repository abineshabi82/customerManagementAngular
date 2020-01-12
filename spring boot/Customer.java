package com.example.demo.model;

public class Customer {
private int id;
	
	  public int getId() { return id; } public void setId(int id) { this.id = id; }
	  public String getName() { return name; } public void setName(String name) {
	  this.name = name; } public String getKey() { return key; } public void
	  setKey(String key) { this.key = key; } public double getL1() { return l1; }
	  public void setL1(double l1) { this.l1 = l1; } public double getL2() { return
	  l2; } public void setL2(double l2) { this.l2 = l2; }
	 
private String name,key;
private double l1,l2;
public Customer(int id, String name, String key, double d, double e) {
	super();
	this.id = id;
	this.name = name;
	this.key = key;
	this.l1 = d;
	this.l2 = e;
}

//public Customer() {}
	

}
