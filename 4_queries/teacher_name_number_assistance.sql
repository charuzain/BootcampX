SELECT DISTINCT(teachers.name) as teacher,
        cohorts.name as cohort, COUNT(assistance_requests.id) AS total_assistances
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN assistance_requests ON students.id = assistance_requests.student_id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name,cohorts.name
ORDER BY teacher;