const knex = require("../../config/database");

const data = [
  // {
  //   first_name: "Helena",
  //   last_name: "A.",
  //   email: "1@gmail.com",
  //   password_hash: "3_hash",
  //   salary: 487.32,
  // },
  {
    first_name: "Joana",
    last_name: "B.",
    email: "2@gmail.com",
    password_hash: "4_hash",
    salary: 12335.22,
  },
  {
    first_name: "Rosana",
    last_name: "C.",
    email: "#@gmail.com",
    password_hash: "5_hash",
    salary: 6456.123,
  },
];

const insert = knex("users").insert(data);

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
