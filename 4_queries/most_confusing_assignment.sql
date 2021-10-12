SELECT assignments.id AS id , day , chapter , name , COUNT(assistance_requests.assignment_id) AS total_requests
FROM assistance_requests
JOIN assignments
ON assistance_requests.assignment_id = assignments.id
GROUP BY assignments.id
ORDER BY total_requests DESC;
