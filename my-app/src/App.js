import './App.css';
import Inputcard from './component/input card/Inputcard';
import TodosCard from './component/todos card/TodosCard';

function App() {
  return (
    <div className="container">
    <div className='first-div'>
      <h1>TODP List</h1>
    <Inputcard/>
  
    </div>
    <div className='second-div'>
    <TodosCard/>
    </div>
   
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