package com.example.demo.controller;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.service.CustomerService;

@CrossOrigin("*")
@RestController
public class CustomerController {
	
	List<Customer> customersList =CustomerService.getCustomers();
	
	  @GetMapping("/get/customers") public ResponseEntity<List<Customer>> list(){
	  
	  return ResponseEntity.ok().body(this.customersList);
	  
	  }
	 
	@PostMapping("/post/customer")
	public ResponseEntity<Customer> save(@RequestBody Customer customer){
		this.customersList.add(customer);
		return ResponseEntity.ok().body(customer);
	}
	
	@PutMapping("/put/customer/{id}")
	public ResponseEntity<Customer> update(@PathVariable("id") long id,@RequestBody Customer customer){
		for (Customer customer2 : customersList) {
			if(customer2.getId()==id) {
				customer2.setName(customer.getName());;
				customer2.setKey(customer.getName());
				customer2.setL1(customer.getL1());
				customer2.setL2(customer.getL2());
				System.out.print("updated");
			}
		}
		return ResponseEntity.ok().body(customer);
	}
	  
	@DeleteMapping("/delete/customer/{id}")
	public ResponseEntity<List<Customer>> delete(@PathVariable("id") long id){
		//customersList.remove(id);
		for (Customer customer2 : customersList) {
			if(customer2.getId()==id) {
				customersList.remove(customer2);
				System.out.print("deleted");
			}
		}
		return ResponseEntity.ok().body(customersList);
	}

	
}
