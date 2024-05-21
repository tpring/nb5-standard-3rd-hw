// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList(/* 필요한 props를 여기에 전달하세요 */ { filteredStudents }) {
    return (
        <ul>
            {filteredStudents.map((student) => (
                <div key={student.name}>
                    <li>{student.name}</li>
                    나이 : {student.age}
                    학점 : {student.grade}
                </div>
            ))}
        </ul>
    );
}

export default StudentList;
