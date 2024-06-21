//Router Import
const { Router } = require("express")

//Routes Import
const userRoutes = require("./user.routes")
const notesRoutes = require("./notes.routes")
const tagsRoutes = require("./tags.routes")
const sessionsRoutes = require("./sessions.routes")

//Intitializing Router
const routes = Router()

//Application Routes
routes.use("/users", userRoutes)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRoutes)
routes.use("/sessions", sessionsRoutes)

//Export (acesso para quem quiser utilizar o arquivo)
module.exports = routes
