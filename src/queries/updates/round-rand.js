const knex = require("../../config/database");

const update = knex('users')
  .update({
    salary: knex.raw('round(rand() * 10000, 2)')
  })

console.log(update.toString());
update
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
