const knex = require("../../config/database");

const join = knex('users as u')
  .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
  .leftJoin('profiles as p', 'u.id', 'p.user_id')
  .where('u.first_name', 'like', '%a')
  .orderBy('u.id', 'asc')
  .limit(5);


console.log(join.toString());
join
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
