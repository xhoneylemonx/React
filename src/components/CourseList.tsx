

type Course = {
    name: string;
    grade: string;
};

type CourseListProps = {
    courses: Course[];
};

function CourseList({ courses }: CourseListProps) {
    return (
        <>
            <ul>
                {courses.map((course, index) => (
                    <li
                        key={index}
                        style={{
                            color: course.grade === "F" ? "red" : "black",
                            fontWeight: course.grade === "F" ? "bold" : "normal",
                        }}
                    >
                        {course.name} - เกรด: {course.grade}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CourseList;