const pg = require("pg");
const settings = require("./settings"); // settings.json
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const findPerson = require('./findPerson')(client);
// const person = process.argv[2];
// console.log(person);
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
    findPerson.findPersonSearch(process.argv[2], (err, result) => {
    if (err) {
      return console.error("error running query", err);
}
var arr = result.rows;
  arr.forEach(function(results) {
    console.log(`${results.id}: ${results.first_name} ${results.last_name}, born '${results.birthdate.toLocaleDateString()}'`);

  });

    client.end();
  });
});


// const person = process.argv[2];
// // console.log(person);
// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query(`SELECT * FROM famous_people WHERE first_name='${person}' OR last_name='${person}'`, (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//   var arr = result.rows;
//   arr.forEach(function(results) {
//     console.log(`${results.id}: ${results.first_name} ${results.last_name}, born ${results.birthdate}`);

//   });
//     client.end();
//   });
// });













// const person = process.argv[2];
// // console.log(person);
// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT * FROM famous_people WHERE (first_name ILIKE $1) OR (last_name ILIKE $2);", [person], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows);
//     client.end();
//   });
// });



// function findArtist(client, artist, callback) {
//   client.query(
//     "SELECT * FROM artists WHERE name = $1;",
//     [artist],
//     (err, result) => {
//       if (err) {
//         callback(err)
//         return
//       }
//       callback(null, result.rows)
//     }
//   );
// }
