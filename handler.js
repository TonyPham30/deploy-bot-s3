const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config()
module.exports.signinJwt = async (event) => {
  console.log("hello")
  console.log(event)
  try {
    const response = { statusCode: 200 }
    const jwt_data = {
      "sub": event.body.identity,
      "iss": event.body.clientId,
      "algorithm": "HS256"
    }
    jwt.sign(jwt_data, process.env.CLIENT_SECRET, { algorithm: 'HS256' }, function (err, token) {
      response.body = {
        "jwt": token,
      }
    });
    return response;
  } catch (error) {
    console.log(error)
  }
};
