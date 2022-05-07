const knex = require("../../config/database");

const insertSelect = knex(
  knex.raw(
    "?? (??, ??, ??)",
    ["profiles", "bio", "description", "user_id"]
  )
).insert((qb) => {
  qb.from("users").select(
    knex.raw(
      'concat("Bio de ", ??)',
      ['first_name']
    ),
    knex.raw(
      'concat("Description de", first_name)'
    ),
    "id"
  );
});

// const insertSelect = knex('profiles').insert(function() {
//   this.from('users').select('first_name', 'last_name');
// });

console.log(insertSelect.toString());
insertSelect
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });
