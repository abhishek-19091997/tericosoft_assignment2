import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import ShowPicture from './Components/ShowPicture';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { dataAction } from './Action/Action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then(response => response.json())
      .then(data => { 
        
        dataAction(data, dispatch);
      },[])

  })
  return (
    <div className="App">
      <Navbar />
      <ShowPicture/>
    </div>
  );
}

export default App;
 