const knex = require("../../config/database");

const deleteSql = knex("users").delete().whereBetween('id', [24, 29]);

console.log(deleteSql.toString());

deleteSql
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error('ERRO: ', e.message);
  })
  .finally(() => {
    knex.destroy();
  });

