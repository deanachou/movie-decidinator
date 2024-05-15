/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('country_id').del()
  await knex('country_id').insert([
    {country: "Japan", country_id: '267'},
    {country: "USA", country_id: '78'},
   
  ]);
};
