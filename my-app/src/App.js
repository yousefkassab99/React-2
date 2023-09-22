import { useState } from 'react';
import './App.css';

import Home from './pages/home/Home';

function App() {


  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;



















// {data.map((item) => {
//   return (
//     <div key={item.id}>{item.title}</div>

//   )


// })}

// const data = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "et porro tempora",
//     "completed": true
//   }
// ]