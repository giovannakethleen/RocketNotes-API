const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload.js");


const UserController = require("../controllers/UserController.js")
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAutenticated = require("../middlewares/ensureAutenticated.js");


const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);


const userController = new UserController();
const userAvatarController = new UserAvatarController();
userRoutes.post("/", userController.create)
userRoutes.put("/",ensureAutenticated, userController.update);
userRoutes.patch("/avatar", ensureAutenticated, upload.single("avatar"), userAvatarController.update)

//exportando para quem quiser utilizar o arquivo (para acesso)
module.exports = userRoutes
