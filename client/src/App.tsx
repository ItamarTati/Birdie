import React, {useState, useEffect}  from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([])
  const url: string = 'http://localhost:4000/events'
  useEffect(() => {
    fetch(url) 
    .then(response => response.json())
    .then(shows => setData(shows))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}, []);
console.log(data)  
//@ts-ignore
  console.log(data.map((obj) => obj.id))
    //@ts-ignore
    console.log(data.filter((obj) => obj.event_type === 'mood_observation' ))
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
