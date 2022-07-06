import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import {useState} from 'react';
function App() {
  const [data,setData]=useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login data={data} setData={setData}/>} />
        <Route path="/details" element={<Details data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
