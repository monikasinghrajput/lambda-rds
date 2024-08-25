const express = require("express");
const router = express.Router();
const userController = require("./user-controller");
const passport = require("../../config/auth");

// Routes for CRUD operations
router.post("/", userController.createUser);
router.put("/", userController.updateUser);
router.get("/", userController.getUsers);
router.get("/:userId", userController.getUserById);
router.delete("/", userController.deleteUser);

router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    // Trim whitespace from username and password
    username = username.trim();
    password = password.trim();

    const user = await userController.verifyUser(username, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    let obj = {
      token: user.token,
      user_role: user.user_role, // Returning the role as a string
    };

    // Handle specific roles
    if (user.user_role === "2" || user.user_role === "3") {
      // Keep roles 2 and 3 as they are
      obj.user_role = user.user_role;
    } else {
      // Map other roles to specific names
      switch (user.user_role) {
        case "GenInfo":
        case "EducationInfo":
        case "AddressInfo":
        case "CibilInfo":
        case "ReferenceInfo":
        case "ExperienceInfo":
          obj[user.user_role.toLowerCase() + "_id"] = user.user_source_id;
          break;
        default:
          console.log("Undefined role");
      }
    }

    res.json(obj);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post(
  "/logout",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    try {
      const userId = req.user.id;
      await userController.logoutUser(userId);
      res.json({ message: "Logout successful" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;
