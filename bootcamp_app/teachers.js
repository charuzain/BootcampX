const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const inputCl = process.argv[2];
pool.query(

`SELECT DISTINCT(teachers.name) as teacher,
        cohorts.name as cohort
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN assistance_requests ON students.id = assistance_requests.student_id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE cohorts.name LIKE '%${inputCl}%'
ORDER BY teacher;`


)
.then(res=>{
  //console.log(res.rows);
  res.rows.forEach(user=>{
    console.log(`${user.cohort}:${user.teacher}`);

  })
})
.catch(err => console.error('query error', err.stack));