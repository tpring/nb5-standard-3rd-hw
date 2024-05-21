export default function App() {
    const students = [
        { name: 'Alice', age: 17, grade: 'A' },
        { name: 'Bob', age: 18, grade: 'B' },
        { name: 'Charlie', age: 16, grade: 'C' },
        { name: 'Diana', age: 19, grade: 'D' },
    ];

    // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
    const filteredStudents = students.filter((students) => students.age >= 18);

    const displayInfo = (students) => {
        alert(`나이: ${students.age}, 점수: ${students.grade}`);
    };

    return (
        <div>
            <h1>학생 목록</h1>
            <ul>
                {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
                {filteredStudents.map((students) => (
                    /* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/
                    <li key={students.name}>
                        <button onClick={() => displayInfo(students)}> {students.name} </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
