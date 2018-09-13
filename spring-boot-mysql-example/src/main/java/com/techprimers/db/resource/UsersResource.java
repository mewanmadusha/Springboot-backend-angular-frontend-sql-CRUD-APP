package com.techprimers.db.resource;

import com.techprimers.db.model.Users;
import com.techprimers.db.repository.UsersRepository;

import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiMethod;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/rest/users")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
@Api(
		name="Hotel Booking Api",
		description="provides a list of methods that mange hotel bookings",
		stage=ApiStage.RC)
public class UsersResource {

    @Autowired
    UsersRepository usersRepository;
    
    //get all users
    @GetMapping(value = "/all")
    @ApiMethod(description="Get all bookings from the database")
    public List<Users> getAll() {
        return usersRepository.findAll();
    }
    
    //create user
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
