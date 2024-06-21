const knex = require("../database/knex")

class tagsController {
  async index(request, response) {
    const user_id = request.user.id;
    const tags = await knex("Tags")
    .where({ user_id })
    .groupBy("name")


    return response.json(tags);
  }
}

module.exports = tagsController
