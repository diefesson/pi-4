const userRepository = require("../repositories/user-repository");

class UserService {
    add(user) {
      return userRepository.save(user);
    }
  
    getAll() {
      return userRepository.findAll();
    }

    getByUsername(username){
      return userRepository.findByUsername(username);
    }
  
    getById(id) {
      return userRepository.findById(id);
    }    
  }
  
  module.exports = UserService;