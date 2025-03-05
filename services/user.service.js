const { BadRequest } = require("../libs/errors");

const User = require("../models/user");

exports.createUser = async (payload) => {
  const { name, email, password } = payload.body;

  if (!name || !email || !password) {
    throw new BadRequest("data is not given");
  }
  const response = User.create({
    name: name,
    email: email,
    password: password,
  });

  return response;
};
