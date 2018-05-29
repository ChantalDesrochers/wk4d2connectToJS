
module.exports = function(client) {
  function findPersonSearch(name, callback) {
    const query = "SELECT * FROM famous_people WHERE (first_name ILIKE $1) OR (last_name ILIKE $1)";
    client.query(query, [`%${name}%`], callback);
  }
return {
  findPersonSearch: findPersonSearch
};
}