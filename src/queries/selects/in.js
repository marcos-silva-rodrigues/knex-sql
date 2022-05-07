const knex = require("../../config/database");

const selectIn = knex('users')
  .select('id', 'first_name')
  .whereIn('id', [
    10, 20, 25, 6
  ]);

selectIn
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
