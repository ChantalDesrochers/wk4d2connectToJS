
exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.alterTable('milestones', function(table){
     table.string('cats_name');
     table.date('cats_birthday')
   })
 ])
};


exports.down = function(knex, Promise) {
return Promise.all([
   knex.schema.dropTable('milestones')
 ])
};
