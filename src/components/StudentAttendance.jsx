
const StudentAttendance = ({ students }) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.name}>
          <span style={{ color: student.attending ? 'green' : 'red' }}>{student.name}</span>
          <div>{student.attending ? 'She is Here' : 'She is Not Here'}</div>
        </li>
      ))}
    </ul>
  );
};

export default StudentAttendance;