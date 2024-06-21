const { Router } = require("express")

const NotesController = require("../controllers/NotesController.js");
const ensureAutenticated = require("../middlewares/ensureAutenticated.js");

const notesRoutes = Router()

const notesController = new NotesController()

//aplicar middlewares para todoas as rotas
notesRoutes.use(ensureAutenticated)


notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)
notesRoutes.get("/", notesController.index)




module.exports = notesRoutes
