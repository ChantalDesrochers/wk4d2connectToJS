module.exports = function(knex) {
  function addPersonTo(first, last, bd, cb) {
    knex('famous_people')
      .insert([{"first_name": first, "last_name": last, "birthdate": bd}])
      .then(test =>
        cb(null, test)
      )
      .catch(err => cb(err))
  }
  return {
    addPersonTo
  };
};

// function findPersonSearch(name, callback) {
//     knex('famous_people').select()
//   .where("first_name", "ilike", name)
//   .then(rows => console.log(rows));
// }
// knex.select('first_name').from('test_db');


// knex.insert([{first_name: 'Chantal'}, {last_name: 'Desroc'}, {birthdate: 'April 12'}]).into('test_db');

/// must have


// knex.insert([{first_name: process.argv[1]}, {last_name: process.argv[2]}, {birthdate: process.argv[3]}).into('test_db');