const knex = require("../../config/database");

const select = knex('users').select('email as uemail', 'first_name as name');

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
