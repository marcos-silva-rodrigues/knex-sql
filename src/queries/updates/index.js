const knex = require("../../config/database");

const update = knex('users')
  .update({
    first_name: 'Luiz',
    last_name: 'Miranda'
  })
  .where('id', '=', 23);

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
