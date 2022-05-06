const knex = require("../../config/database");

const select = knex('users')
  .select('id', 'email', 'first_name')
  // .where('id', '<=', 3);
  .where({ id: 2 })
  .andWhere('first_name', '=', 'Joana')
  .orWhere('id', '=', 5);

select
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
