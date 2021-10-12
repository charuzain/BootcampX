SELECT cohorts.name AS name,
        AVG(completed_at - started_at) AS average_assignment_time
FROM students
        JOIN cohorts ON students.cohort_id = cohorts.id
        JOIN assistance_requests ON students.id = assistance_requests.student_id
GROUP BY cohorts.name
ORDER BY average_assignment_time;