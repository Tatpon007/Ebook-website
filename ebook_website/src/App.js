import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
const Title =() => <h1>login เข้าใช้งาน</h1>
const Description =() => <p>user ที่ทำการ register เเล้ว</p>
function App() {
  return (
    <div>
      <Title/>
      <Description/>
    </div>
  );
}

export default App;
