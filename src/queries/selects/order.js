const knex = require("../../config/database");

const selectLike = knex('users')
  .select('id', 'first_name')
  .where('first_name', 'like', '%na')
  .orWhere('first_name', 'like', '___')
  .orderBy('id', 'asc');

console.log(selectLike.toString());
selectLike
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
