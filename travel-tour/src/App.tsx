import { useState, useEffect } from 'react'
import './App.css'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    console.log(tours);
 };

 useEffect(()=> {
  fetchTours();
 },[]);

  return (
    <main>
     <Tours tours={tours}/> 
    </main>
  )
}

export default App;
