package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.Customer;

public class CustomerService {
public static List<Customer> getCustomers(){
	List<Customer> customersList = new ArrayList<Customer>();
	  customersList.add(new Customer(1,"abi","silent",14.6835214,78.8567013));
	  customersList.add(new Customer(2,"vishal","knowgle",14.6835214,78.8567013));
	  customersList.add(new Customer(3,"ram","player",16.7376215,81.5743552));
	  customersList.add(new Customer(4,"guhan","gym",40.6976701,-74.2598758));
	  customersList.add(new Customer(5,"ganesh","coder",41.3689379,-74.9414565));
	  customersList.add(new Customer(6,"ajith","master",40.6976701,-74.2598758));
	return customersList;
}
}
