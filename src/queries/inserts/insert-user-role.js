const knex = require("../../config/database");

const insert = knex(knex.raw("users_roles (user_id, role_id)")).insert((qb) => {
  qb.select("id")
    .from("users")
    .select((qb) => {
      qb.select("id").from("roles").orderByRaw("rand()").limit(1);
    });
});

const insertIgnore = knex.raw(insert.toString().replace('insert', 'insert ignore'));
console.log(insertIgnore.toString());
insertIgnore
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
