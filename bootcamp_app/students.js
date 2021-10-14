const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const inputCl = process.argv.slice(2);
pool.query(
  `
SELECT students.id AS id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts
ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${inputCl[0]}%'
LIMIT ${inputCl[1]};
`)
.then(res=>{
  console.log(res.rows);
  res.rows.forEach(user=>{
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);

  })
})
.catch(err => console.error('query error', err.stack));