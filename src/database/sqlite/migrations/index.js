const sqliteConnection = require("../../sqlite")

const createUsers = require("./createUsers")

async function migrationsRun() {
  const schemas = [createUsers].join("")
  // Join utilizado para juntar todas nossas migrations

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error))
}

module.exports = migrationsRun
