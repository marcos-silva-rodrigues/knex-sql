const knex = require("../../config/database");

const selectLike = knex('users')
  .select('id', 'first_name')
  .where('first_name', 'like', '%a')
  .orWhere('first_name', 'like', '_a_o_');

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
