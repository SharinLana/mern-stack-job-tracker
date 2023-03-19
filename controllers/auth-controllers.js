const register = async (req, res, next) => {
  res.send("Register");
};

const login = async (req, res, next) => {
  res.send("Login");
};

const updateUser = async (req, res, next) => {
  res.send("updateUser");
};

export { register, login, updateUser };
