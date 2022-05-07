const knex = require("../../config/database");

const selectMultipleTables = knex.from(
    // knex.raw('users as u, profiles as p')
    knex.raw(
      '?? as ??, ?? as ??',
      ['users', 'u', 'profiles', 'p']
    )
  )
  .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
  .where('u.id', '=', knex.raw('??', ['p.user_id']));


console.log(selectMultipleTables.toString());
selectMultipleTables
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
