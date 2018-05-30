
const settings = require("./settings"); // settings.json
// const findPerson = require("/findPerson");
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});
const findPerson = require('./findPerson')(knex);
const addPerson = require('./add_person')(knex);
  // findPerson.findPersonSearch(process.argv[2], (err, rows) => {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  //   var arr = rows;
  //   arr.forEach(function(results) {
  //     console.log(`${results.id}: ${results.first_name} ${results.last_name}, born '${results.birthdate.toLocaleDateString()}'`);
  //     // knex.destroy();
  //   });
  // });

  addPerson.addPersonTo(process.argv[2], process.argv[3], process.argv[4], (err, rows) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(rows);
    knex.destroy();
  });






