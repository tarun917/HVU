import { useEffect, useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses/')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Courses:", data);
        setCourses(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.title} — {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;