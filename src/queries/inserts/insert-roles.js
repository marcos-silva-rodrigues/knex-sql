const knex = require("../../config/database");

const data = [
  {
    name: 'POST'
  },
  {
    name: 'DELETE'
  },
  {
    name: 'GET'
  },
  {
    name: 'PUT'
  },
];

const insert = knex("roles").insert(data);

console.log(insert.toString());
console.log(insert.toSQL().toNative());

insert
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    knex.destroy();
  });
