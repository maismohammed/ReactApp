import './App.css'; 
import StudentAttendance from './components/StudentAttendance';

const App = () => {
  const students = [
    { name: 'Mais', attending: false },
    { name: 'Athraa', attending: true },
    { name: 'Zahraa', attending: false },
    { name: 'Nada', attending: true },
  ];

  return (
    <div>
      <h1>Students List</h1>
      <div>
        <StudentAttendance students={students} />
      </div>
    </div>
  );
};

export default App;