const knex = require("../../config/database");

const updateWithJoin = knex("users as u")
  .join("profiles as p", "u.id", "p.user_id")
  .update({
    "p.bio": knex.raw('CONCAT(p.bio, " atualizado")'),
  })
  .where({
    "u.first_name": "katelyn",
  });

console.log(updateWithJoin.toString());
updateWithJoin
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });

