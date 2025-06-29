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
      email: result.email,
      usertype: "user"
    });
    return { token: jwtToken };
  }
};

const adminLogin = async (data) => {  
  const result =  await userRepo.findAdmin(data.userId, data.password);
  if(result) {
    var jwtToken = tokenGenerator({
      name: result.name,
      userId: result.userId,
      role: result.role,
      usertype: "admin"
    });
    return { token: jwtToken };
  }
};

module.exports = {
 signUp,
 signIn,
 adminLogin
};
