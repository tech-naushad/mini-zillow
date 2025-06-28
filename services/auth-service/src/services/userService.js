const userRepo = require("../repositories/userRepository");
const tokenGenerator = require( "../../../../shared/utils/tokenGenerator");

const signUp = async (data) => {  
  return await userRepo.create(data);
};

 const signIn = async (data) => {  
  const result =  await userRepo.find(data.email, data.password);
  if(result) {
    var jwtToken = tokenGenerator({
      name: result.name,
      email: result.email
    });
    return { token: jwtToken };
  }
};

module.exports = {
 signUp,
 signIn
};
