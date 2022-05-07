const knex = require("../../config/database");

const selectLimit = knex('users')
  .select('id', 'first_name')
  .orderBy('id', 'desc')
  .limit(5)
  .offset(0)

console.log(selectLimit.toString());
selectLimit
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
