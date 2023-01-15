import { useState, useEffect } from 'react'
import './App.css'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter ((tour) => tour.id !== id)
    setTours(newTours);
 }

  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    console.log(tours);
    setLoading(false);
 };



 useEffect(()=> {
  fetchTours();
 },[]);

 //if (tours.length = []) return
 //window.location.reload(false);


  return (
    <>
    {loading? <h1>LOADING ...</h1> :  
     <Tours tours={tours} removeTour={removeTour} />} 
    </>
  )
}

export default App;
