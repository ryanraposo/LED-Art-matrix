const router = require("express").Router();
import { UserController } from "../controllers";
const { authMiddleware, accessControl } = require("../middleware");
const { getUserDefaultPreset, login, updateDefaultPreset, signup, forgotPassword, changePassword } = UserController;

router.route("/")
  .get(accessControl, authMiddleware, getUserDefaultPreset)
  .post(signup);

// router.route("/all")
//   .get(getAllUsers);

router.route("/update-preset")
  .put(accessControl, authMiddleware, updateDefaultPreset)

router.route("/login")
  .post(accessControl, login);

router.route("/forgot")
  .post(accessControl, forgotPassword);

router.route("/change-pass").put(changePassword)

export default router;