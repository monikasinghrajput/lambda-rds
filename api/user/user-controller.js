const User = require("./user");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "bgverification";

const REST_API = require("../../util/api-util");

//Role-based access control for different routes.
// Define the createUser controller function
const createUser = async (req, res) => {
  const response = await REST_API._add(req, res, User);
  res.status(200).json(response);
};

const getUsers = async (req, res) => {
  const response = await REST_API._getAll(req, res, User);
  res.status(200).json(response);
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    User,
    "id",
    userId
  );
  res.status(201).json(response);
};

const updateUser = async (req, res) => {
  const response = await REST_API._update(req, res, User);
  res.status(201).json(response);
};

const deleteUser = async (req, res) => {
  const response = await REST_API._delete(req, res, User);
  res.status(201).json(response);
};

exports.verifyUser = async (username, password) => {
  const user = await User.findOne({ where: { username: username } });
  if (!user) return null;

  // Remove leading/trailing spaces from the password before comparison
  password = password.trim();

  const isMatch = crypto.timingSafeEqual(
    Buffer.from(user.password),
    Buffer.from(password)
  );
  if (!isMatch) return null;

  const token = exports.generateToken(user);
  await user.update({ token: token });
  return user;
};

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
};

// Invalidate the token on logout
exports.logoutUser = async (userId) => {
  const user = await User.findByPk(userId);
  if (user) {
    await user.update({ token: null });
  }
};

exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
