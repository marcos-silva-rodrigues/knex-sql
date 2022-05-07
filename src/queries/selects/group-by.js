const knex = require("../../config/database");

const groupBy = knex('users as u')
  .select('u.first_name')
  .leftJoin('profiles as p', 'u.id', 'p.user_id')
  .count('u.id as total')
  // .whereIn('id', [69, 112, 10, 12])
  .groupBy('u.first_name')
  .orderBy('total', 'desc');


console.log(groupBy.toString());
groupBy
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
