import React, { useState } from "react";
import CourseInput from "./components/CourseInput";
import CourseList from "./components/CourseList";
import './App.css'
import React from 'react'
type Course = {
  name: string;
  grade: string;
};

const gradeToPoint: Record<string, number> = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [gpa, setGpa] = useState<number | null>(null);

  const addCourse = (name: string, grade: string) => {
    setCourses([...courses, { name, grade }]);
  };

  const calculateGPA = () => {
    if (courses.length === 0) return;
    const total = courses.reduce((sum, c) => sum + gradeToPoint[c.grade], 0);
    setGpa(total / courses.length);
  };

  return (
    <div >
      <h1>ระบบรายชื่อวิชาและคำนวณ GPA</h1>

      <CourseInput onAddCourse={addCourse} />
      <CourseList courses={courses} />

      <button onClick={calculateGPA} style={{ marginTop: "10px" }}>
        คำนวณ GPA
      </button>

      {gpa !== null && (
        <h3 style={{ marginTop: "10px" }}>🎯 GPA = {gpa.toFixed(2)}</h3>
      )}
    </div>
  );
}

export default App;