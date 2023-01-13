import { useState, useEffect } from 'react'
import './App.css'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter ((tour) => tour.id !== id)
    setTours(newTours);
 }

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
    <>
     <Tours tours={tours} removeTour={removeTour} /> 
    </>
  )
}

export default App;
