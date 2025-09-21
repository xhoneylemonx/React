import React, { useState } from "react";

type CourseInputProps = {
    onAddCourse: (name: string, grade: string) => void;
};

function CourseInput({ onAddCourse }: CourseInputProps) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("A");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) return;
        onAddCourse(name, grade);
        setName(""); // เคลียร์ input
        setGrade("A");
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ marginBottom: "15px" }}>
                <input
                    type="text"
                    placeholder="ชื่อวิชา"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />

                <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>


                <button type="submit">เพิ่มวิชา</button>
            </form>
        </>
    );
}

export default CourseInput;