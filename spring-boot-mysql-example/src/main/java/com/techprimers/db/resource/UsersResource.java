package com.techprimers.db.resource;

import com.techprimers.db.model.Users;
import com.techprimers.db.repository.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/rest/users")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class UsersResource {

    @Autowired
    UsersRepository usersRepository;
    
    //get all users
    @GetMapping(value = "/all")
    public List<Users> getAll() {
        return usersRepository.findAll();
    }
    
    //create user
    //@PostMapping(value = "/load")
    @RequestMapping(value = "/load", method = RequestMethod.POST)
    public List<Users> createUser(@RequestBody  Users users) {
        usersRepository.save(users);
        return usersRepository.findAll();
    }
    
    //get one user
    @GetMapping("/user/{id}")
	public Users getUser(@PathVariable Integer id){
		return usersRepository.findOne(id);
		
	}
    //delete user
    @DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Integer id){
	  usersRepository.delete(id);
	  return true;
		
	}
    //update user
    //@PutMapping("/userup")
    @RequestMapping(value = "/userup", method = RequestMethod.PUT)
	public Users updateUser(@RequestBody  Users users){
		return usersRepository.save(users);
		
	}
}
